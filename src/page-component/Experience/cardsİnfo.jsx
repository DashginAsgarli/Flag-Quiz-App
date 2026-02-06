import React from 'react'
import { useContext, useState, useMemo } from 'react';
import { CountryContext } from '../../api/CountryContext';
import { FaMapMarkerAlt, FaUsers, FaCoins, FaSearch } from "react-icons/fa";
import { MdFilterList } from "react-icons/md";

function Cardsİnfo() {
  const { countries, loading } = useContext(CountryContext);
  const [flippedCard, setFlippedCard] = useState(null);
  const [search, setSearch] = useState("");

  const filteredCountries = useMemo(() => {
    if (!countries) return [];
    return countries.filter((c) =>
      c.name.common.toLowerCase().includes(search.toLowerCase())
    );
  }, [countries, search]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-red-600"></div>
    </div>
  );

  const handleCardClick = (index) => {
    setFlippedCard(flippedCard === index ? null : index);
  };
  return (
    <>
      <section className="min-h-screen py-6 md:py-10 px-3 md:px-6 bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans mt-13 md:mt-20">
        <div className="max-w-[1400px] mx-auto">

          <div className="flex flex-col items-center mb-6 md:mb-12 gap-4 md:gap-6">

            <div className="relative w-full max-w-[280px] md:max-w-md group">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors text-sm md:text-lg" />
              <input
                type="text"
                placeholder="Ölkə axtar..."
                className="w-full pl-10 pr-4 py-2.5 md:py-3.5 bg-white border border-slate-200 rounded-xl md:rounded-2xl shadow-sm outline-none focus:ring-4 focus:ring-red-500/10 focus:border-red-500 transition-all text-sm md:text-base font-medium"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
            {filteredCountries.map((country, index) => (
              <div
                key={country.cca3 || index}
                className="h-[140px] md:h-[210px] [perspective:1000px] cursor-pointer"
                onClick={() => handleCardClick(index)}
              >
                <div className={`relative h-full w-full rounded-xl md:rounded-2xl transition-all duration-700 [transform-style:preserve-3d] ${flippedCard === index ? '[transform:rotateY(180deg)]' : ''}`}>

                  <div className="absolute inset-0 h-full w-full rounded-xl md:rounded-2xl [backface-visibility:hidden] overflow-hidden border-[3px] md:border-[6px] border-white shadow-sm">
                    <img src={country.flags.svg} alt="Flag" className="h-full w-full object-cover"/>
                  </div>

                  <div className="absolute inset-0 h-full w-full rounded-xl md:rounded-2xl bg-slate-900 p-2 md:p-5 text-white [backface-visibility:hidden] [transform:rotateY(180deg)] border border-slate-800 flex flex-col justify-between overflow-hidden">

                    <div className="border-b border-white/10 pb-1 md:pb-2">
                      <h3 className="text-[9px] md:text-[13px] font-black uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 truncate">
                        {country.name.common}
                      </h3>
                    </div>

                    <div className="space-y-1 md:space-y-3 my-auto">
                      <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 p-1 md:p-1.5 rounded-lg">
                        <FaMapMarkerAlt className="text-red-500 text-[8px] md:text-xs" />
                        <span className="text-[9px] md:text-[12px] font-bold text-slate-200 truncate">{country.capital?.[0] || '---'}</span>
                      </div>

                      <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 p-1 md:p-1.5 rounded-lg">
                        <FaUsers className="text-emerald-400 text-[8px] md:text-xs" />
                        <span className="text-[9px] md:text-[12px] font-bold text-slate-200">
                          {country.population > 1000000 ? (country.population / 1000000).toFixed(1) + 'M' : (country.population / 1000).toFixed(0) + 'K'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 md:gap-2 bg-white/5 p-1 md:p-1.5 rounded-lg">
                        <FaCoins className="text-yellow-400 text-[8px] md:text-xs" />
                        <span className="text-[9px] md:text-[12px] font-bold text-slate-200 truncate">
                          {Object.keys(country.currencies || {})[0] || '---'}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {filteredCountries.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <MdFilterList size={40} className="mx-auto mb-3 opacity-20" />
              <p className="font-bold uppercase tracking-widest text-xs">Ölkə tapılmadı</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Cardsİnfo