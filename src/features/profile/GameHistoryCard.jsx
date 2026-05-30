import { useGame } from "../../contexts/GameContext";
import { useLanguage } from "../../contexts/LanguageContext";
import { FaHistory, FaTrophy, FaClock } from "react-icons/fa";

const GAME_LABELS = {
    flag: "Bayraq Oyunu",
    currency: "Valyuta Oyunu",
    continent: "Qitə Oyunu",
    memory: "Yaddaş Oyunu",
};

export function GameHistoryCard() {
    const { history } = useGame();
    const { t } = useLanguage();

    if (!history.length) return (
        <div className="p-6 rounded-[1.2rem] border border-slate-200 bg-white shadow-sm text-center">
            <FaHistory size={32} className="text-slate-200 mx-auto mb-2" />
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hələ oyun oynanılmayıb</p>
        </div>
    );

    return (
        <div className="p-6 rounded-[1.2rem] border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-100 text-orange-600 rounded-xl">
                    <FaHistory size={16} />
                </div>
                <h3 className="font-black text-slate-800 italic text-sm uppercase tracking-tighter">
                    {t("profile.history")}
                </h3>
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {history.map(entry => (
                    <div key={entry.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center">
                                <FaTrophy size={12} className="text-slate-500" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-700">
                                    {GAME_LABELS[entry.gameType] ?? entry.gameType}
                                </p>
                                <p className="text-[9px] font-medium text-slate-400">
                                    {entry.correct}/{entry.total} düzgün
                                </p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-black text-slate-800 italic">{entry.score}</p>
                            <p className="text-[9px] text-slate-400 flex items-center gap-1 justify-end">
                                <FaClock size={7} />
                                {new Date(entry.date).toLocaleDateString("az-AZ", { day: "2-digit", month: "short" })}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}