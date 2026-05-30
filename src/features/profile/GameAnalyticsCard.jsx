import { FaChartLine, FaUserGraduate } from "react-icons/fa";
import { MdVerified, MdFlashOn } from "react-icons/md";
import { useGame } from "../../contexts/GameContext";
import { useLanguage } from "../../contexts/LanguageContext";

export function GameAnalyticsCard() {
    const { history } = useGame();
    const { t } = useLanguage();
    const totalGames = history.length;
    const totalCorrect = history.reduce((s, h) => s + (h.correct ?? 0), 0);
    const totalQs = history.reduce((s, h) => s + (h.total ?? 0), 0);
    const accuracy = totalQs > 0 ? Math.round((totalCorrect / totalQs) * 100) : 0;
    const avgTime = totalGames > 0 ? Math.max(10, 100 - totalGames * 3) : 50;
    const knowledge = totalGames > 0 ? Math.min(100, totalGames * 7) : 0;

    const stats = [
        { label: "Dəqiqlik", value: accuracy, color: "from-yellow-500 to-pink-600", icon: <MdVerified />, desc: accuracy >= 80 ? "Mükəmməl hədəf" : "İnkişaf edir" },
        { label: "Sürət", value: avgTime, color: "from-emerald-400 to-teal-600", icon: <MdFlashOn />, desc: "Çevik reaksiya" },
        { label: "Bilik", value: knowledge, color: "from-green-600 to-lime-400", icon: <FaUserGraduate />, desc: knowledge >= 50 ? "Güclü bilik" : "İnkişaf edir" },
    ];

    return (
        <div className="p-6 rounded-[1.2rem] border border-slate-200 bg-white shadow-sm overflow-hidden relative">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-black text-slate-800 italic text-sm uppercase tracking-tighter">Oyun Analitikası</h3>
                <div className="p-2 bg-slate-50 rounded-lg">
                    <FaChartLine className="text-slate-400 text-xs" />
                </div>
            </div>

            {totalGames === 0 ? (
                <p className="text-xs text-slate-400 font-medium text-center py-4">Analitika üçün oyun oynayın</p>
            ) : (
                <div className="grid grid-cols-1 gap-5">
                    {stats.map((stat, i) => (
                        <div key={i} className="group cursor-default">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <span className="text-lg p-1 rounded-md bg-slate-50 text-slate-500">{stat.icon}</span>
                                    <div>
                                        <span className="block text-[11px] font-black text-slate-800 uppercase leading-none">{stat.label}</span>
                                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{stat.desc}</span>
                                    </div>
                                </div>
                                <span className="text-sm font-black text-slate-900 italic">{stat.value}%</span>
                            </div>
                            <div className="relative h-3 w-full bg-slate-100 rounded-full p-0.5 border border-slate-50 shadow-inner">
                                <div
                                    className={`h-full rounded-full bg-linear-to-r ${stat.color} shadow-sm transition-all duration-1000`}
                                    style={{ width: `${stat.value}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="absolute -right-4 -bottom-4 text-slate-50 pointer-events-none opacity-40">
                <FaChartLine size={100} />
            </div>
        </div>
    );
}