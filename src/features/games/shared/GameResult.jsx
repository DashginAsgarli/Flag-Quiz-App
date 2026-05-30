import { Trophy, RotateCcw, Coins } from "lucide-react";
import { MdKeyboardBackspace } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../../contexts/LanguageContext";

export function GameResult({ score, totalQuestions, onRestart, backTo }) {
  const { t } = useLanguage();
  return (
    <div className="max-w-md mx-auto bg-linear-to-br from-white to-slate-50 rounded-3xl shadow-2xl border border-slate-200 p-6 md:p-8 text-center">
      <div className="w-12 h-12 bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
        <Trophy size={28} className="text-blue-600" />
      </div>
      <h2 className="text-2xl font-black text-slate-800 mb-1">{t("game.over")}</h2>
      <p className="text-slate-400 text-sm mb-6 font-medium">Nəticələriniz aşağıdakı kimidir</p>
      <div className="grid grid-cols-2 gap-3 mb-8">
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 shadow-md">
          <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">{t("game.total")}</div>
          <div className="flex items-center justify-center gap-1 text-xl font-black text-slate-800">
            <Coins className="text-amber-500" size={18} /> {score}
          </div>
        </div>
        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 shadow-md">
          <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">{t("game.correct")}</div>
          <div className="text-xl font-black text-slate-800">{Math.floor(score / 50)} / {totalQuestions}</div>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full">
        <button onClick={onRestart} className="flex-1 h-13 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-lg">
          <RotateCcw size={18} /><span>{t("game.restart")}</span>
        </button>
        <NavLink to={backTo} className="flex-1 h-13 bg-slate-900 text-white rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg hover:bg-slate-800">
          <MdKeyboardBackspace size={20} />
          <span className="font-bold text-xs uppercase">{t("game.exit")}</span>
        </NavLink>
      </div>
    </div>
  );
}