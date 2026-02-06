import React from 'react'
import { FaCrown, FaArrowUp, FaUserAstronaut, FaUserShield, FaUserGraduate, FaUserTag } from "react-icons/fa";
import { MdStars } from "react-icons/md";
function Rating() {
  const players = [
    { id: 4, name: "Orxan Abbasov", xp: "8,250", rank: 4, status: "Pro", icon: <FaUserAstronaut />, color: "text-pink-600" },
    { id: 5, name: "Aysel Məmmədova", xp: "7,900", rank: 5, status: "Master", icon: <FaUserShield />, color: "text-emerald-600" },
    { id: 6, name: "Dəniz Quliyev", xp: "7,100", rank: 6, status: "Explorer", icon: <FaUserGraduate />, color: "text-orange-500" },
    { id: 7, name: "Emil Rzayev", xp: "6,800", rank: 7, status: "Beginner", icon: <FaUserTag />, color: "text-slate-400" },
  ];

  return (
    <>
      <section className="min-h-screen py-4 px-3 bg-gradient-to-br from-slate-50 via-white to-slate-100 mt-12 md:mt-25">
        <div className="max-w-2xl mx-auto">
          <div className="relative flex items-end justify-center gap-2 mb-8 h-48 md:h-56">
            <div className="flex flex-col items-center w-24 md:w-32">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl border border-slate-200 flex items-center justify-center bg-white mb-2 shadow-sm text-xl md:text-3xl text-emerald-500">
                <FaUserGraduate />
              </div>
              <div className="bg-gradient-to-br from-emerald-400 to-teal-600 w-full h-12 md:h-16 rounded-t-xl flex flex-col items-center pt-2 border-t border-white/20">
                <span className="text-lg md:text-xl font-black text-white italic leading-none">2</span>
                <span className="text-[7px] md:text-[9px] font-bold text-white/70">12.4K</span>
              </div>
            </div>
            <div className="flex flex-col items-center w-28 md:w-40 z-10 scale-105">
              <FaCrown className="text-yellow-500 text-xl mb-1" />
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl border-2 border-yellow-400 flex items-center justify-center bg-white mb-2 shadow-lg text-3xl md:text-5xl text-pink-500">
                <MdStars />
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-pink-600 w-full h-20 md:h-28 rounded-t-2xl flex flex-col items-center pt-3 border-t border-white/30 shadow-xl">
                <span className="text-2xl md:text-4xl font-black text-white italic leading-none">1</span>
                <span className="text-[8px] md:text-xs font-black text-white uppercase mt-1">15.2K</span>
              </div>
            </div>
            <div className="flex flex-col items-center w-24 md:w-32">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl border border-slate-200 flex items-center justify-center bg-white mb-2 shadow-sm text-xl md:text-3xl text-lime-500">
                <FaUserShield />
              </div>
              <div className="bg-gradient-to-br from-green-600 to-lime-400 w-full h-10 md:h-14 rounded-t-xl flex flex-col items-center pt-2 border-t border-white/20">
                <span className="text-lg md:text-xl font-black text-white italic leading-none">3</span>
                <span className="text-[7px] md:text-[9px] font-bold text-white/70">10.8K</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 mb-32">
            {players.map((player) => (
              <div key={player.id} className="bg-white border border-slate-100 p-2.5 rounded-2xl flex items-center justify-between group hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <span className="font-black text-slate-200 text-sm md:text-lg w-4 italic">{player.rank}</span>
                  <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-slate-50 flex items-center justify-center text-xl md:text-2xl shadow-inner">
                    <span className={player.color}>{player.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-[11px] md:text-sm uppercase leading-none mb-1">{player.name}</h4>
                    <span className="text-[8px] font-bold uppercase text-slate-400 tracking-wider">{player.status}</span>
                  </div>
                </div>
                <div className="bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 flex items-center gap-1.5">
                  <span className="font-black text-slate-700 italic text-xs md:text-sm">{player.xp}</span>
                  <FaArrowUp className="text-[8px] text-emerald-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Rating
