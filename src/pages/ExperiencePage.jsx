import { NavLink } from "react-router-dom";
import { FaGlobeAmericas, FaList, FaIdCard } from "react-icons/fa";
import { MdExplore, MdArrowForward } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import { GiGlobe } from "react-icons/gi";
import { useLanguage } from "../contexts/LanguageContext";

const DAILY_COUNTRY = { name: "İtaliya", desc: "İtaliya, Aralıq dənizinin mərkəzində yerləşən və özünəməxsus \"çəkmə\" forması ilə tanınan qədim bir Avropa dövlətidir. Paytaxtı Roma olan bu ölkə, minilliklər boyu Qərb sivilizasiyasının formalaşmasında həlledici rol oynamış Roma İmperiyasının mərkəzi olmuşdur.", };

function ExperiencePage() {
  const { t } = useLanguage();

  const CARDS = [
    {
      to: "/experience/globe",
      label: "İnteraktiv",
      title: t("experience.globe"),
      tag: t("experience.country"),
      icon: <FaGlobeAmericas />,
      gradient: "from-yellow-500 to-pink-600",
    },
    {
      to: "/experience/list",
      label: "Sənədləşdirilmiş",
      title: t("experience.list"),
      tag: t("experience.az"),
      icon: <FaList />,
      gradient: "from-emerald-400 to-teal-600",
    },
    {
      to: "/experience/cardsinfo",
      label: "Analitik",
      title: t("experience.cards"),
      tag: t("experience.detail"),
      icon: <FaIdCard />,
      gradient: "from-green-600 to-lime-400",
    },
  ];

  return (
    <section className="min-h-screen py-6 md:py-12 px-4 md:px-6 bg-linear-to-br from-slate-50 via-white to-slate-100 mt-13 md:mt-15">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CARDS.map(card => (
            <NavLink key={card.to} to={card.to} className={`group relative rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 h-28 sm:h-32 md:h-52 lg:h-64 flex flex-col justify-between overflow-hidden bg-linear-to-br ${card.gradient} text-white transform transition-all duration-500 shadow-md hover:shadow-2xl hover:scale-[1.02] cursor-pointer`}>
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="p-1 sm:p-1.5 md:p-2.5 bg-white/30 rounded-lg md:rounded-xl backdrop-blur-sm group-hover:rotate-12 transition-transform duration-300">
                      <MdExplore className="text-sm sm:text-base md:text-xl" />
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase opacity-95">
                      {card.label}
                    </span>
                  </div>
                  <div className="p-1 sm:p-1.5 md:p-2 bg-white/30 rounded-lg backdrop-blur-sm group-hover:bg-white/40 transition-all duration-300">
                    <MdArrowForward className="text-sm sm:text-base md:text-lg transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <h3 className="text-sm sm:text-lg md:text-xl font-bold leading-tight mb-1 sm:mb-2">
                  {card.title}
                </h3>
              </div>
              <div className="relative z-20 flex items-center justify-between">
                <div className="text-xl sm:text-3xl md:text-4xl lg:text-5xl opacity-25 group-hover:opacity-35 transition-opacity duration-300">
                  <span className="group-hover:rotate-12 block transition-transform duration-700">{card.icon}</span>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[9px] sm:text-xs font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 bg-white/40 rounded-full backdrop-blur-sm border border-white/30">
                    {card.tag}
                  </span>
                </div>
              </div>
            </NavLink>
          ))}
        </div>

        <div className="relative group overflow-hidden rounded-4xl bg-slate-900 p-6 md:p-8 text-white shadow-xl mb-8 md:mb-12 border border-slate-800 mt-10">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 pointer-events-none">
            <GiGlobe size={180} />
          </div>
          <div className="relative z-10 flex flex-col gap-3">
            <div className="flex items-center gap-2 bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full w-fit border border-yellow-400/30">
              <HiLightningBolt className="animate-pulse text-xs md:text-sm" />
              <span className="text-[10px] font-bold uppercase tracking-widest">{t("experience.daily")}</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-black italic tracking-tight">{DAILY_COUNTRY.name}</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">{DAILY_COUNTRY.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage