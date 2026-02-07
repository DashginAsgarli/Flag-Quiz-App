import React from 'react';
import { GiTargetDummy, GiBullseye,  GiWorld, GiGlobe, GiQuickSlash, GiSandsOfTime, GiStarsStack, GiTrophy } from "react-icons/gi";

const HowToPlay = () => {
    const steps = [
        { 
            title: "Rejimi Seç", 
            desc: "Bacarığına uyğun çətinlik dərəcəsini müəyyən et.", 
            icon: <GiTargetDummy />, 
            bgIcon: <GiBullseye />, 
            gradient: "from-pink-500 to-rose-600",
        },
        { 
            title: "Sürətli Tanı", 
            desc: "Ekrandakı bayrağın hansı ölkəyə aid olduğunu tap.", 
            icon: <GiWorld />, 
            bgIcon: <GiGlobe />, 
            gradient: "from-slate-800 to-slate-950",
        },
        { 
            title: "Zamanla Yarış", 
            desc: "Hər sual üçün cəmi 15 saniyə vaxtın var, tələs!", 
            icon: <GiQuickSlash />, 
            bgIcon: <GiSandsOfTime />,
            gradient: "from-emerald-400 to-teal-600",
        },
        { 
            title: "Zirvəyə Qalx", 
            desc: "Düzgün cavablarla xalları topla və lider ol.", 
            icon: <GiStarsStack />, 
            bgIcon: <GiTrophy />, 
            gradient: "from-amber-400 to-orange-500",
        },
    ];

    return (
        <div className="mt-10 md:mt-20 mb-10 font-sans">
            <div className="max-w-7xl mx-auto"> 
                <div className="mb-6 md:mb-10 text-center md:text-left">
                    <h2 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                        Oyuna necə <span className="text-pink-600">qoşulmalı?</span>
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm mt-1">Qalibiyyətə gedən qısa yol</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className={`group relative overflow-hidden rounded-2xl md:rounded-[1.6rem] p-4 md:p-7 h-32 md:h-48 flex flex-col justify-between bg-gradient-to-br ${step.gradient} text-white shadow-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-pink-500/10`}>
                            
                            <div className="relative z-20 flex justify-between items-start">
                                <div className="p-2 md:p-3 bg-white/20 backdrop-blur-md rounded-lg md:rounded-2xl shadow-inner group-hover:rotate-[10deg] transition-transform duration-500">
                                    <span className="text-xl md:text-3xl">{step.icon}</span>
                                </div>
                            </div>

                            <div className="relative z-20">
                                <h4 className="text-sm md:text-xl font-extrabold mb-1 drop-shadow-sm">
                                    {step.title}
                                </h4>
                                <p className="text-[10px] md:text-xs opacity-90 font-medium leading-tight line-clamp-2 md:line-clamp-none">
                                    {step.desc}
                                </p>
                            </div>

                            <div className="absolute -right-2 -bottom-2 md:-right-4 md:-bottom-4 opacity-10 text-6xl md:text-9xl group-hover:scale-125 group-hover:-rotate-12 transition-all duration-1000 pointer-events-none">
                                {step.bgIcon}
                            </div>

                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-[40px] md:blur-[60px]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowToPlay;