import { useState, useEffect, useContext, useRef } from "react";
import { CountryContext } from "../../../contexts/CountryContext";
import { useGame } from "../../../contexts/GameContext";
import { useLanguage } from "../../../contexts/LanguageContext";
import { GameHUD, GameSidebar } from "../shared/GameLayout";
import { GameResult } from "../shared/GameResult";
import { GameRules } from "../shared/GameRules";
import { HintBar } from "../shared/HintBar";
import { CheckCircle2, XCircle } from "lucide-react";
import { Spinner } from "../../../components/ui/Spinner";

const TOTAL_QUESTIONS = 20;
const MAX_LIVES = 3;

function FlagGamePlay() {
  const { countries, loading } = useContext(CountryContext);
  const { saveGameResult } = useGame();
  const { t } = useLanguage();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [usedHints, setUsedHints] = useState([]);
  const [eliminatedOptions, setEliminatedOptions] = useState([]);
  const [revealedAnswer, setRevealedAnswer] = useState(false);
  const [doubleNext, setDoubleNext] = useState(false);
  const savedRef = useRef(false);

  const generateQuestion = () => {
    if (!countries?.length) return;
    const correct = countries[Math.floor(Math.random() * countries.length)];
    const wrong = countries
      .filter(c => c.name.common !== correct.name.common)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    setQuestion(correct);
    setOptions([...wrong, correct].sort(() => Math.random() - 0.5));
    setTimeLeft(15);
    setSelectedAnswer(null);
    setEliminatedOptions([]);
    setRevealedAnswer(false);
  };

  const endGame = (finalScore) => {
    if (!savedRef.current) {
      savedRef.current = true;
      saveGameResult({ gameType: "flag", score: finalScore, correct: Math.floor(finalScore / 50), total: TOTAL_QUESTIONS, timeMs: null });
    }
    setGameOver(true);
  };

  const handleAnswer = (answer) => {
    if (selectedAnswer || gameOver) return;
    setSelectedAnswer(answer);
    const isCorrect = answer === question?.name.common;
    setTimeout(() => {
      let nextLives = lives;
      let nextScore = score;
      if (isCorrect) {
        const points = doubleNext ? 100 : 50;
        nextScore = score + points;
        setScore(nextScore);
        setDoubleNext(false);
      } else {
        nextLives = lives - 1;
        setLives(nextLives);
      }
      if (currentIdx + 1 >= TOTAL_QUESTIONS || nextLives <= 0) endGame(nextScore);
      else { setCurrentIdx(p => p + 1); generateQuestion(); }
    }, 1000);
  };

  const handleUseHint = (hint) => {
    setUsedHints(prev => [...prev, hint.id]);

    if (hint.id === "hint_5050") {
      const wrongOpts = options.filter(o => o.name.common !== question?.name.common);
      const toEliminate = wrongOpts.sort(() => Math.random() - 0.5).slice(0, 2).map(o => o.name.common);
      setEliminatedOptions(toEliminate);
    }

    if (hint.id === "hint_time") { setTimeLeft(prev => prev + 10); }

    if (hint.id === "hint_reveal") { setRevealedAnswer(true); }

    if (hint.id === "hint_skip") {
      if (currentIdx + 1 >= TOTAL_QUESTIONS) endGame(score);
      else { setCurrentIdx(p => p + 1); generateQuestion(); }
    }

    if (hint.id === "hint_double") { setDoubleNext(true); }
  };

  const restartGame = () => {
    savedRef.current = false;
    setScore(0); setLives(MAX_LIVES); setCurrentIdx(0);
    setGameOver(false); setUsedHints([]); setDoubleNext(false);
    generateQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => { if (countries?.length && !question) generateQuestion(); }, [countries]);
  useEffect(() => {
    if (timeLeft > 0 && !gameOver && !selectedAnswer) {
      const timer = setTimeout(() => setTimeLeft(p => p - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0 && !selectedAnswer) handleAnswer(null);
  }, [timeLeft, selectedAnswer, gameOver]);

  if (loading) return <Spinner fullScreen />;
  if (gameOver) return (
    <section className="min-h-screen py-8 px-4 bg-linear-to-br from-slate-50 to-blue-50 mt-14 md:mt-23 flex items-center justify-center">
      <GameResult score={score} totalQuestions={TOTAL_QUESTIONS} onRestart={restartGame} backTo="/games/flag" />
    </section>
  );

  return (
    <section className="min-h-screen py-4 px-3 sm:px-6 bg-linear-to-br from-slate-50 to-blue-50 mt-14 md:mt-23">
      <div className="max-w-6xl mx-auto">
        <div className="lg:flex lg:gap-6">
          <GameSidebar title="Bayraq Oyunu" currentIdx={currentIdx} total={TOTAL_QUESTIONS} lives={lives} maxLives={MAX_LIVES} timeLeft={timeLeft} score={score} />
          <div className="lg:w-2/3">
            <GameHUD title="Bayraq Oyunu" currentIdx={currentIdx} total={TOTAL_QUESTIONS} lives={lives} maxLives={MAX_LIVES} timeLeft={timeLeft} score={score} />

            {doubleNext && (
              <div className="mb-3 p-2 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center gap-2">
                <span className="text-amber-600 font-black text-sm">✖️2 Qoşa Xal aktiv! Bu cavab 100 xal verir</span>
              </div>
            )}

            <HintBar onUseHint={handleUseHint} usedHints={usedHints} disabled={!!selectedAnswer} />

            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="md:h-72 bg-white rounded-2xl shadow-lg border border-slate-200 p-3 sm:p-4 flex flex-col items-center hover:shadow-xl transition-all">
                <div className="w-full aspect-2/1 sm:aspect-video bg-linear-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center p-4 shadow-inner">
                  <img src={question?.flags?.svg} alt="Flag" className="max-h-full max-w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-center text-slate-500 text-[11px] sm:text-sm font-medium mt-3 uppercase tracking-wider">{t("game.flagQ")}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {options.map((opt, i) => {
                  const isCorrect = opt.name.common === question?.name.common;
                  const isSelected = selectedAnswer === opt.name.common;
                  const isEliminated = eliminatedOptions.includes(opt.name.common);
                  const isRevealed = revealedAnswer && isCorrect;

                  let cls = "relative flex items-center justify-center text-center px-3 rounded-xl h-[52px] sm:h-16 lg:h-20 border transition-all duration-300 ";

                  if (isEliminated) {
                    cls += "bg-slate-50 border-slate-100 text-slate-200 opacity-40 cursor-not-allowed line-through";
                  } else if (isRevealed && !selectedAnswer) {
                    cls += "bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-300 text-amber-800 ring-2 ring-amber-300 ring-offset-1 animate-pulse";
                  } else if (selectedAnswer) {
                    if (isCorrect) cls += "bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-400 text-emerald-800 scale-[1.02] z-10 shadow-lg";
                    else if (isSelected) cls += "bg-gradient-to-r from-red-50 to-rose-50 border-red-400 text-red-800 opacity-90";
                    else cls += "bg-white border-slate-100 text-slate-300 opacity-50";
                  } else {
                    cls += "bg-white border-slate-200 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white hover:text-blue-700 text-slate-700 hover:shadow-lg hover:-translate-y-1 cursor-pointer";
                  }

                  return (
                    <button key={i} disabled={!!selectedAnswer || isEliminated} onClick={() => !isEliminated && handleAnswer(opt.name.common)} className={cls}>
                      <span className="font-bold text-[11px] sm:text-sm lg:text-base">{opt.name.common}</span>
                      {isRevealed && !selectedAnswer && !isEliminated && <span className="absolute top-1.5 right-2 text-amber-500 text-xs">👁️</span>}
                      {selectedAnswer && isCorrect && <CheckCircle2 size={16} className="absolute top-2 right-2 text-emerald-500" />}
                      {selectedAnswer && isSelected && !isCorrect && <XCircle size={16} className="absolute top-2 right-2 text-red-500" />}
                    </button>
                  );
                })}
              </div>
              <GameRules />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FlagGamePlay