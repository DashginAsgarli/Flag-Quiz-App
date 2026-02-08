import React, { useState, useEffect, useContext } from 'react';
import { CountryContext } from "../../api/CountryContext";
import { Trophy, Clock, RotateCcw } from "lucide-react";

function GlobalGamePlay() {
    const { countries, loading } = useContext(CountryContext);
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const initGame = () => {
        if (!countries || countries.length === 0) return;

        const selected = [...countries]
            .sort(() => Math.random() - 0.5)
            .slice(0, 6);

        const cardSet = [];
        selected.forEach((country, index) => {
            cardSet.push({
                uniqueId: `flag-${index}`,
                content: country.flags.svg,
                type: 'flag',
                matchId: country.name.common,
            });
            cardSet.push({
                uniqueId: `name-${index}`,
                content: country.name.common,
                type: 'name',
                matchId: country.name.common,
            });
        });

        setCards(cardSet.sort(() => Math.random() - 0.5));
        setMatchedCards([]);
        setFlippedCards([]);
        setGameOver(false);
        setSeconds(0);
        setIsActive(false);
    };

    useEffect(() => {
        let interval = null;
        if (isActive && !gameOver) {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, gameOver]);

    useEffect(() => {
        initGame();
    }, [countries]);

    const handleCardClick = (card) => {
        if (!isActive && !gameOver) {
            setIsActive(true);
        }

        if (matchedCards.includes(card.uniqueId) ||
            flippedCards.length === 2 ||
            flippedCards.find(c => c.uniqueId === card.uniqueId)) return;

        const newFlipped = [...flippedCards, card];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            if (newFlipped[0].matchId === newFlipped[1].matchId) {
                setMatchedCards(prev => [...prev, newFlipped[0].uniqueId, newFlipped[1].uniqueId]);
                setFlippedCards([]);
            } else {
                setTimeout(() => {
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    useEffect(() => {
        if (cards.length > 0 && matchedCards.length === cards.length) {
            setGameOver(true);
            setIsActive(false);
        }
    }, [matchedCards, cards]);

    const formatTime = (totalSeconds) => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    if (loading) return <div className="p-20 text-center font-black animate-pulse uppercase tracking-widest text-slate-400">Yüklənir...</div>;

    return (
        <>
            <section className="min-h-screen py-8 px-4 bg-slate-50 mt-12 md:mt-20 font-sans">
                <div className="max-w-4xl mx-auto">
                    {!gameOver && (
                        <div className="flex justify-between items-center mb-8 bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-top-4 duration-500">
                            <h2 className="text-[15px] md:text-xl font-black italic tracking-tighter text-slate-800 uppercase">Yaddaş Testi</h2>
                            <div className="flex gap-2">
                                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-2xl border border-blue-100">
                                    <Clock size={16} className="text-blue-600" />
                                    <span className="text-lg font-black text-blue-700 mono">{formatTime(seconds)}</span>
                                </div>
                                <div className="flex items-center gap-3 bg-emerald-50 px-5 py-2 rounded-2xl border border-emerald-100">
                                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Xal:</span>
                                    <span className="text-xl font-black text-emerald-700 leading-none">{matchedCards.length * 50}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {!gameOver ? (
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                            {cards.map((card) => {
                                const isOpen = flippedCards.some(c => c.uniqueId === card.uniqueId) ||
                                    matchedCards.includes(card.uniqueId);

                                return (
                                    <div key={card.uniqueId} onClick={() => handleCardClick(card)} className="h-24 sm:h-32 md:h-36 cursor-pointer">
                                        <div className={`relative w-full h-full transition-all duration-500 transform-style-3d ${isOpen ? 'rotate-y-180' : ''}`}>
                                            <div className="absolute inset-0 bg-slate-900 rounded-2xl border-2 border-slate-800 flex items-center justify-center backface-hidden shadow-lg">
                                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-20">
                                                    <span className="text-white font-black">?</span>
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 bg-white rounded-2xl border-4 border-white flex items-center justify-center backface-hidden rotate-y-180 shadow-xl overflow-hidden">
                                                {card.type === 'flag' ? (
                                                    <img src={card.content} alt="flag" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="p-2 text-center">
                                                        <span className="text-[10px] sm:text-xs md:text-sm font-black text-slate-800 uppercase italic leading-tight">
                                                            {card.content}
                                                        </span>
                                                    </div>
                                                )}
                                                {matchedCards.includes(card.uniqueId) && (
                                                    <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center backdrop-blur-[1px]"></div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center bg-white p-12 rounded-[2rem] shadow-2xl border border-slate-100 animate-in zoom-in duration-500 max-w-md mx-auto">
                            <div className="relative inline-block mb-6">
                                <Trophy size={80} className="text-yellow-500 animate-bounce" />
                                <div className="absolute -inset-1 bg-yellow-400/20 blur-xl rounded-full"></div>
                            </div>
                            <h2 className="text-4xl font-black italic text-slate-900 mb-2">ƏLA İŞ!</h2>
                            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-8">Tapşırığı uğurla tamamladın</p>
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                                    <p className="text-[10px] font-black text-blue-600 uppercase mb-1">Zaman</p>
                                    <p className="text-2xl font-black text-blue-700">{formatTime(seconds)}</p>
                                </div>
                                <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                                    <p className="text-[10px] font-black text-emerald-600 uppercase mb-1">Toplam Xal</p>
                                    <p className="text-2xl font-black text-emerald-700">{matchedCards.length * 50}</p>
                                </div>
                            </div>
                            <button onClick={initGame} className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-blue-600 transition-all shadow-xl active:scale-95">
                                <RotateCcw size={20} />
                                TƏKRAR OYNA
                            </button>
                        </div>
                    )}
                </div>
                <style dangerouslySetInnerHTML={{
                    __html: `
                .perspective-1000 { perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
                .rotate-y-180 { transform: rotateY(180deg); }
                .mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
            `}} />
            </section>
        </>
    );
}

export default GlobalGamePlay;