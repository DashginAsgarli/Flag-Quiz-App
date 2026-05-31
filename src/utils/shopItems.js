export const AVATAR_FRAMES = [
    { id: "frame_gold", type: "avatar_frame", name: "Qızıl Çərçivə", price: 500, rarity: "rare", preview: "ring-4 ring-yellow-400", iconName: "gold" },
    { id: "frame_red", type: "avatar_frame", name: "Qırmızı Alov", price: 300, rarity: "common", preview: "ring-4 ring-red-500", iconName: "red" },
    { id: "frame_blue", type: "avatar_frame", name: "Okean Dalğası", price: 300, rarity: "common", preview: "ring-4 ring-blue-500", iconName: "blue" },
    { id: "frame_rainbow", type: "avatar_frame", name: "Göy Qurşağı", price: 1200, rarity: "legendary", preview: "ring-4 ring-purple-500", iconName: "rainbow" },
    { id: "frame_diamond", type: "avatar_frame", name: "Almaz", price: 2000, rarity: "legendary", preview: "ring-4 ring-cyan-400", iconName: "diamond" },
    { id: "frame_fire", type: "avatar_frame", name: "Alov Çemberi", price: 800, rarity: "epic", preview: "ring-4 ring-orange-500", iconName: "fire" },
];

export const PROFILE_ICONS = [
    { id: "icon_astronaut", type: "icon", name: "Astronavt", price: 200, rarity: "common", iconName: "astronaut" },
    { id: "icon_globe", type: "icon", name: "Dünya", price: 200, rarity: "common", iconName: "globe" },
    { id: "icon_crown", type: "icon", name: "Tac", price: 500, rarity: "rare", iconName: "crown" },
    { id: "icon_dragon", type: "icon", name: "Əjdaha", price: 800, rarity: "epic", iconName: "dragon" },
    { id: "icon_diamond", type: "icon", name: "Almaz", price: 1000, rarity: "epic", iconName: "diamond" },
    { id: "icon_lightning", type: "icon", name: "İldırım", price: 600, rarity: "rare", iconName: "lightning" },
    { id: "icon_star", type: "icon", name: "Ulduz", price: 300, rarity: "common", iconName: "star" },
    { id: "icon_ninja", type: "icon", name: "Ninja", price: 700, rarity: "epic", iconName: "ninja" },
];

export const TITLES = [
    { id: "title_explorer", type: "title", name: "Kəşfiyyatçı", price: 300, rarity: "common", display: "Kəşfiyyatçı", iconName: "globe" },
    { id: "title_master", type: "title", name: "Usta", price: 600, rarity: "rare", display: "Usta", iconName: "crown" },
    { id: "title_legend", type: "title", name: "Əfsanə", price: 1500, rarity: "legendary", display: "Əfsanə", iconName: "gold" },
    { id: "title_champion", type: "title", name: "Çempion", price: 1000, rarity: "epic", display: "Çempion", iconName: "crown_purple" },
    { id: "title_globe", type: "title", name: "Dünya Vətəndaşı", price: 800, rarity: "epic", display: "Dünya Vətəndaşı", iconName: "globe_blue" },
    { id: "title_quiz", type: "title", name: "Quiz Mağarı", price: 2000, rarity: "legendary", display: "Quiz Mağarı", iconName: "star" },
];

export const GAME_HINTS = [
    { id: "hint_5050", type: "hint", name: "50/50", price: 50, rarity: "common", desc: "2 yanlış cavabı sil", iconName: "cut" },
    { id: "hint_time", type: "hint", name: "+10 Saniyə", price: 30, rarity: "common", desc: "Vaxta 10 saniyə əlavə et", iconName: "time" },
    { id: "hint_reveal", type: "hint", name: "Cavabı Göstər", price: 100, rarity: "rare", desc: "Doğru cavabı vurgula", iconName: "eye" },
    { id: "hint_skip", type: "hint", name: "Keç", price: 75, rarity: "common", desc: "Bu sualı keç", iconName: "forward" },
    { id: "hint_double", type: "hint", name: "Qoşa Xal", price: 80, rarity: "rare", desc: "Növbəti cavab 2x xal", iconName: "double" },
];

export const RARITY_COLORS = {
    common: { bg: "bg-slate-100", text: "text-slate-600", border: "border-slate-200", label: "Adi" },
    rare: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", label: "Nadir" },
    epic: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", label: "Epik" },
    legendary: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", label: "Əfsanəvi" },
};

export const ALL_SHOP_ITEMS = [
    ...AVATAR_FRAMES,
    ...PROFILE_ICONS,
    ...TITLES,
    ...GAME_HINTS,
];