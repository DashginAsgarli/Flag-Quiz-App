import { useState } from "react";
import { FaCoins, FaCrown, FaGem, FaUserAstronaut, FaCartPlus } from "react-icons/fa";
import { MdExplore, MdArrowForward, MdVerified, MdStars, MdVerifiedUser, MdFlashOn, MdSupportAgent } from "react-icons/md";
import { FaCcVisa, FaCcMastercard, FaApplePay, FaGooglePay } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";
import { PaymentModal } from "../features/shop/PaymentModal";

const COIN_PACKS = [
  { coins: 1000, price: "0.99", popular: false },
  { coins: 5000, price: "4.49", popular: true },
  { coins: 10000, price: "8.99", popular: false },
];

const BUNDLE_PACKS = [
  {
    id: "welcome",
    title: "Hoş Geldin Paketi",
    tag: "Xüsusi",
    price: "1.99",
    coins: 2500,
    gradient: "from-yellow-500 to-pink-600",
    icon: <FaCoins className="group-hover:rotate-12 transition-transform text-yellow-300" />,
  },
  {
    id: "super",
    title: "Süper Paket",
    tag: "Populyar",
    price: "5.99",
    coins: 7500,
    gradient: "from-emerald-400 to-teal-600",
    icon: <FaGem className="group-hover:scale-110 transition-transform text-blue-200" />,
  },
  {
    id: "noads",
    title: "Reklamları Blokla",
    tag: "Premium",
    price: "9.99",
    coins: 0,
    forever: true,
    gradient: "from-green-600 to-lime-400",
    icon: <MdVerified className="group-hover:scale-110 transition-transform" />,
  },
];

function ShopPage() {
  const { user, addCoin } = useAuth();
  const { t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [guestWarn, setGuestWarn] = useState(false);

  const handleBuy = (item) => {
    if (user?.isGuest) { setGuestWarn(true); return; }
    setSelectedItem(item);
    setModalOpen(true);
  };

  return (
    <section className="min-h-screen py-6 md:py-12 px-4 md:px-6 bg-linear-to-br from-slate-50 via-white to-slate-100 mt-13 md:mt-15">
      <div className="max-w-7xl mx-auto">
        {guestWarn && (
          <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between gap-4">
            <p className="text-sm font-bold text-amber-800">{t("auth.mustLogin")}</p>
            <div className="flex gap-2 shrink-0">
              <NavLink to="/login" className="px-4 py-2 bg-amber-600 text-white rounded-xl text-xs font-bold hover:bg-amber-700 transition-colors">{t("auth.login")}</NavLink>
              <button onClick={() => setGuestWarn(false)} className="px-3 py-2 bg-amber-100 text-amber-700 rounded-xl text-xs font-bold hover:bg-amber-200 transition-colors">✕</button>
            </div>
          </div>
        )}

        <div className="flex flex-col items-center justify-center gap-4 mt-2 mb-10">
          <div className="group flex items-center gap-3 bg-white/40 backdrop-blur-md border border-slate-200/50 px-4 py-2 rounded-2xl shadow-sm hover:shadow-md hover:bg-white/60 transition-all">
            <div className="flex -space-x-2.5">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white bg-linear-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden shadow-sm">
                  <FaUserAstronaut className={`text-[10px] md:text-xs ${i === 2 ? "text-red-500" : "text-slate-600"}`} />
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-[11px] md:text-sm font-medium italic leading-none">
              Son 5 dəqiqədə <span className="font-bold text-slate-900 not-italic">32 nəfər</span> {t("shop.recentBuyers")}
            </p>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </div>
        </div>

        <div className="flex justify-end mb-4 md:mb-6">
          <div className="bg-white/80 backdrop-blur-sm border border-slate-200 px-3 py-1.5 md:px-4 md:py-2 rounded-xl md:rounded-2xl shadow-sm flex items-center gap-2 md:gap-3 hover:shadow-md transition-shadow">
            <div className="flex flex-col items-end leading-tight">
              <span className="text-[8px] md:text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{t("shop.balance")}</span>
              <span className="text-sm md:text-lg font-black text-slate-900 italic">{(user?.coin ?? 0).toLocaleString()}</span>
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-linear-to-br from-yellow-400 to-orange-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-md shrink-0">
              <FaCoins className="text-white text-base md:text-xl" />
            </div>
          </div>
        </div>

        <div className="mt-10 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {COIN_PACKS.map((item, index) => (
              <div key={index} onClick={() => handleBuy(item)} className="group relative flex items-center justify-between bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer hover:scale-[1.02]">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-yellow-400 to-orange-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform shrink-0">
                    <FaCoins className="text-white text-xl md:text-2xl" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-900 font-black text-lg md:text-2xl italic leading-none">{item.coins.toLocaleString()}</span>
                    <span className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-wider mt-1">{t("shop.silverCoin")}</span>
                  </div>
                </div>
                <button className="bg-slate-900 hover:bg-red-600 text-white font-bold py-2 px-4 md:px-6 rounded-xl transition-colors text-sm md:text-base shadow-sm whitespace-nowrap">
                  ${item.price}
                </button>
                {item.popular && (
                  <div className="absolute -top-3 left-6 bg-red-600 text-[9px] md:text-[10px] text-white px-3 py-1 rounded-full font-bold shadow-lg z-10">
                    {t("shop.popular")}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {BUNDLE_PACKS.map(pack => (
            <div key={pack.id} onClick={() => handleBuy(pack)} className={`group relative rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-7 h-32 sm:h-36 md:h-52 lg:h-64 flex flex-col justify-between overflow-hidden bg-linear-to-br ${pack.gradient} text-white transform transition-all duration-500 shadow-md hover:shadow-2xl hover:scale-[1.02] cursor-pointer`}>
              <div className="relative z-20">
                <div className="flex items-center justify-between mb-2 md:mb-6">
                  <div className="flex items-center gap-1.5">
                    <div className="p-1 md:p-2.5 bg-white/30 rounded-lg backdrop-blur-sm group-hover:rotate-12 transition-transform">
                      <MdExplore className="text-xs md:text-xl" />
                    </div>
                    <span className="text-[10px] md:text-sm font-semibold tracking-wider uppercase">{pack.tag}</span>
                  </div>
                  <div className="p-1 px-2 md:p-2 bg-white/30 rounded-lg backdrop-blur-sm font-bold text-[10px] md:text-sm">US${pack.price}</div>
                </div>
                <h3 className="text-sm md:text-xl font-bold">{pack.title}</h3>
              </div>
              <div className="relative z-20 flex items-center justify-between">
                <div className="text-2xl md:text-5xl opacity-25">{pack.icon}</div>
                {pack.forever  ? <span className="text-[10px] md:text-xs font-medium px-2 py-0.5 bg-white/40 rounded-full border border-white/30">{t("shop.forever")}</span>  : <span className="text-lg md:text-3xl font-black italic">{pack.coins.toLocaleString()}</span>}
              </div>
            </div>
          ))}
        </div>

        <div className="group relative rounded-[1.2rem] md:rounded-3xl p-5 md:p-10 overflow-hidden bg-slate-900 text-white shadow-2xl transition-all transform duration-500 hover:scale-[1.02]">
          <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">
            <div className="text-center md:text-left space-y-2 md:space-y-4">
              <h2 className="text-xl md:text-4xl font-black italic tracking-tighter">
                VIP <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">{t("shop.vipTitle").split(" ")[1] ?? "ÜSTÜNLÜK"}</span>
              </h2>
              <p className="text-slate-400 text-[11px] md:text-base max-w-xs md:max-w-md">{t("shop.vipDesc")}</p>
              <button  onClick={() => handleBuy({ coins: 50000, price: "29.99", title: "VIP" })}  className="flex items-center gap-2 px-5 py-2 md:px-8 md:py-3 bg-white text-slate-900 text-xs md:text-base font-bold rounded-lg md:rounded-xl hover:bg-slate-100 transition-colors mx-auto md:mx-0">
                <FaCartPlus className="text-sm" /> {t("shop.upgrade")}
              </button>
            </div>
            <div className="grid grid-cols-4 gap-2 bg-white/5 p-3 md:p-4 rounded-2xl md:rounded-3xl border border-white/10">
              {[1, 2, 3, 4].map(i => (
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
            { icon: <MdVerifiedUser className="text-xl md:text-2xl text-emerald-500" />, title: t("shop.safePayment"), hl: t("shop.payment") },
            { icon: <MdFlashOn className="text-xl md:text-2xl text-orange-500" />, title: t("shop.instantDel"), hl: t("shop.delivery") },
            { icon: <MdSupportAgent className="text-xl md:text-2xl text-blue-500" />, title: t("shop.support"), hl: t("shop.support2") },
          ].map((f, i) => (
            <div key={i} className="group relative flex items-center gap-4 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-default">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h4 className="text-slate-900 font-black italic text-sm md:text-base leading-none tracking-tight">
                {f.title} <span className="text-red-600">{f.hl}</span>
              </h4>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="p-6 md:p-10">
            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                {[FaCcVisa, FaCcMastercard].map((Icon, i) => (
                  <div key={i} className="transition-all duration-300 hover:scale-110">
                    <Icon className={`text-3xl md:text-5xl ${i === 0 ? "text-[#1a1f71]" : "text-[#eb001b]"} drop-shadow-sm`} />
                  </div>
                ))}
                <div className="h-10 w-px bg-slate-200 hidden md:block"></div>
                {[FaApplePay, FaGooglePay].map((Icon, i) => (
                  <div key={i} className="transition-all duration-300 hover:scale-110">
                    <Icon className={`text-5xl md:text-7xl ${i === 0 ? "text-black" : "text-slate-600"}`} />
                  </div>
                ))}
              </div>
              <p className="text-center text-slate-400 text-[9px] md:text-[11px] font-medium max-w-sm leading-relaxed">
                {t("shop.securityNote")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} item={selectedItem} />
    </section>
  );
}

export default ShopPage