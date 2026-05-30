import { NavLink } from "react-router-dom";
import { FaUserAstronaut, FaHome } from "react-icons/fa";
import { MdModelTraining, MdLeaderboard, MdShoppingCart } from "react-icons/md";
import { useLanguage } from "../../contexts/LanguageContext";

function Header() {
    const { t } = useLanguage();
    const navItems = [
        { to: "/profil", labelKey: "nav.profile", icon: <FaUserAstronaut /> },
        { to: "/shop", labelKey: "nav.shop", icon: <MdShoppingCart /> },
        { to: "/", labelKey: "nav.home", icon: <FaHome /> },
        { to: "/experience", labelKey: "nav.experience", icon: <MdModelTraining /> },
        { to: "/rating", labelKey: "nav.rating", icon: <MdLeaderboard /> },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-1000 bg-[#0f172a] border-b border-slate-800 shadow-2xl">
            <nav className="max-w-7xl mx-auto px-1 py-2 md:px-10 md:py-4">
                <div className="flex justify-between items-center gap-0.5 md:gap-4">
                    {navItems.map((item, i) => (
                        <NavLink key={i} to={item.to} end={item.to === "/"} className={({ isActive }) => `flex flex-col items-center justify-center flex-1 py-1 transition-all ${isActive ? "text-white" : "text-slate-400"}`}>
                            <span className="text-lg md:text-2xl mb-1">{item.icon}</span>
                            <span className="text-[7px] sm:text-[9px] md:text-[12px] font-black uppercase italic leading-none">
                                {t(item.labelKey)}
                            </span>
                        </NavLink>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Header