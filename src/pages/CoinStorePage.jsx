import { useState } from "react";
import { useGame } from "../contexts/GameContext";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";
import { AVATAR_FRAMES, PROFILE_ICONS, TITLES, GAME_HINTS, RARITY_COLORS } from "../utils/shopItems";
import { FaCoins, FaCheck, FaLock } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const TABS = [
  { id: "frames", label: "Çərçivələr", emoji: "🖼️" },
  { id: "icons", label: "İkonlar", emoji: "😀" },
  { id: "titles", label: "Titullar", emoji: "🏆" },
  { id: "hints", label: "Köməklər", emoji: "⚡" },
];

const TAB_ITEMS = {
  frames: AVATAR_FRAMES,
  icons: PROFILE_ICONS,
  titles: TITLES,
  hints: GAME_HINTS,
};

function CoinStorePage() {
  const { user } = useAuth();
  const { inventory, buyItem, equipItem } = useGame();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("frames");
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };

  const handleBuy = (item) => {
    if (user?.isGuest) { showToast("Əvvəlcə giriş edin!", "error"); return; }
    const result = buyItem(item);
    if (result.success) showToast(`${item.name} alındı! 🎉`);
    else showToast(result.error, "error");
  };

  const handleEquip = (item) => {
    equipItem(item);
    showToast(`${item.name} geyinildi! ✨`);
  };

  const isOwned = (id) => inventory.some(i => i.id === id);
  const isEquipped = (id) => {
    return user?.equippedFrame === id || user?.equippedIcon === id || user?.equippedTitle === id;
  };

  const items = TAB_ITEMS[activeTab] ?? [];

  return (
    <section className="min-h-screen py-6 md:py-10 px-4 bg-linear-to-br from-slate-50 via-white to-slate-100 mt-13 md:mt-15">
      <div className="max-w-5xl mx-auto">

        {toast && (
          <div className={`fixed top-20 left-1/2 -translate-x-1/2 z-9999 px-6 py-3 rounded-2xl shadow-2xl font-bold text-sm flex items-center gap-2 transition-all
            ${toast.type === "error" ? "bg-red-600 text-white" : "bg-emerald-500 text-white"}`}>
            {toast.type === "error" ? "⚠️" : "✅"} {toast.msg}
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 italic tracking-tight">Coin Mağazası</h1>
            <p className="text-slate-500 text-sm font-medium mt-1">Qazandığın coinləri xərclə</p>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2.5 rounded-2xl shadow-sm">
            <div className="w-8 h-8 bg-linear-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
              <FaCoins className="text-white text-sm" />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-bold uppercase">Balans</p>
              <p className="text-base font-black text-slate-900 italic leading-none">{(user?.coin ?? 0).toLocaleString()}</p>
            </div>
          </div>
        </div>

        {!user?.isGuest && (user?.equippedFrame || user?.equippedIcon || user?.equippedTitle) && (
          <div className="mb-6 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <MdVerified className="text-blue-500" size={18} />
              <span className="font-bold text-sm text-slate-700 uppercase tracking-wide">Aktiv Bəzəklər</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {user.equippedFrame && (
                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl">
                  <span className="text-sm">{AVATAR_FRAMES.find(f => f.id === user.equippedFrame)?.emoji}</span>
                  <span className="text-xs font-bold text-amber-700">{AVATAR_FRAMES.find(f => f.id === user.equippedFrame)?.name}</span>
                </div>
              )}
              {user.equippedIcon && (
                <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-xl">
                  <span className="text-sm">{PROFILE_ICONS.find(i => i.id === user.equippedIcon)?.emoji}</span>
                  <span className="text-xs font-bold text-blue-700">{PROFILE_ICONS.find(i => i.id === user.equippedIcon)?.name}</span>
                </div>
              )}
              {user.equippedTitle && (
                <div className="flex items-center gap-1.5 bg-purple-50 border border-purple-200 px-3 py-1.5 rounded-xl">
                  <span className="text-xs font-bold text-purple-700">{TITLES.find(ti => ti.id === user.equippedTitle)?.display}</span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {TABS.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-200    ${activeTab === tab.id ? "bg-slate-900 text-white shadow-lg scale-[1.02]" : "bg-white border border-slate-200 text-slate-600 hover:border-slate-400 hover:bg-slate-50"}`}>
              <span>{tab.emoji}</span> {tab.label}
              <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${activeTab === tab.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"}`}>
                {TAB_ITEMS[tab.id].length}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map(item => {
            const owned = isOwned(item.id);
            const equipped = isEquipped(item.id);
            const canAfford = (user?.coin ?? 0) >= item.price;
            const rarity = RARITY_COLORS[item.rarity];

            return (
              <div key={item.id} className={`relative bg-white rounded-2xl border p-4 flex flex-col items-center gap-3 transition-all duration-200 hover:shadow-lg    ${equipped ? "border-blue-400 ring-2 ring-blue-400 ring-offset-1" : owned ? "border-emerald-300" : "border-slate-100 hover:border-slate-300"}`}>
                <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-[8px] font-black uppercase ${rarity.bg} ${rarity.text} border ${rarity.border}`}>
                  {rarity.label}
                </div>

                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl text-4xl ${rarity.bg} ${equipped ? "ring-2 ring-blue-400" : ""}`}>
                  {item.emoji ?? "🎁"}
                </div>

                <div className="text-center">
                  <p className="font-black text-slate-800 text-sm leading-tight">{item.name}</p>
                  {item.desc && <p className="text-[10px] text-slate-400 font-medium mt-0.5">{item.desc}</p>}
                  {item.display && <p className="text-[10px] text-purple-600 font-bold mt-0.5">{item.display}</p>}
                </div>

                <div className="w-full mt-auto">
                  {equipped ? (
                    <div className="w-full py-2 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center gap-1.5">
                      <MdVerified className="text-blue-500" size={14} />
                      <span className="text-xs font-black text-blue-600">Geyinilmiş</span>
                    </div>
                  ) : owned ? (
                    <button onClick={() => handleEquip(item)} className="w-full py-2 bg-emerald-500 text-white rounded-xl font-bold text-xs hover:bg-emerald-600 transition-colors flex items-center justify-center gap-1.5">
                      <FaCheck size={10} /> Gey
                    </button>
                  ) : (
                    <button onClick={() => handleBuy(item)} disabled={!canAfford || user?.isGuest} className={`w-full py-2 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5    ${canAfford && !user?.isGuest ? "bg-slate-900 text-white hover:bg-red-600 hover:shadow-md active:scale-95" : "bg-slate-100 text-slate-400 cursor-not-allowed"}`}>
                      {!canAfford && !user?.isGuest ? <><FaLock size={9} /> {item.price} 🪙</> : <><FaCoins size={9} className="text-amber-400" /> {item.price}</>}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 p-5 bg-linear-to-r from-slate-900 to-slate-800 rounded-2xl text-white flex items-center justify-between gap-4 shadow-xl">
          <div>
            <h3 className="font-black text-base italic">Daha çox Coin lazımdır?</h3>
            <p className="text-slate-400 text-xs mt-1">Oyun oyna, missiyaları tamamla və ya mağazadan al</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <a href="/" className="px-4 py-2 bg-white/10 border border-white/20 text-white text-xs font-bold rounded-xl hover:bg-white/20 transition-colors">
              Oyna
            </a>
            <a href="/shop" className="px-4 py-2 bg-yellow-500 text-slate-900 text-xs font-bold rounded-xl hover:bg-yellow-400 transition-colors flex items-center gap-1">
              <FaCoins size={10} /> Al
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default  CoinStorePage