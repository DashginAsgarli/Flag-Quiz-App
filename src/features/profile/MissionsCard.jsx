import { FaFire } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { useGame } from "../../contexts/GameContext";
import { useLanguage } from "../../contexts/LanguageContext";

export function MissionsCard() {
    const { history } = useGame();
    const { t } = useLanguage();
    const gamesPlayed = history.length;
    const maxStreak = history.reduce((acc, h) => (h.correct >= 5 ? acc + 1 : 0), 0);
    const hasInvited = false;

    const missions = [
        { task: "3 Oyun Tamamla", reward: "+50 XP", total: 3, current: Math.min(gamesPlayed, 3), done: gamesPlayed >= 3, },
        { task: "5 Səhvsiz Cavab", reward: "+100 Coin", total: 5, current: Math.min(maxStreak, 5), done: maxStreak >= 5, },
        { task: "Dostunu Dəvət Et", reward: "+200 Coin", total: 1, current: hasInvited ? 1 : 0, done: hasInvited, },
    ];

    const nextReset = new Date();
    nextReset.setHours(nextReset.getHours() + (24 - nextReset.getHours()));
    const timeStr = `${String(nextReset.getHours()).padStart(2, "0")}:${String(nextReset.getMinutes()).padStart(2, "0")}:00`;

    return (
        <section className="p-6 rounded-[1.2rem] border border-slate-200 bg-white shadow-sm overflow-hidden relative group">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-linear-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-100 transition-transform group-hover:rotate-12">
                        <FaFire className="text-white text-lg" />
                    </div>
                    <div>
                        <h3 className="font-black text-slate-800 italic text-base leading-none">{t("profile.missions")}</h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                            Yenilənir: {timeStr}
                        </p>
                    </div>
                </div>
                <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase">24s</span>
            </div>

            <div className="space-y-4">
                {missions.map((m, i) => (
                    <div key={i} className="relative">
                        <div className={`relative z-10 flex items-center justify-between p-4 rounded-2xl border transition-all ${m.done ? "bg-emerald-50/50 border-emerald-200" : "bg-white border-slate-100 hover:border-slate-200 shadow-sm"}`}>
                            <div className="flex items-center gap-4">
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${m.done ? "bg-emerald-500 text-white shadow-md shadow-emerald-100" : "bg-slate-100 text-slate-400"}`}>
                                    {m.done ? <MdVerified size={18} /> : <div className="w-2 h-2 rounded-full bg-slate-300"></div>}
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-xs md:text-sm font-bold tracking-tight ${m.done ? "text-emerald-800 line-through opacity-60" : "text-slate-700"}`}>
                                        {m.task}
                                    </span>
                                    <span className={`text-[10px] font-black italic ${m.done ? "text-emerald-600" : "text-orange-500"}`}>
                                        {m.reward}
                                    </span>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className={`text-[11px] font-black italic ${m.done ? "text-emerald-600" : "text-slate-900"}`}>
                                    {m.current}/{m.total}
                                </span>
                            </div>
                        </div>
                        {!m.done && (
                            <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-500 transition-all duration-1000" style={{ width: `${(m.current / m.total) * 100}%` }} ></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className="absolute -bottom-6 -right-6 text-slate-50 opacity-50 pointer-events-none">
                <FaFire size={80} />
            </div>
        </section>
    );
}