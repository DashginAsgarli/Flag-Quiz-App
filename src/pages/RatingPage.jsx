import { useMemo } from "react";
import { FaCrown, FaArrowUp, FaUserAstronaut, FaUserShield, FaUserGraduate, FaUserTag } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";
import { loadFromStorage } from "../utils/storage";

const MOCK_PLAYERS = [
  { id: "m1", name: "Kənan Hüseynov", xp: 15200, status: "Champion", icon: <MdStars />, color: "text-yellow-500" },
  { id: "m2", name: "Nigar Əliyeva", xp: 12400, status: "Master", icon: <FaUserGraduate />, color: "text-emerald-500" },
  { id: "m3", name: "Rauf Babayev", xp: 10800, status: "Pro", icon: <FaUserShield />, color: "text-lime-500" },
  { id: "m4", name: "Orxan Abbasov", xp: 8250, status: "Pro", icon: <FaUserAstronaut />, color: "text-pink-600" },
  { id: "m5", name: "Aysel Məmmədova", xp: 7900, status: "Master", icon: <FaUserShield />, color: "text-emerald-600" },
  { id: "m6", name: "Dəniz Quliyev", xp: 7100, status: "Explorer", icon: <FaUserGraduate />, color: "text-orange-500" },
  { id: "m7", name: "Emil Rzayev", xp: 6800, status: "Beginner", icon: <FaUserTag />, color: "text-slate-400" },
];

function getStatus(xp) {
  if (xp >= 10000) return "Champion";
  if (xp >= 7000) return "Master";
  if (xp >= 4000) return "Pro";
  if (xp >= 2000) return "Explorer";
  return "Beginner";
}

function RatingPage() {
  const { user } = useAuth();
  const { t } = useLanguage();

  const allPlayers = useMemo(() => {
    const accounts = loadFromStorage("geoquiz_accounts") ?? [];
    const realPlayers = accounts
      .filter(a => (a.xp ?? 0) > 0)
      .map(a => ({
        id: a.id,
        name: a.name,
        xp: a.xp ?? 0,
        status: getStatus(a.xp ?? 0),
        icon: <FaUserAstronaut />,
        color: "text-blue-500",
        isMe: a.id === user?.id,
      }));

    const merged = [...MOCK_PLAYERS, ...realPlayers]
      .sort((a, b) => b.xp - a.xp)
      .map((p, i) => ({ ...p, rank: i + 1 }));

    return merged;
  }, [user]);

  const top3 = allPlayers.slice(0, 3);
  const rest = allPlayers.slice(3);
  const myEntry = allPlayers.find(p => p.isMe);
  const podiumOrder = top3.length >= 3 ? [top3[1], top3[0], top3[2]] : top3;
  const podiumHeights = ["h-12 md:h-16", "h-20 md:h-28", "h-10 md:h-14"];
  const podiumSizes = ["w-24 md:w-32", "w-28 md:w-40", "w-24 md:w-32"];

  return (
    <section className="min-h-screen py-4 px-3 bg-linear-to-br from-slate-50 via-white to-slate-100 mt-12 md:mt-25">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-center font-black text-xl text-slate-800 italic mb-6">{t("rating.title")}</h1>

        <div className="relative flex items-end justify-center gap-2 mb-8 h-48 md:h-56">
          {podiumOrder.map((player, idx) => {
            const gradients = [
              "from-emerald-400 to-teal-600",
              "from-yellow-500 to-pink-600",
              "from-green-600 to-lime-400",
            ];
            return (
              <div key={player.id} className={`flex flex-col items-center ${podiumSizes[idx]}`}>
                {idx === 1 && <FaCrown className="text-yellow-500 text-xl mb-1" />}
                <div className={`w-10 h-10 md:w-${idx === 1 ? 20 : 14} md:h-${idx === 1 ? 20 : 14} rounded-xl border-2 ${idx === 1 ? "border-yellow-400 shadow-lg" : "border-slate-200 shadow-sm"} flex items-center justify-center bg-white mb-2 text-2xl ${idx === 1 ? "md:text-4xl" : "md:text-2xl"} ${player.color} ${player.isMe ? "ring-2 ring-red-500" : ""}`}>
                  {player.icon}
                </div>
                <div className={`bg-linear-to-br ${gradients[idx]} w-full ${podiumHeights[idx]} rounded-t-xl md:rounded-t-2xl flex flex-col items-center pt-2 border-t border-white/20`}>
                  <span className={`font-black text-white italic leading-none ${idx === 1 ? "text-2xl md:text-4xl" : "text-lg md:text-xl"}`}>{player.rank}</span>
                  <span className="text-[7px] md:text-[9px] font-bold text-white/70 mt-0.5 px-1 truncate w-full text-center">{player.xp.toLocaleString()}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="space-y-2 mb-6">
          {rest.map(player => (
            <div key={player.id} className={`border p-2.5 rounded-2xl flex items-center justify-between group hover:shadow-md transition-all ${player.isMe ? "bg-red-50 border-red-200" : "bg-white border-slate-100"}`}>
              <div className="flex items-center gap-3">
                <span className="font-black text-slate-200 text-sm md:text-lg w-4 italic">{player.rank}</span>
                <div className={`w-9 h-9 md:w-11 md:h-11 rounded-xl bg-slate-50 flex items-center justify-center text-xl md:text-2xl shadow-inner ${player.isMe ? "ring-2 ring-red-400" : ""}`}>
                  <span className={player.color}>{player.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-[11px] md:text-sm uppercase leading-none mb-1">
                    {player.name} {player.isMe && <span className="text-red-500 text-[9px]">(Siz)</span>}
                  </h4>
                  <span className="text-[8px] font-bold uppercase text-slate-400 tracking-wider">{player.status}</span>
                </div>
              </div>
              <div className="bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-100 flex items-center gap-1.5">
                <span className="font-black text-slate-700 italic text-xs md:text-sm">{player.xp.toLocaleString()}</span>
                <FaArrowUp className="text-[8px] text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        {myEntry && myEntry.rank > 10 && (
          <div className="bg-red-50 border-2 border-red-200 p-3 rounded-2xl flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="font-black text-red-300 text-sm italic">#{myEntry.rank}</span>
              <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center text-red-500 text-xl ring-2 ring-red-400">
                {myEntry.icon}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-[11px] uppercase leading-none mb-1">
                  {myEntry.name} <span className="text-red-500 text-[9px]">(Siz)</span>
                </h4>
                <span className="text-[8px] font-bold uppercase text-slate-400">{myEntry.status}</span>
              </div>
            </div>
            <div className="bg-white px-3 py-1.5 rounded-xl border border-red-200 flex items-center gap-1.5">
              <span className="font-black text-slate-700 italic text-xs">{(myEntry.xp ?? 0).toLocaleString()}</span>
              <FaArrowUp className="text-[8px] text-emerald-500" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default RatingPage