import { useState, useEffect, useContext, useRef } from "react";
import { CountryContext } from "../../../contexts/CountryContext";
import { useGame } from "../../../contexts/GameContext";
import { useLanguage } from "../../../contexts/LanguageContext";
import { GameHUD, GameSidebar } from "../shared/GameLayout";
import { GameResult } from "../shared/GameResult";
import { GameRules } from "../shared/GameRules";
import { CheckCircle2, XCircle } from "lucide-react";
import { Spinner } from "../../../components/ui/Spinner";
import { HintBar } from "../shared/HintBar";

const TOTAL_QUESTIONS = 20;
const MAX_LIVES = 3;

function CurrencyGamePlay() {
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
  const savedRef = useRef(false);
  const [usedHints, setUsedHints] = useState([]);
  const [eliminatedOptions, setEliminatedOptions] = useState([]);
  const [revealedAnswer, setRevealedAnswer] = useState(false);
  const [doubleNext, setDoubleNext] = useState(false);
  const getCurCode = c => (c?.currencies ? Object.keys(c.currencies)[0] : null);

  const generateQuestion = () => {
    if (!countries?.length) return;
    const valid = countries.filter(c => getCurCode(c));
    const correct = valid[Math.floor(Math.random() * valid.length)];
    const correctCode = getCurCode(correct);
    const wrong = [];
    const used = new Set([correctCode]);
    while (wrong.length < 3) {
      const r = valid[Math.floor(Math.random() * valid.length)];
      const code = getCurCode(r);
      if (code && !used.has(code)) { wrong.push(r); used.add(code); }
    }
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
      saveGameResult({ gameType: "currency", score: finalScore, correct: Math.floor(finalScore / 50), total: TOTAL_QUESTIONS, timeMs: null });
    }
    setGameOver(true);
  };

  const handleUseHint = (hint) => {
    setUsedHints(prev => [...prev, hint.id]);
    if (hint.id === "hint_5050") {
      const correctCode = getCurCode(question);
      const wrongOpts = options.filter(o => getCurCode(o) !== correctCode);
      const toEliminate = wrongOpts.sort(() => Math.random() - 0.5).slice(0, 2).map(o => getCurCode(o));
      setEliminatedOptions(toEliminate);
    }
    if (hint.id === "hint_time") setTimeLeft(p => p + 10);
    if (hint.id === "hint_reveal") setRevealedAnswer(true);
    if (hint.id === "hint_skip") {
      if (currentIdx + 1 >= TOTAL_QUESTIONS) endGame(score);
      else { setCurrentIdx(p => p + 1); generateQuestion(); }
    }
    if (hint.id === "hint_double") setDoubleNext(true);
  };

  const handleAnswer = (answerCode) => {
    if (selectedAnswer || gameOver) return;
    setSelectedAnswer(answerCode);
    const isCorrect = answerCode === getCurCode(question);
    setTimeout(() => {
      let nextLives = lives;
      let nextScore = score;
      if (isCorrect) { nextScore = score + 50; setScore(nextScore); }
      else { nextLives = lives - 1; setLives(nextLives); }
      if (currentIdx + 1 >= TOTAL_QUESTIONS || nextLives <= 0) endGame(nextScore);
      else { setCurrentIdx(p => p + 1); generateQuestion(); }
    }, 1000);
  };

  const restartGame = () => {
    savedRef.current = false;
    setScore(0); setLives(MAX_LIVES); setCurrentIdx(0);
    setGameOver(false); generateQuestion();
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
      <GameResult score={score} totalQuestions={TOTAL_QUESTIONS} onRestart={restartGame} backTo="/games/currency" />
    </section>
  );

  return (
    <section className="min-h-screen py-4 px-3 sm:px-6 bg-linear-to-br from-slate-50 to-blue-50 mt-14 md:mt-23">
      <div className="max-w-6xl mx-auto">
        <div className="lg:flex lg:gap-6">
          <GameSidebar title="Valyuta Oyunu" currentIdx={currentIdx} total={TOTAL_QUESTIONS} lives={lives} maxLives={MAX_LIVES} timeLeft={timeLeft} score={score} />
          <div className="lg:w-2/3">
            <GameHUD title="Valyuta Oyunu" currentIdx={currentIdx} total={TOTAL_QUESTIONS} lives={lives} maxLives={MAX_LIVES} timeLeft={timeLeft} score={score} />
            {doubleNext && (
              <div className="mb-3 p-2 bg-amber-50 border border-amber-200 rounded-xl flex items-center justify-center">
                <span className="text-amber-600 font-black text-sm">✖️2 Qoşa Xal aktiv!</span>
              </div>
            )}
            <HintBar onUseHint={handleUseHint} usedHints={usedHints} disabled={!!selectedAnswer} />

            <div className="flex flex-col gap-4 sm:gap-6 mt-4">
              <div className="md:h-72 bg-white rounded-2xl shadow-lg border border-slate-200 p-3 sm:p-4 flex flex-col items-center hover:shadow-xl transition-all">
                <div className="w-full aspect-2/1 sm:aspect-video bg-linear-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center p-4 shadow-inner">
                  <img src={question?.flags?.svg} alt="Flag" className="max-h-full max-w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                </div>
                <p className="text-center text-slate-500 text-[11px] sm:text-sm font-medium mt-3 uppercase tracking-wider">{t("game.currencyQ")}</p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {options.map((opt, i) => {
                  const code = getCurCode(opt);
                  const isCorrect = code === getCurCode(question);
                  const isSelected = selectedAnswer === code;
                  const isEliminated = eliminatedOptions.includes(code);
                  const isRevealedOpt = revealedAnswer && isCorrect;

                  if (isEliminated) return <div key={i} className="h-13 sm:h-16 lg:h-20" />;

                  let cls = "relative flex items-center justify-center text-center px-3 rounded-xl h-[52px] sm:h-16 lg:h-20 border transition-all duration-300 ";
                  if (selectedAnswer || isRevealedOpt) {
                    if (isCorrect) cls += "bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-400 text-emerald-800 scale-[1.02] shadow-lg";
                    else if (isSelected) cls += "bg-gradient-to-r from-red-50 to-rose-50 border-red-400 text-red-800 opacity-90";
                    else cls += "bg-white border-slate-100 text-slate-300 opacity-50";
                  } else {
                    cls += "bg-white border-slate-200 hover:border-blue-400 hover:from-blue-50 hover:to-white hover:bg-gradient-to-br hover:text-blue-700 text-slate-700 hover:shadow-lg hover:-translate-y-1";
                  }
                  return (
                    <button key={i} disabled={!!selectedAnswer || isRevealedOpt} onClick={() => handleAnswer(code)} className={cls}>
                      <span className="font-bold text-[14px] sm:text-lg lg:text-xl">{code}</span>
                      {(selectedAnswer || isRevealedOpt) && isCorrect && <CheckCircle2 size={16} className="absolute top-2 right-2 text-emerald-500" />}
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

export default CurrencyGamePlay