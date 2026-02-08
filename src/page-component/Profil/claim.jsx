import React from 'react'
import { FaFire } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
function Claim() {
    return (
        <>
            <section className="p-6 rounded-[1.2rem] border border-slate-200 bg-white shadow-sm overflow-hidden relative group">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-red-100 transition-transform group-hover:rotate-12">
                            <FaFire className="text-white text-lg" />
                        </div>
                        <div>
                            <h3 className="font-black text-slate-800 italic text-base leading-none">MİSSİYALAR</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Yenilənir: 12:40:00</p>
                        </div>
                    </div>
                    <span className="text-[10px] font-black bg-slate-100 text-slate-500 px-3 py-1 rounded-full uppercase">24s</span>
                </div>

                <div className="space-y-4">
                    {[
                        { task: "3 Oyun Tamamla", reward: "+50 XP", progress: 66, current: "2/3", done: false },
                        { task: "5 Səhvsiz Cavab", reward: "+100 Coin", progress: 100, current: "5/5", done: true },
                        { task: "Dostunu Dəvət Et", reward: "+200 Coin", progress: 0, current: "0/1", done: false },
                    ].map((m, i) => (
                        <div key={i} className="relative">
                            <div className={`relative z-10 flex items-center justify-between p-4 rounded-2xl border transition-all ${m.done ? 'bg-emerald-50/50 border-emerald-200' : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'}`}>

                                <div className="flex items-center gap-4">
                                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${m.done ? 'bg-emerald-500 text-white shadow-md shadow-emerald-100' : 'bg-slate-100 text-slate-400'}`}>
                                        {m.done ? <MdVerified size={18} /> : <div className="w-2 h-2 rounded-full bg-slate-300"></div>}
                                    </div>

                                    <div className="flex flex-col">
                                        <span className={`text-xs md:text-sm font-bold tracking-tight ${m.done ? 'text-emerald-800 line-through opacity-60' : 'text-slate-700'}`}>
                                            {m.task}
                                        </span>
                                        <span className={`text-[10px] font-black italic ${m.done ? 'text-emerald-600' : 'text-orange-500'}`}>
                                            {m.reward}
                                        </span>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <span className={`text-[11px] font-black italic ${m.done ? 'text-emerald-600' : 'text-slate-900'}`}>
                                        {m.current}
                                    </span>
                                </div>
                            </div>

                            {!m.done && (
                                <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-orange-500 transition-all duration-1000"
                                        style={{ width: `${m.progress}%` }}
                                    ></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="absolute -bottom-6 -right-6 text-slate-50 opacity-50 pointer-events-none">
                    <FaFire size={80} />
                </div>
            </section>
        </>
    )
}

export default Claim
