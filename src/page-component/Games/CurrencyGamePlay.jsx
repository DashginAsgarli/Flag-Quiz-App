import React from 'react'
import { useState, useEffect, useContext, useRef } from "react";
import { CountryContext } from "../../api/CountryContext";
import { MdKeyboardBackspace } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Heart, Coins, Trophy, RotateCcw, Timer, CheckCircle2, XCircle } from "lucide-react";
function CurrencyGamePlay() {
  const { countries, loading } = useContext(CountryContext);
  const gameResultRef = useRef(null);

  const TOTAL_QUESTIONS = 20;
  const MAX_LIVES = 3;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameOver, setGameOver] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const getCurCode = (c) => (c?.currencies ? Object.keys(c.currencies)[0] : null);

  const generateQuestion = () => {
    if (!countries || countries.length === 0) return;

    const validCountries = countries.filter(c => getCurCode(c));
    const correct = validCountries[Math.floor(Math.random() * validCountries.length)];
    const correctCode = getCurCode(correct);

    const wrongOptions = [];
    const usedCodes = new Set([correctCode]);

    while (wrongOptions.length < 3) {
      const rand = validCountries[Math.floor(Math.random() * validCountries.length)];
      const code = getCurCode(rand);
      if (code && !usedCodes.has(code)) {
        wrongOptions.push(rand);
        usedCodes.add(code);
      }
    }

    setQuestion(correct);
    setOptions([...wrongOptions, correct].sort(() => Math.random() - 0.5));
    setTimeLeft(15);
    setSelectedAnswer(null);
  };

  const handleAnswer = (answerCode) => {
    if (selectedAnswer || gameOver) return;

    setSelectedAnswer(answerCode);
    const isCorrect = answerCode === getCurCode(question);

    setTimeout(() => {
      let nextLives = lives;
      if (isCorrect) {
        setScore(prev => prev + 50);
      } else {
        nextLives = lives - 1;
        setLives(nextLives);
      }

      if (currentIdx + 1 >= TOTAL_QUESTIONS || nextLives <= 0) {
        setGameOver(true);
      } else {
        setCurrentIdx(prev => prev + 1);
        generateQuestion();
      }
    }, 1000);
  };

  const restartGame = () => {
    setScore(0);
    setLives(MAX_LIVES);
    setCurrentIdx(0);
    setGameOver(false);
    generateQuestion();
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    if (countries?.length > 0 && !question) {
      generateQuestion();
    }
  }, [countries, question]);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver && !selectedAnswer) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 2000);
      return () => clearTimeout(timer);
    }
    if (timeLeft === 0 && !selectedAnswer) {
      handleAnswer(null);
    }
  }, [timeLeft, selectedAnswer, gameOver]);

  useEffect(() => {
    if (gameOver) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [gameOver]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-500 font-medium italic text-sm text-center tracking-tight">
            Valyutalar yüklənir...
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <section className="min-h-screen py-4 px-3 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50 mt-14 md:mt-23">
        <div className="max-w-6xl mx-auto">

          {!gameOver ? (
            <div className="lg:flex lg:gap-6">
              <div className="hidden lg:block lg:w-1/3">
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-5 md:p-6 hover:shadow-xl transition-shadow duration-300 sticky top-6">
                  <h1 className="text-lg font-bold text-slate-800 leading-none mb-2">Valyuta Oyunu</h1>
                  <p className="text-sm text-slate-400 font-medium mb-4">{currentIdx + 1} / {TOTAL_QUESTIONS}</p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {[...Array(MAX_LIVES)].map((_, i) => (<Heart key={i} size={18} fill={i < lives ? "#ef4444" : "none"} className={`${i < lives ? "text-red-600 hover:scale-110 transition-transform" : "text-slate-200"}`} />))}
                        </div>
                        <span className="text-sm font-medium text-slate-600">Can</span>
                      </div>
                    </div>

                    <div className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${timeLeft < 5 ? "bg-red-50 text-red-600 animate-pulse shadow-md shadow-red-200" : "bg-slate-100 text-slate-700"}`}>
                      <div className="flex items-center gap-2">
                        <Timer size={18} />
                        <span className="font-medium">Vaxt</span>
                      </div>
                      <span className="text-lg font-bold tabular-nums">{timeLeft}s</span>
                    </div>

                    <div className="flex items-center justify-between px-4 py-3 bg-amber-50 text-amber-700 rounded-xl shadow-sm">
                      <div className="flex items-center gap-2">
                        <Coins size={18} />
                        <span className="font-medium">Xal</span>
                      </div>
                      <span className="text-2xl font-bold">{score}</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-xs text-slate-400 font-medium mb-2">Tərəqqi</div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-slate-950 transition-all duration-700 ease-out shadow-md" style={{ width: `${((currentIdx + 1) / TOTAL_QUESTIONS) * 100}%` }}></div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="text-xs text-slate-500">
                      <p className="font-medium mb-1">Qaydalar:</p>
                      <ul className="space-y-1 text-slate-400">
                        <li>• Hər düzgün cavab: +50 xal</li>
                        <li>• Hər səhv cavab: -1 can</li>
                        <li>• Vaxt bitdikdə: səhv sayılır</li>
                        <li>• 3 canınız var</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="lg:hidden bg-white rounded-2xl shadow-lg border border-slate-200 p-5 md:p-7 mb-4 sm:mb-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h1 className="text-xs sm:text-sm font-bold text-slate-800 leading-none mb-1">Valyuta Oyunu</h1>
                      <p className="text-[10px] sm:text-xs text-slate-400 font-medium">{currentIdx + 1} / {TOTAL_QUESTIONS}</p>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                      <div className="flex gap-0.5 sm:gap-1">
                        {[...Array(MAX_LIVES)].map((_, i) => (
                          <Heart key={i} size={16} fill={i < lives ? "#ef4444" : "none"} className={`${i < lives ? "text-red-600 hover:scale-110 transition-transform" : "text-slate-200"}`} />
                        ))}
                      </div>

                      <div className={`flex items-center gap-1 px-2 py-1 rounded-xl transition-all duration-300 ${timeLeft < 5 ? "bg-red-50 text-red-600 animate-pulse shadow-md shadow-red-200" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}`}>
                        <Timer size={14} />
                        <span className="text-xs sm:text-sm font-bold tabular-nums">{timeLeft}s</span>
                      </div>

                      <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-700 rounded-xl hover:bg-amber-100 transition-colors duration-300 shadow-sm">
                        <Coins size={14} />
                        <span className="text-xs sm:text-sm font-bold">{score}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-slate-950 transition-all duration-700 ease-out shadow-md" style={{ width: `${((currentIdx + 1) / TOTAL_QUESTIONS) * 100}%` }}></div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:gap-6">
                  <div className="md:h-72 bg-white rounded-2xl shadow-lg border border-slate-200 p-3 sm:p-4 flex flex-col items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="w-full aspect-[2/1] sm:aspect-video bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center p-4 shadow-inner">
                      <img src={question?.flags?.svg} alt="Country flag" className="max-h-full max-w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
                    </div>
                    <p className="text-center text-slate-500 text-[11px] sm:text-sm font-medium mt-3 uppercase tracking-wider">
                      Bu hansı ölkənin valyuta kodudur?
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {options.map((opt, i) => {
                      const code = getCurCode(opt);
                      const isCorrect = code === getCurCode(question);
                      const isSelected = selectedAnswer === code;
                      let btnClass = "relative flex items-center justify-center text-center px-3 rounded-xl h-[52px] sm:h-16 lg:h-20 border transition-all duration-300 ";

                      if (selectedAnswer) {
                        if (isCorrect) btnClass += "bg-gradient-to-r from-emerald-50 to-green-50 border-emerald-400 text-emerald-800 scale-[1.02] z-10 shadow-lg shadow-emerald-200/50";
                        else if (isSelected) btnClass += "bg-gradient-to-r from-red-50 to-rose-50 border-red-400 text-red-800 opacity-90 shadow-md shadow-red-200/50";
                        else btnClass += "bg-white border-slate-100 text-slate-300 opacity-50";
                      } else {
                        btnClass += "bg-white border-slate-200 hover:border-blue-400 hover:bg-gradient-to-br hover:from-blue-50 hover:to-white hover:text-blue-700 text-slate-700 hover:shadow-lg hover:shadow-blue-200/50 hover:-translate-y-1 active:translate-y-0";
                      }

                      return (
                        <button key={i} disabled={!!selectedAnswer} onClick={() => handleAnswer(code)} className={btnClass}>
                          <span className="font-bold text-[14px] sm:text-lg lg:text-xl">{code}</span>
                          {selectedAnswer && isCorrect && <CheckCircle2 size={16} className="absolute top-2 right-2 text-emerald-500" />}
                          {selectedAnswer && isSelected && !isCorrect && <XCircle size={16} className="absolute top-2 right-2 text-red-500" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="lg:hidden bg-white rounded-xl shadow-lg border border-slate-200 py-3 px-4 md:p-6 mb-4 sm:mb-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-xs text-slate-500">
                      <p className="font-medium mb-2 text-sm md:text-[20px]" >Oyun Qaydaları:</p>
                      <ul className=" md:leading-6 md:text-[16px] text-slate-400">
                        <li className="flex items-start gap-2">
                          <span className=" font-bold">•</span>
                          <span>Hər düzgün cavab: +50 xal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className=" font-bold">•</span>
                          <span>Hər səhv cavab: -1 can</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className=" font-bold">•</span>
                          <span>Vaxt bitdikdə səhv sayılır.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className=" font-bold">•</span>
                          <span>Ümumi can sayı: 3</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div ref={gameResultRef} className="max-w-md mx-auto bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl border border-slate-200 p-6 md:p-8 text-center hover:shadow-3xl transition-shadow duration-500">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Trophy size={28} className="text-gradient-to-r from-blue-500 to-indigo-600" />
              </div>
              <h2 className="text-2xl font-black text-slate-800 mb-1 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">Oyun Bitdi!</h2>
              <p className="text-slate-400 text-sm mb-6 font-medium">Nəticələriniz aşağıdakı kimidir</p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-3 border border-slate-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Ümumi Xal</div>
                  <div className="flex items-center justify-center gap-1 text-xl font-black text-slate-800">
                    <Coins className="text-gradient-to-r from-amber-500 to-yellow-500" size={18} /> {score}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-3 border border-slate-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Düzgün</div>
                  <div className="text-xl font-black text-slate-800">
                    {Math.floor(score / 50)} / {TOTAL_QUESTIONS}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full">
                <button onClick={restartGame} className="flex-1 h-[52px] bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:from-slate-800 hover:to-slate-700 transition-all duration-300 shadow-lg shadow-slate-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
                  <RotateCcw size={18} />
                  <span className="text-xs sm:text-sm whitespace-nowrap">Yenidən Başla</span>
                </button>

                <NavLink to="/games/currency" className="flex-1 h-[52px] bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:from-slate-800 hover:to-slate-700 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 group shadow-lg shadow-slate-300 hover:shadow-xl hover:-translate-y-1 active:translate-y-0">
                  <MdKeyboardBackspace size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="font-bold text-xs uppercase tracking-wider whitespace-nowrap">Oyundan çıx</span>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default CurrencyGamePlay
