import { FaUserPlus } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Register() {
    return (
        <section className="min-h-screen flex justify-center items-start pt-6 sm:pt-12 md:pt-16 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 font-sans mt-13">
            <div className="w-full max-w-md">
                <div className="p-6 sm:p-8 rounded-3xl border bg-white border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                    
                    <div className="flex flex-col items-center text-center mb-6">
                        <div className="p-3 bg-slate-50 text-[#0f172a] rounded-2xl mb-3 shadow-inner">
                            <FaUserPlus size={28} />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Hesab yaradın</h3>
                    </div>

                    <form className="space-y-3.5" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 ml-1 ">Ad və Soyad</label>
                            <input
                                type="text"
                                placeholder="Adınız Soyadınız"
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-500 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 ml-1 ">E-poçt</label>
                            <input
                                type="email"
                                placeholder="nümunə@mail.com"
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-500 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 ml-1 ">Şifrə</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-500 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 ml-1 ">Şifrəni təsdiqləyin</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-500 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                            />
                        </div>

                        <button className="w-full py-3.5 bg-[#0f172a] text-white rounded-xl font-bold text-sm mt-4
                            shadow-[0_10px_20px_-5px_rgba(15,23,42,0.3)] 
                            hover:bg-slate-800 hover:shadow-[0_15px_25px_-5px_rgba(15,23,42,0.4)] 
                            hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] 
                            transition-all duration-200">
                            Qeydiyyatı tamamla
                        </button>
                    </form>
                    
                    <NavLink to="/login" className="block text-center mt-6">
                        <p className="text-sm text-slate-500">
                            Artıq hesabınız var? <span className="text-[#0f172a] font-bold hover:underline decoration-2 underline-offset-4">Daxil olun</span>
                        </p>
                    </NavLink>
                </div>

            </div>
        </section>
    );
};

export default Register;