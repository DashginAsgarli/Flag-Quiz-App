import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaChevronUp } from "react-icons/fa";
import { GiGlobe } from "react-icons/gi";

function Footer() {
    const currentYear = new Date().getFullYear();
    const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) };

    return (
        <footer className="bg-[#0f172a] border-t border-slate-800/60 pt-8 pb-10 md:pt-12 md:pb-8 px-4 md:px-10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-10 pb-8 md:pb-12">

                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-red-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                            <div className="relative p-3 md:p-4 bg-slate-900 border border-slate-800 rounded-2xl md:rounded-3xl shadow-2xl transition-transform group-hover:-rotate-12">
                                <GiGlobe size={24} className="text-red-500 md:w-[30px] md:h-[30px]" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex items-center gap-2 p-1.5 bg-slate-900/40 border border-slate-800/50 rounded-2xl backdrop-blur-md">
                            {[
                                { icon: <FaEnvelope />, hover: "hover:bg-red-600", link: "mailto:destek@geoquiz.az" },
                                { icon: <FaInstagram />, hover: "hover:bg-[#E1306C]", link: "#" },
                                { icon: <FaGithub />, hover: "hover:bg-slate-700", link: "#" },
                                { icon: <FaLinkedin />, hover: "hover:bg-[#0077b5]", link: "#" }
                            ].map((item, i) => (
                                <a key={i} href={item.link} className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl text-slate-400 hover:text-white transition-all duration-300 ${item.hover}`}>
                                    {React.cloneElement(item.icon, { size: 18 })}
                                </a>
                            ))}

                            <div className="w-[1px] h-6 bg-slate-800 mx-1 hidden md:block"></div>

                            <button onClick={scrollToTop} className="hidden md:flex w-10 h-10 items-center justify-center bg-red-600/10 border border-red-600/20 rounded-xl text-red-500 hover:bg-red-600 hover:text-white transition-all group" >
                                <FaChevronUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800/40 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="order-2 md:order-1">
                        <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">
                            © {currentYear} Bütün hüquqlar qorunur
                        </p>
                    </div>

                    <div className="flex gap-6 md:gap-10 order-1 md:order-2">
                        <span className="text-[9px] font-black text-slate-500 hover:text-red-500 cursor-pointer transition-colors uppercase tracking-[0.2em]">Gizlilik Siyasəti</span>
                        <span className="text-[9px] font-black text-slate-500 hover:text-red-500 cursor-pointer transition-colors uppercase tracking-[0.2em]">İstifadə Şərtləri</span>
                    </div>
                </div>
            </div>

            <button onClick={scrollToTop} className="md:hidden absolute right-4 top-8 w-8 h-8 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-full text-slate-400">
                <FaChevronUp size={10} />
            </button>
        </footer>
    );
}

export default Footer;