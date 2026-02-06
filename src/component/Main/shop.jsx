import { FaCoins, FaCrown, FaGem, FaUserAstronaut, FaCartPlus } from "react-icons/fa";
import { MdExplore, MdArrowForward, MdVerified, MdStars } from "react-icons/md";
import { MdVerifiedUser, MdFlashOn, MdSupportAgent } from "react-icons/md";
import React from 'react';
import {
  FaCcVisa,
  FaCcMastercard,
  FaApplePay,
  FaGooglePay
} from 'react-icons/fa';


function Shop() {
  return (
    <>
      <section className="min-h-screen py-6 md:py-12 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-4 tracking-tight">
              Market <span className="text-red-600">Təklifləri</span>
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 mt-2 mb-10">
            <div className="group flex items-center gap-3 bg-white/40 backdrop-blur-md border border-slate-200/50 px-4 py-2 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white/60">
              <div className="flex -space-x-2.5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden shadow-sm transition-transform group-hover:-translate-y-0.5" >
                    <FaUserAstronaut className={`text-[10px] md:text-xs ${i === 2 ? 'text-red-500' : 'text-slate-600'}`} />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <p className="text-slate-600 text-[11px] md:text-sm font-medium italic leading-none">
                  Son 5 dəqiqədə <span className="font-bold text-slate-900 not-italic">32 nəfər</span> coin aldı
                </p>

                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end mb-4 md:mb-6 px-4 md:px-0">
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl shadow-sm flex items-center gap-2 md:gap-3 hover:shadow-md transition-shadow">
              <div className="flex flex-col items-end leading-tight">
                <span className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                  Balansın
                </span>
                <span className="text-sm md:text-lg font-black text-slate-900 italic">
                  2,450
                </span>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-md shrink-0">
                <FaCoins className="text-white text-base md:text-xl" />
              </div>
            </div>
          </div>

          <div className="mt-10 mb-8 max-w-7xl mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { amount: "1.000", price: "0.99", popular: false },
                { amount: "5.000", price: "4.49", popular: true },
                { amount: "10.000", price: "8.99", popular: false }
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative flex items-center justify-between bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-5 transition-transform shrink-0">
                      <FaCoins className="text-white text-xl md:text-2xl" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-slate-900 font-black text-lg md:text-2xl italic leading-none">
                        {item.amount}
                      </span>
                      <span className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1">
                        Gümüş Coin
                      </span>
                    </div>
                  </div>

                  <button className="bg-slate-900 hover:bg-red-600 text-white font-bold py-2 px-4 md:px-6 rounded-xl transition-colors text-sm md:text-base shadow-sm whitespace-nowrap">  ${item.price}</button>

                  {item.popular && (
                    <div className="absolute -top-3 left-6 bg-red-600 text-[9px] md:text-[10px] text-white px-3 py-1 rounded-full font-bold shadow-lg z-10">
                      POPULYAR
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
            <div className="group relative rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 h-32 sm:h-36 md:h-52 lg:h-64 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-yellow-500 to-pink-600 text-white transform transition-all duration-500 shadow-md hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-2 md:mb-6">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 md:p-2.5 bg-white/30 rounded-lg backdrop-blur-sm group-hover:rotate-12 transition-transform">
                      <MdExplore className="text-xs md:text-xl" />
                    </div>
                    <span className="text-[10px] md:text-sm font-semibold tracking-wider uppercase">Xüsusi</span>
                  </div>
                  <div className="p-1 px-2 md:p-2 bg-white/30 rounded-lg backdrop-blur-sm font-bold text-[10px] md:text-sm">US$1.99</div>
                </div>
                <h3 className="text-sm md:text-xl font-bold">Hoş Geldin Paketi</h3>
              </div>
              <div className="relative z-20 flex items-center justify-between">
                <div className="text-2xl md:text-5xl opacity-25">
                  <FaCoins className="group-hover:rotate-12 transition-transform text-yellow-300" />
                </div>
                <span className="text-lg md:text-3xl font-black italic">2.500</span>
              </div>
            </div>

            <div className="group relative rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 h-32 sm:h-36 md:h-52 lg:h-64 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-emerald-400 to-teal-600 text-white transform transition-all duration-500 shadow-md hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-2 md:mb-6">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 md:p-2.5 bg-white/30 rounded-lg backdrop-blur-sm group-hover:rotate-12 transition-transform">
                      <FaCrown className="text-xs md:text-xl text-yellow-300" />
                    </div>
                    <span className="text-[10px] md:text-sm font-semibold tracking-wider uppercase">Populyar</span>
                  </div>
                  <div className="p-1 px-2 md:p-2 bg-white/30 rounded-lg backdrop-blur-sm font-bold text-[10px] md:text-sm">US$5.99</div>
                </div>
                <h3 className="text-sm md:text-xl font-bold">Süper Paket</h3>
              </div>
              <div className="relative z-20 flex items-center justify-between">
                <div className="text-2xl md:text-5xl opacity-25">
                  <FaGem className="group-hover:scale-110 transition-transform text-blue-200" />
                </div>
                <span className="text-lg md:text-3xl font-black italic">7.500</span>
              </div>
            </div>

            <div className="group relative rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 h-32 sm:h-36 md:h-52 lg:h-64 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-green-600 to-lime-400 text-white transform transition-all duration-500 shadow-md hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-2 md:mb-6">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 md:p-2.5 bg-white/30 rounded-lg backdrop-blur-sm group-hover:rotate-12 transition-transform">
                      <MdStars className="text-xs md:text-xl" />
                    </div>
                    <span className="text-[10px] md:text-sm font-semibold tracking-wider uppercase">Premium</span>
                  </div>
                  <div className="p-1 bg-white/30 rounded-lg backdrop-blur-sm group-hover:bg-white/40 transition-all">
                    <MdArrowForward className="text-xs md:text-lg transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <h3 className="text-sm md:text-xl font-bold">Reklamları Blokla</h3>
              </div>
              <div className="relative z-20 flex items-center justify-between">
                <div className="text-2xl md:text-5xl opacity-25">
                  <MdVerified className="group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] md:text-xs font-medium px-2 py-0.5 bg-white/40 rounded-full border border-white/30">Həmişəlik</span>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative rounded-[1.2rem] md:rounded-[1.5rem] p-5 md:p-10 overflow-hidden bg-slate-900 text-white shadow-2xl transition-all transform  duration-500  hover:scale-[1.02]">
            <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
              <div className="text-center md:text-left space-y-2 md:space-y-4">
                <h2 className="text-xl md:text-4xl font-black italic tracking-tighter">
                  VIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">ÜSTÜNLÜK</span>
                </h2>
                <p className="text-slate-400 text-[11px] md:text-base max-w-xs md:max-w-md">
                  Özəl ikonlar və gündəlik bonus coinlər səni gözləyir.
                </p>
                <button className="flex items-center gap-2 px-5 py-2 md:px-8 md:py-3 bg-white text-slate-900 text-xs md:text-base font-bold rounded-lg md:rounded-xl hover:bg-slate-100 transition-colors mx-auto md:mx-0">
                  <FaCartPlus className="text-sm" /> İNDİ YÜKSƏLT
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2 bg-white/5 p-3 md:p-4 rounded-2xl md:rounded-3xl border border-white/10">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-9 h-9 md:w-14 md:h-14 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center text-base md:text-xl hover:bg-white/20 transition-all">
                    <FaUserAstronaut className={i % 2 === 0 ? "text-blue-400" : "text-pink-500"} />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-red-600/10 rounded-full blur-[60px] md:blur-[80px]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 mt-16">
            {[
              {
                icon: <MdVerifiedUser className="text-xl md:text-2xl text-emerald-500" />,
                title: "Təhlükəsiz",
                highlight: "ÖDƏNİŞ"
              },
              {
                icon: <MdFlashOn className="text-xl md:text-2xl text-orange-500" />,
                title: "Anında",
                highlight: "TƏSLİMAT"
              },
              {
                icon: <MdSupportAgent className="text-xl md:text-2xl text-blue-500" />,
                title: "7/24 Canlı",
                highlight: "DƏSTƏK",
              }
            ].map((feature, index) => (
              <div key={index} className="group relative flex items-center gap-4 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <div className="flex flex-col">
                  <h4 className="text-slate-900 font-black italic text-sm md:text-base leading-none tracking-tight">
                    {feature.title} <span className="text-red-600">{feature.highlight}</span>
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-16 pt-8 md:pt-16 pb-8 md:pb-16">
            <div className="flex flex-col items-center gap-8 md:gap-12">
              <div className="flex items-center gap-4 md:gap-6 w-full max-w-lg px-6">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-slate-200 to-slate-300"></div>
                <p className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-slate-400 font-black whitespace-nowrap">
                  Ödəniş
                </p>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-slate-200 to-slate-300"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 md:gap-16 items-center opacity-60 md:opacity-40 hover:opacity-100 transition-opacity duration-700">
                <div className="group flex flex-col items-center gap-1 md:gap-2 grayscale hover:grayscale-0 transition-all duration-500">
                  <FaCcVisa className="text-2xl md:text-3xl text-slate-800 group-hover:text-[#1a1f71]" />
                  <span className="text-[7px] md:text-[9px] font-black italic tracking-tighter text-slate-800">VISA</span>
                </div>
                <div className="group flex flex-col items-center gap-1 md:gap-2 grayscale hover:grayscale-0 transition-all duration-500">
                  <FaCcMastercard className="text-2xl md:text-3xl text-slate-800 group-hover:text-[#eb001b]" />
                  <span className="text-[7px] md:text-[9px] font-black italic tracking-tighter text-slate-800">MASTERCARD</span>
                </div>
                <div className="flex items-center grayscale hover:grayscale-0 transition-all duration-500">
                  <FaApplePay className="text-4xl md:text-5xl text-slate-800" />
                </div>
                <div className="flex items-center grayscale hover:grayscale-0 transition-all duration-500">
                  <FaGooglePay className="text-4xl md:text-5xl text-slate-800" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Shop
