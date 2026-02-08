import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GiGlobe } from "react-icons/gi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 pt-8 pb-24 md:pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <div className="p-2 bg-slate-900 border border-slate-700 rounded-xl shadow-lg group hover:border-red-600/50 transition-all duration-300">
              <GiGlobe size={22} className="text-red-500 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="text-xl font-black italic tracking-tighter text-white">
              GEO<span className="text-red-600">QUIZ</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: <FaEnvelope />, hover: "hover:bg-red-600", link: "mailto:destek@geoquiz.az" },
              { icon: <FaInstagram />, hover: "hover:bg-[#E1306C]", link: "#" },
              { icon: <FaGithub />, hover: "hover:bg-black", link: "#" },
              { icon: <FaLinkedin />, hover: "hover:bg-[#0077b5]", link: "#" }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.link} 
                className={`w-10 h-10 bg-slate-800/40 border border-slate-700/50 flex items-center justify-center rounded-xl text-white transition-all duration-500 ${item.hover} hover:-translate-y-1 shadow-md`}
              >
                {React.cloneElement(item.icon, { size: 18 })}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/30 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em]">
          <p>© {currentYear} GEOQUIZ STUDIO</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Gizlilik</span>
            <span className="hover:text-white cursor-pointer transition-colors">Şərtlər</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;