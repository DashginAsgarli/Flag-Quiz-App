import React from 'react'
import { NavLink } from 'react-router-dom';
import { MdArrowForward, MdKeyboardBackspace } from "react-icons/md";
import { GiBabyFace, GiLevelEndFlag, GiTargetDummy, GiTrophyCup, GiAbstract013, GiCrossedSwords } from "react-icons/gi";
function CurrencyGame() {
    const levels = [
        {
            id: "easy",
            title: "Asan",
            desc: "Yeni başlayanlar üçün uyğundur.",
            icon: <GiBabyFace />, 
            bgIcon: <GiLevelEndFlag />,      
            gradient: "from-emerald-400 to-teal-600",
            tag: "BAŞLANĞIC",
        },
        {
            id: "medium",
            title: "Orta",
            desc: "Təcrübəli oyunçular üçün.",
            icon: <GiTargetDummy />,
            bgIcon: <GiTrophyCup />, 
            gradient: "from-yellow-500 to-pink-600",
            tag: "SINAQ",
        },
        {
            id: "hard",
            title: "Çətin",
            desc: "Dünya xəritəsi ekspertlərinə!",
            icon: <GiAbstract013 />,       
            bgIcon: <GiCrossedSwords />,  
            gradient: "from-green-600 to-lime-400",
            tag: "EKSPERT",
        }
    ];
    return (
        <>
            <section className="min-h-screen py-4 md:py-12 px-2 md:px-10 bg-gradient-to-br from-slate-50 to-slate-200 mt-13 md:mt-20 font-sans">
                <div className="max-w-[1400px] mx-auto">

                    <div className="mb-4 md:mb-8 flex items-center justify-between px-2">
                        <NavLink to="/" className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors">
                            <MdKeyboardBackspace className="text-xl md:text-2xl" />
                            <span className="font-bold text-[10px] md:text-sm uppercase">Geri</span>
                        </NavLink>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                        {levels.map((lvl) => (
                            <div
                                key={lvl.id}
                                className={`group relative rounded-2xl md:rounded-3xl p-5 md:p-8 h-32 md:h-64 flex flex-col justify-between overflow-hidden bg-gradient-to-br ${lvl.gradient} text-white shadow-md hover:shadow-2xl transition-all duration-500 md:hover:-translate-y-2`}
                            >
                                <div className="absolute right-2 -bottom-4 md:right-4 md:-bottom-8 z-0">
                                    <div className="text-7xl md:text-[12rem] opacity-15 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-1000 pointer-events-none origin-bottom-right">
                                        {lvl.bgIcon}
                                    </div>
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-start gap-4 md:flex-col">
                                        <div className="w-10 h-10 md:w-16 md:h-16 bg-white/20 rounded-xl backdrop-blur-md flex items-center justify-center text-2xl md:text-4xl shadow-inner group-hover:rotate-12 transition-transform">
                                            {lvl.icon}
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="hidden md:block text-[10px] font-bold tracking-widest opacity-70 mb-1">{lvl.tag}</span>
                                            <h3 className="text-lg md:text-3xl font-extrabold leading-tight">{lvl.title}</h3>
                                            <p className="text-[10px] md:text-sm text-white/80 mt-1 md:mt-3 leading-tight max-w-[200px]">
                                                {lvl.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-20 flex items-center justify-end">
                                    <NavLink
                                        to={`cplay`}
                                        className="flex items-center gap-1 md:gap-2 bg-white text-slate-900 px-4 py-2 md:px-8 md:py-3 rounded-lg md:rounded-xl font-bold text-[10px] md:text-sm transition-all shadow-lg hover:bg-slate-100 active:scale-95"
                                    >
                                        SEÇ <MdArrowForward className="text-xs md:text-lg" />
                                    </NavLink>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CurrencyGame