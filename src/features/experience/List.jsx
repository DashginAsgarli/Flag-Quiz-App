import { useMemo, useState } from "react";
import { IoSearchOutline, IoLocationOutline, IoPeopleOutline, IoWalletOutline, IoGlobeOutline, IoChevronForwardOutline, IoMapOutline } from "react-icons/io5";
import { useCountries } from "../../contexts/CountryContext";
import { Spinner } from "../../components/ui/Spinner";

function List() {
    const { countries, loading, error, retry } = useCountries();
    const [search, setSearch] = useState("");

    const filtered = useMemo(() => {
        if (!countries.length) return [];
        const q = search.toLowerCase();
        return countries.filter(c =>
            c.name.common.toLowerCase().includes(q) ||
            c.capital?.[0]?.toLowerCase().includes(q)
        );
    }, [countries, search]);

    if (loading) return <Spinner fullScreen />;

    if (error) return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <p className="text-red-500 font-bold text-sm">{error}</p>
            <button onClick={retry} className="px-6 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors">
                Yenidən cəhd et
            </button>
        </div>
    );

    return (
        <section className="min-h-screen bg-slate-50 py-8 px-4 md:px-10 font-sans mt-13 md:mt-20">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-red-50 rounded-2xl shadow-inner">
                            <IoGlobeOutline className="text-red-600 text-3xl" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Dünya Siyahısı</h1>
                            <p className="text-slate-400 text-sm font-medium">{countries.length} ümumi ölkə</p>
                        </div>
                    </div>
                    <div className="relative w-full md:w-96">
                        <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
                        <input type="text" placeholder="Ölkə və ya paytaxt..." className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600/20 outline-none text-slate-700 font-medium shadow-inner" onChange={e => setSearch(e.target.value)} />
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden p-2 md:p-4">
                    <div className="hidden md:grid grid-cols-12 bg-slate-50 rounded-2xl border border-slate-100 px-6 py-4 mb-2">
                        {["Ölkə Detalları", "Region", "Paytaxt", "Əhali", "Valyuta"].map((h, i) => (
                            <div key={i} className={`text-[11px] font-bold text-slate-500 uppercase tracking-wider ${i === 0 ? "col-span-4" : i === 4 ? "col-span-2 text-right" : "col-span-2"}`}>{h}</div>
                        ))}
                    </div>

                    <div className="divide-y divide-slate-50">
                        {filtered.map((country, idx) => (
                            <div key={country.cca3 ?? idx} className="grid grid-cols-1 md:grid-cols-12 items-center px-6 py-5 group hover:bg-slate-100/70 transition-all duration-200 cursor-pointer rounded-2xl">
                                <div className="col-span-4 flex items-center gap-4 mb-3 md:mb-0">
                                    <div className="overflow-hidden rounded-lg shadow-sm border border-slate-200 w-14 h-9 shrink-0 bg-white">
                                        <img src={country.flags.svg} alt={country.name.common} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300" />
                                    </div>
                                    <div className="truncate">
                                        <h4 className="font-bold text-slate-800 text-[16px] leading-tight tracking-tight truncate group-hover:text-black">{country.name.common}</h4>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase">{country.cca3}</span>
                                    </div>
                                </div>
                                <div className="col-span-2 flex items-center gap-2 mb-2 md:mb-0">
                                    <IoMapOutline className="text-blue-500 text-[16px] group-hover:scale-110 transition-transform" />
                                    <span className="text-[13px] font-semibold text-slate-600 group-hover:text-slate-900">{country.continents?.[0] ?? country.region}</span>
                                </div>
                                <div className="col-span-2 flex items-center gap-2 mb-2 md:mb-0">
                                    <IoLocationOutline className="text-red-500 text-[16px] group-hover:scale-110 transition-transform" />
                                    <span className="text-[13px] font-medium text-slate-600 truncate italic group-hover:text-slate-900">{country.capital?.[0] ?? "---"}</span>
                                </div>
                                <div className="col-span-2 flex items-center gap-2 mb-2 md:mb-0">
                                    <IoPeopleOutline className="text-emerald-500 text-[16px] group-hover:scale-110 transition-transform" />
                                    <span className="text-[13px] font-bold text-slate-700 group-hover:text-slate-900">{country.population.toLocaleString()}</span>
                                </div>
                                <div className="col-span-2 flex items-center justify-between md:justify-end gap-3">
                                    <div className="flex items-center gap-2">
                                        <IoWalletOutline className="text-amber-500 text-[16px] group-hover:scale-110 transition-transform" />
                                        <span className="text-[13px] font-bold text-slate-800 uppercase group-hover:text-black">
                                            {Object.keys(country.currencies ?? {})[0] ?? "---"}
                                        </span>
                                    </div>
                                    <IoChevronForwardOutline className="text-slate-300 text-[18px] group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {filtered.length === 0 && (
                    <div className="mt-6 text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200">
                        <p className="text-slate-400 text-sm font-medium italic uppercase tracking-widest">Nəticə tapılmadı</p>
                    </div>
                )}
            </div>
        </section>
    );
}


export default List