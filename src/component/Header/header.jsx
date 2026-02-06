import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaUserAstronaut, FaHome } from "react-icons/fa";
import { MdModelTraining, MdLeaderboard, MdShoppingCart } from "react-icons/md";
function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-[1000] bg-[#0f172a] border-b border-slate-800 shadow-2xl">
            <nav className="max-w-7xl mx-auto px-1 py-2 md:px-10 md:py-4">
                <div className="flex justify-between items-center gap-0.5 md:gap-4">

                    {[
                        { to: "/profil", label: "Profil", icon: <FaUserAstronaut /> },
                        { to: "/shop", label: "Mağaza", icon: <MdShoppingCart /> },
                        { to: "/", label: "Əsas", icon: <FaHome /> },
                        { to: "/experience", label: "Təcrübə", icon: <MdModelTraining /> },
                        { to: "/rating", label: "Reyting", icon: <MdLeaderboard /> }
                    ].map((item, index) => (
                        <NavLink key={index} to={item.to} className="flex flex-col items-center justify-center flex-1 py-1 transition-all text-slate-400">
                            <span className="text-lg md:text-2xl mb-1">{item.icon}</span>
                            <span className="text-[7px] sm:text-[9px] md:text-[12px] font-black uppercase italic leading-none">
                                {item.label}
                            </span>
                        </NavLink>
                    ))}

                </div>
            </nav>
        </header>
    );
}

export default Header;