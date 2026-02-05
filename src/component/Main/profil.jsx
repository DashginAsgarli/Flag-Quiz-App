import React from 'react'
import { FaUserCircle, FaSun, FaLanguage, FaShieldAlt, FaHistory, FaSignOutAlt, FaUserPlus, FaSignInAlt, FaFire, FaTrophy, FaCoins, FaChartLine, FaUserAstronaut } from "react-icons/fa";
import { MdKeyboardArrowRight, MdVerified, MdStars, MdExplore } from "react-icons/md";
function Profil() {
  return (
    <>
      <section className="min-h-screen py-8 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto space-y-6">

          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Profil <span className="text-red-600">Mərkəzi</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl border shadow-sm flex flex-col items-center justify-between gap-4 bg-white border-slate-200">
                <div className="flex items-center gap-4 w-full">
                  <div className="p-3 bg-red-100 text-red-600 rounded-2xl">
                    <FaUserCircle size={40} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Xoş gəlmisiniz!</h3>
                    <p className="text-sm text-slate-500">Giriş edin və ya qeydiyyatdan keçin.</p>
                  </div>
                </div>
                <div className="flex gap-2 w-full">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition-all text-sm">
                    <FaSignInAlt /> Giriş
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold border border-slate-200 hover:bg-slate-100 transition-all text-sm text-slate-700">
                    <FaUserPlus /> Qeydiyyat
                  </button>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 overflow-hidden shadow-sm bg-white">
                <div className="flex items-center justify-between p-4 border-b border-slate-100 cursor-default">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-600">
                      <FaSun />
                    </div>
                    <span className="font-medium text-sm text-slate-700">Görünüş</span>
                  </div>
                  <div className="w-10 h-5 rounded-full relative bg-yellow-400">
                    <div className="absolute top-1 w-3 h-3 bg-white rounded-full right-1"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/10 text-emerald-600 rounded-lg">
                      <FaLanguage size={18} />
                    </div>
                    <span className="font-medium text-sm text-slate-700">Tətbiq dili</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">AZ <MdKeyboardArrowRight size={20} /></div>
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-slate-50 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-500/10 text-orange-600 rounded-lg">
                      <FaHistory size={18} />
                    </div>
                    <span className="font-medium text-sm text-slate-700">Oyun tarixçəsi</span>
                  </div>
                  <MdKeyboardArrowRight className="text-slate-300" size={20} />
                </div>

                <div className="flex items-center justify-between p-4 border-y border-slate-100 hover:bg-slate-50 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-500/10 text-purple-600 rounded-lg">
                      <FaShieldAlt size={18} />
                    </div>
                    <span className="font-medium text-sm text-slate-700">Təhlükəsizlik</span>
                  </div>
                  <MdKeyboardArrowRight className="text-slate-300" size={20} />
                </div>

                <div className="flex items-center justify-between p-4 hover:bg-slate-50 cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-500/10 text-red-500 rounded-lg">
                      <FaSignOutAlt size={18} />
                    </div>
                    <span className="font-bold text-sm text-red-500">Çıxış et</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group relative rounded-2xl p-5 h-40 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-yellow-500 to-pink-600 text-white shadow-md hover:shadow-xl transition-all cursor-pointer">
                  <div className="relative z-20 flex justify-between items-start">
                    <div className="p-2 bg-white/30 rounded-lg backdrop-blur-sm"><FaFire className="text-xl" /></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-white/30 px-2 py-1 rounded-md">Gündəlik</span>
                  </div>
                  <div className="relative z-20 flex items-end justify-between">
                    <h3 className="text-lg font-bold">Aktivlik Seriyası</h3>
                    <span className="text-4xl font-black italic">12</span>
                  </div>
                  <FaFire className="absolute -bottom-4 -left-4 text-8xl opacity-10 group-hover:scale-110 transition-transform" />
                </div>

                <div className="group relative rounded-2xl p-5 h-40 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-md hover:shadow-xl transition-all cursor-pointer">
                  <div className="relative z-20 flex justify-between items-start">
                    <div className="p-2 bg-white/30 rounded-lg backdrop-blur-sm"><FaCoins className="text-xl text-yellow-300" /></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-white/30 px-2 py-1 rounded-md">Mövcud</span>
                  </div>
                  <div className="relative z-20 flex items-end justify-between">
                    <h3 className="text-lg font-bold">Ümumi Balans</h3>
                    <span className="text-4xl font-black italic">2.540</span>
                  </div>
                  <FaCoins className="absolute -bottom-4 -left-4 text-8xl opacity-10 group-hover:rotate-12 transition-transform" />
                </div>
              </div>

              <div className="group relative rounded-[1.5rem] p-6 md:p-8 overflow-hidden bg-gradient-to-br from-green-600 to-lime-400 text-white shadow-2xl transition-all">
                <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left space-y-2">
                    <h2 className="text-2xl md:text-3xl font-black  ">
                      Səviyyə
                    </h2>
                    <div className="w-full bg-white/10 h-2 rounded-full mt-4">
                      <div className="bg-white h-full rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 bg-white/5 p-3 rounded-2xl border border-white/10">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center text-lg hover:bg-white/20 transition-all cursor-pointer">
                        <FaUserAstronaut className={i === 1 ? "text-white" : "text-slate-300 opacity-40"} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-[60px]"></div>
              </div>

              <div className="group relative rounded-2xl p-5 bg-white border border-slate-200 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-slate-900 text-white rounded-lg"><MdStars /></div>
                    <span className="font-bold text-sm uppercase tracking-wider text-slate-700">Nailiyyətlər</span>
                  </div>
                  <MdVerified className="text-blue-500 text-xl" />
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="py-8 bg-slate-50 rounded-xl flex items-center justify-center border border-slate-100">
                      <FaTrophy className={`text-xl ${i < 3 ? "text-yellow-500" : "text-slate-300"}`} />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Profil
