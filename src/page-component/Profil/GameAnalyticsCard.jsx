import React from 'react'
import { FaChartLine, FaUserGraduate } from "react-icons/fa";
import { MdVerified, MdFlashOn } from "react-icons/md";

function GameAnalyticsCard() {
  return (
    <>
      <div className="p-6 rounded-[1.2rem] border border-slate-200 bg-white shadow-sm overflow-hidden relative">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-black text-slate-800 italic text-sm uppercase tracking-tighter">Oyun Analitikası</h3>
          <div className="p-2 bg-slate-50 rounded-lg">
            <FaChartLine className="text-slate-400 text-xs" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {[
            { label: "Dəqiqlik", value: "92", color: "bg-gradient-to-br from-yellow-500 to-pink-600", icon: <MdVerified />, desc: "Mükəmməl hədəf" },
            { label: "Sürət", value: "75", color: "bg-gradient-to-br from-emerald-400 to-teal-600", icon: <MdFlashOn />, desc: "Çevik reaksiya" },
            { label: "Bilik", value: "60", color: "bg-gradient-to-br from-green-600 to-lime-400", icon: <FaUserGraduate />, desc: "İnkişaf edir" },
          ].map((stat, i) => (
            <div key={i} className="group cursor-default">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className={`text-lg p-1 rounded-md bg-slate-50 ${stat.color.split(' ')[1].replace('to-', 'text-')}`}>
                    {stat.icon}
                  </span>
                  <div>
                    <span className="block text-[11px] font-black text-slate-800 uppercase leading-none">{stat.label}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">{stat.desc}</span>
                  </div>
                </div>
                <span className="text-sm font-black text-slate-900 italic">{stat.value}%</span>
              </div>

              <div className="relative h-3 w-full bg-slate-100 rounded-full p-[2px] border border-slate-50 shadow-inner">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${stat.color} shadow-sm transition-all duration-1000 group-hover:brightness-110`}
                  style={{ width: `${stat.value}%` }}
                >
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute -right-4 -bottom-4 text-slate-50 pointer-events-none opacity-40">
          <FaChartLine size={100} />
        </div>
      </div>
    </>
  )
}

export default GameAnalyticsCard
