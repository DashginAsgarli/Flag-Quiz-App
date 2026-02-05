import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGlobeAmericas, FaList, FaIdCard } from "react-icons/fa";
import { MdExplore, MdArrowForward } from "react-icons/md";

function Experience() {
  return (
    <>
      <section className="min-h-screen py-6 md:py-12 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 tracking-tight">
              Dünyanı <span className="text-red-600">Kəşf Edin</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <NavLink to="/experience/globe" className="group relative rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 h-28 sm:h-32 md:h-52 lg:h-64 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-yellow-500 to-pink-600 text-white transform transition-all duration-500 shadow-md hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="p-1 sm:p-1.5 md:p-2.5 bg-white/30 rounded-lg md:rounded-xl backdrop-blur-sm group-hover:rotate-12 transition-transform duration-300">
                      <MdExplore className="text-sm sm:text-base md:text-xl" />
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase opacity-95">
                      İnteraktiv
                    </span>
                  </div>
                  <div className="p-1 sm:p-1.5 md:p-2 bg-white/30 rounded-lg backdrop-blur-sm group-hover:bg-white/40 transition-all duration-300">
                    <MdArrowForward className="text-sm sm:text-base md:text-lg transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-lg md:text-xl font-bold leading-tight mb-1 sm:mb-2 md:mb-2">
                  Dünya Xəritəsi
                </h3>
              </div>

              <div className="relative z-20 flex items-center justify-between">
                <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl opacity-25 group-hover:opacity-35 transition-opacity duration-300">
                  <FaGlobeAmericas className="group-hover:rotate-12 transition-transform duration-700" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[9px] sm:text-xs md:text-xs font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 bg-white/40 rounded-full backdrop-blur-sm border border-white/30">
                    190+ Ölkə
                  </span>
                </div>
              </div>
            </NavLink>

            <NavLink to="/experience/list" className="group relative rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 h-28 sm:h-32 md:h-52 lg:h-64 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-600 text-white transform transition-all duration-500 shadow-md hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="p-1 sm:p-1.5 md:p-2.5 bg-white/30 rounded-lg md:rounded-xl backdrop-blur-sm group-hover:-rotate-12 transition-transform duration-300">
                      <span className="text-sm sm:text-base md:text-xl">📋</span>
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase opacity-95">
                      Sənədləşdirilmiş
                    </span>
                  </div>
                  <div className="p-1 sm:p-1.5 md:p-2 bg-white/30 rounded-lg backdrop-blur-sm group-hover:bg-white/40 transition-all duration-300">
                    <MdArrowForward className="text-sm sm:text-base md:text-lg transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-lg md:text-xl font-bold leading-tight mb-1 sm:mb-2 md:mb-2">
                  Ölkə Siyahısı
                </h3>
              </div>

              <div className="relative z-20 flex items-center justify-between">
                <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl opacity-25 group-hover:opacity-35 transition-opacity duration-300">
                  <FaList className="group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[9px] sm:text-xs md:text-xs font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 bg-white/40 rounded-full backdrop-blur-sm border border-white/30">
                    A-Z Sıralama
                  </span>
                </div>
              </div>
            </NavLink>

            <NavLink to="/experience/cardsinfo" className="group relative rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 h-28 sm:h-32 md:h-52 lg:h-64 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-green-600 to-lime-400 text-white transform transition-all duration-500 shadow-md hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="p-1 sm:p-1.5 md:p-2.5 bg-white/30 rounded-lg md:rounded-xl backdrop-blur-sm group-hover:rotate-45 transition-transform duration-300">
                      <span className="text-sm sm:text-base md:text-xl">📊</span>
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase opacity-95">
                      Analitik
                    </span>
                  </div>
                  <div className="p-1 sm:p-1.5 md:p-2 bg-white/30 rounded-lg backdrop-blur-sm group-hover:bg-white/40 transition-all duration-300">
                    <MdArrowForward className="text-sm sm:text-base md:text-lg transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-lg md:text-xl font-bold leading-tight mb-1 sm:mb-2 md:mb-2">
                  Ölkə Kartları
                </h3>
              </div>

              <div className="relative z-20 flex items-center justify-between">
                <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl opacity-25 group-hover:opacity-35 transition-opacity duration-300">
                  <FaIdCard className="group-hover:scale-125 transition-transform duration-500" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[9px] sm:text-xs md:text-xs font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 bg-white/40 rounded-full backdrop-blur-sm border border-white/30">
                    Ətraflı Məlumat
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

export default Experience
