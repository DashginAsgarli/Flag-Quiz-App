import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useLanguage } from "../../../contexts/LanguageContext";
import { GAME_HINTS } from "../../../utils/shopItems";
import { FaCoins } from "react-icons/fa";

export function HintBar({ onUseHint, usedHints = [], disabled = false }) {
  const { user, updateUser } = useAuth();
  const { t } = useLanguage();
  const [confirmHint, setConfirmHint] = useState(null);

  const handleHintClick = (hint) => {
    if (disabled) return;
    if (usedHints.includes(hint.id)) return;
    if ((user?.coin ?? 0) < hint.price) {
      alert(`Bu köməyi almaq üçün ${hint.price} Coin lazımdır. Cari balans: ${user?.coin ?? 0}`);
      return;
    }
    setConfirmHint(hint);
  };

  const confirmUse = () => {
    if (!confirmHint) return;
    updateUser({ coin: (user.coin - confirmHint.price) });
    onUseHint(confirmHint);
    setConfirmHint(null);
  };

  return (
    <>
      <div className="flex items-center gap-2 flex-wrap justify-center mb-4">
        <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl mr-2">
          <FaCoins className="text-amber-500" size={12} />
          <span className="text-xs font-black text-amber-700">{(user?.coin ?? 0).toLocaleString()}</span>
        </div>
        {GAME_HINTS.map(hint => {
          const used = usedHints.includes(hint.id);
          const canAfford = (user?.coin ?? 0) >= hint.price;
          return (
            <button key={hint.id} disabled={disabled || used} onClick={() => handleHintClick(hint)} title={`${hint.name} — ${hint.desc}`} className={`relative flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl border text-xs font-bold transition-all duration-200 min-w-15    ${used ? "bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed opacity-50" : canAfford ? "bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700 hover:-translate-y-0.5 hover:shadow-md active:scale-95 cursor-pointer" : "bg-slate-50 border-slate-100 text-slate-400 cursor-not-allowed"}`}>
              <span className="text-lg leading-none">{used ? "✓" : hint.emoji}</span>
              <span className="text-[9px] leading-none">{hint.name}</span>
              <span className={`text-[8px] font-black ${canAfford ? "text-amber-600" : "text-red-400"}`}>
                {hint.price}🪙
              </span>
              {used && (
                <div className="absolute inset-0 bg-white/60 rounded-xl flex items-center justify-center">
                  <span className="text-emerald-500 text-lg">✓</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {confirmHint && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.5)" }}>
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl">
            <div className="text-center mb-4">
              <span className="text-4xl">{confirmHint.emoji}</span>
              <h3 className="text-lg font-black text-slate-900 mt-2">{confirmHint.name}</h3>
              <p className="text-sm text-slate-500 mt-1">{confirmHint.desc}</p>
            </div>
            <div className="flex items-center justify-center gap-2 mb-5 p-3 bg-amber-50 rounded-xl border border-amber-100">
              <FaCoins className="text-amber-500" size={16} />
              <span className="font-black text-amber-700">{confirmHint.price} Coin xərclənəcək</span>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setConfirmHint(null)} className="flex-1 py-2.5 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
                Ləğv et
              </button>
              <button onClick={confirmUse} className="flex-1 py-2.5 bg-red-600 text-white rounded-xl font-bold text-sm hover:bg-red-700 transition-colors">
                İstifadə et
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}