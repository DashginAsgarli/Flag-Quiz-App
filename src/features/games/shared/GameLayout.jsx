import { Heart, Coins, Timer } from "lucide-react";
import { useLanguage } from "../../../contexts/LanguageContext";

export function GameHUD({ title, currentIdx, total, lives, maxLives, timeLeft, score }) {
  const { t } = useLanguage();
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-5 mb-4 hover:shadow-xl transition-shadow lg:hidden">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h1 className="text-xs sm:text-sm font-bold text-slate-800 leading-none mb-1">{title}</h1>
          <p className="text-[10px] sm:text-xs text-slate-400 font-medium">{currentIdx + 1} / {total}</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex gap-0.5 sm:gap-1">
            {[...Array(maxLives)].map((_, i) => (
              <Heart key={i} size={16} fill={i < lives ? "#ef4444" : "none"} className={i < lives ? "text-red-600" : "text-slate-200"} />
            ))}
          </div>
          <div className={`flex items-center gap-1 px-2 py-1 rounded-xl transition-all ${timeLeft < 5 ? "bg-red-50 text-red-600 animate-pulse" : "bg-slate-100 text-slate-700"}`}>
            <Timer size={14} />
            <span className="text-xs sm:text-sm font-bold tabular-nums">{timeLeft}s</span>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-700 rounded-xl shadow-sm">
            <Coins size={14} />
            <span className="text-xs sm:text-sm font-bold">{score}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 h-2 w-full bg-slate-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-blue-500 to-slate-950 transition-all duration-700 ease-out"
          style={{ width: `${((currentIdx + 1) / total) * 100}%` }}
        />
      </div>
    </div>
  );
}

export function GameSidebar({ title, currentIdx, total, lives, maxLives, timeLeft, score }) {
  const { t } = useLanguage();
  return (
    <div className="hidden lg:block lg:w-1/3">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-5 md:p-6 hover:shadow-xl transition-shadow sticky top-6">
        <h1 className="text-lg font-bold text-slate-800 leading-none mb-2">{title}</h1>
        <p className="text-sm text-slate-400 font-medium mb-4">{currentIdx + 1} / {total}</p>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            {[...Array(maxLives)].map((_, i) => (
              <Heart key={i} size={18} fill={i < lives ? "#ef4444" : "none"} className={i < lives ? "text-red-600" : "text-slate-200"} />
            ))}
            <span className="text-sm font-medium text-slate-600 ml-1">{t("game.lives")}</span>
          </div>
          <div className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all ${timeLeft < 5 ? "bg-red-50 text-red-600 animate-pulse" : "bg-slate-100 text-slate-700"}`}>
            <div className="flex items-center gap-2"><Timer size={18} /><span className="font-medium">{t("game.time")}</span></div>
            <span className="text-lg font-bold tabular-nums">{timeLeft}s</span>
          </div>
          <div className="flex items-center justify-between px-4 py-3 bg-amber-50 text-amber-700 rounded-xl shadow-sm">
            <div className="flex items-center gap-2"><Coins size={18} /><span className="font-medium">{t("game.score")}</span></div>
            <span className="text-2xl font-bold">{score}</span>
          </div>
        </div>
        <div className="mt-6">
          <div className="text-xs text-slate-400 font-medium mb-2">{t("game.progress")}</div>
          <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
            <div className="h-full bg-linear-to-r from-blue-500 to-slate-950 transition-all duration-700" style={{ width: `${((currentIdx + 1) / total) * 100}%` }} />
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500">
          <p className="font-medium mb-1">{t("game.rules")}:</p>
          <ul className="space-y-1 text-slate-400">
            {[t("game.rule1"), t("game.rule2"), t("game.rule3"), t("game.rule4")].map((r, i) => (
              <li key={i}>• {r}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}