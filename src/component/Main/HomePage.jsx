import React from 'react'
import { GiFlyingFlag, GiWorld, GiCash, GiEarthAfricaEurope, GiGoldBar, GiGlobe, GiCompass } from "react-icons/gi";
import { MdArrowForward } from "react-icons/md";
import { NavLink } from 'react-router-dom';
function HomePage() {
  const categories = [
    {
      id: 1,
      title: "Bayraq - Ölkə",
      mainIcon: <GiFlyingFlag />,
      bgIcon: <GiFlyingFlag />,
      gradient: "from-yellow-500 to-pink-600",
      tag: "Xüsusi",
      to: "/games/flag"
    },
    {
      id: 2,
      title: "Bayraq - Valyuta",
      mainIcon: <GiCash />,
      bgIcon: <GiGoldBar />,
      gradient: "from-emerald-400 to-teal-600",
      tag: "Populyar",
      to: "/games/currency"
    },
    {
      id: 3,
      title: "Qlobal - Dünya",
      mainIcon: <GiWorld />,
      gradient: "from-slate-800 to-slate-950",
      bgIcon: <GiGlobe />,
      tag: "Premium",
      to: "/games/global"
    },
    {
      id: 4,
      title: "Bayraq - Qitə",
      mainIcon: <GiEarthAfricaEurope />,
      bgIcon: <GiCompass />,
      gradient: "from-green-600 to-lime-400",
      tag: "Ekspert",
      to: "/games/continent"
    }
  ];
  return (
    <>

      <section className="min-h-screen py-4 md:py-12 px-4 md:px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans mt-13 md:mt-15">
        <div className="max-w-7xl mx-auto">

          <div className="mb-6 md:mb-12 flex flex-row items-center justify-between gap-3 md:gap-8">
            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 italic tracking-tighter leading-tight">
                SALAAM, <span className="text-red-600 uppercase">Səyyah!</span>
              </h1>
              <p className="text-slate-500 font-bold mt-0.5 md:mt-2 uppercase text-[9px] sm:text-xs md:text-sm tracking-[0.1em] md:tracking-widest truncate">
                Bu gün hansı qitəni fəth edirik?
              </p>
            </div>

            <div className="flex shrink-0 gap-1 md:gap-4">
              <div className="bg-white p-2 sm:p-3 md:p-3 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 md:gap-4 transition-all">
                <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-14 md:h-14 bg-orange-100 text-orange-600 rounded-lg md:rounded-2xl flex items-center justify-center shrink-0">
                  <GiGoldBar className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
                </div>
                <div className="leading-tight">
                  <p className="text-[7px] sm:text-[9px] md:text-xs font-black text-slate-400 uppercase">Sıralama</p>
                  <p className="text-xs sm:text-sm md:text-xl lg:text-2xl font-black text-slate-800">#124</p>
                </div>
              </div>
            </div>
          </div>


          <div className="m-auto mb-8 flex items-center w-fit gap-2 md:gap-3 bg-slate-900/5 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/40 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05)] transition-all hover:scale-105">
            <div className="flex -space-x-2 md:-space-x-2.5">
              {[1, 2, 7, 15].map((i) => (
                <img
                  key={i}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white shadow-sm object-cover transition-transform hover:-translate-y-1"
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="istifadəçi"
                />
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-emerald-500"></span>
                </span>
                <p className="text-[8px] md:text-[10px] font-medium text-slate-500 whitespace-nowrap">
                  Hazırda <span className="text-emerald-500">milyonlarla insan</span> fəth edir
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className={`group relative rounded-xl md:rounded-3xl p-4 md:p-8 h-28 sm:h-36 md:h-60 flex flex-col justify-between overflow-hidden bg-gradient-to-br ${cat.gradient} text-white transform transition-all duration-500 shadow-md hover:shadow-xl hover:scale-[1.01] cursor-pointer`}
              >
                <div className="relative z-20">
                  <div className="flex items-center gap-2 md:gap-5">
                    <div className="p-2 md:p-3.5 bg-white/20 rounded-lg md:rounded-2xl backdrop-blur-sm shadow-inner transition-transform group-hover:rotate-6">
                      <span className="text-xl md:text-3xl">{cat.mainIcon}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="block text-[8px] md:text-[11px] font-bold uppercase tracking-[0.2em] opacity-80 mb-0.5 md:mb-1">
                        {cat.tag}
                      </span>
                      <h3 className="text-sm sm:text-lg md:text-2xl font-extrabold drop-shadow-md leading-tight">
                        {cat.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="absolute left-4 bottom-0 md:left-8 z-10 translate-y-1/4 md:translate-y-1/3">
                  <div className="text-6xl sm:text-7xl md:text-[10rem] opacity-20 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-1000 pointer-events-none origin-bottom">
                    {cat.bgIcon}
                  </div>
                </div>

                <NavLink to={cat.to} className="absolute right-3 bottom-3 md:bottom-8 md:right-8 z-30">
                  <span className="flex items-center gap-1.5 text-[8px] sm:text-[9px] md:text-xs font-bold px-3 py-1.5 md:px-6 md:py-3 bg-white/20 hover:bg-white text-white hover:text-slate-900 rounded-full border border-white/30 backdrop-blur-md transition-all duration-300 uppercase shadow-lg">
                    BAŞLA
                    <MdArrowForward className="text-[10px] md:text-lg" />
                  </span>
                </NavLink>
                <div className="absolute top-0 right-0 w-20 h-20 md:w-40 md:h-40 bg-white/10 rounded-full blur-[40px] md:blur-[80px]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage