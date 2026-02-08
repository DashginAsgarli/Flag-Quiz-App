import { FaSignInAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

function Login() {
    return (
        <section className="min-h-screen flex justify-center items-start pt-8 sm:pt-12 md:pt-16 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 font-sans mt-13">
            <div className="w-full max-w-md">
                <div className="p-6 sm:p-8 rounded-3xl border bg-white border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                    <div className="flex flex-col items-center text-center mb-6">
                        <div className="p-3 bg-red-50 text-red-600 rounded-2xl mb-3 shadow-inner">
                            <FaSignInAlt size={26} />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Xoş gəlmisiniz</h3>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wide">E-poçt</label>
                            <input  type="email"  placeholder="nümunə@mail.com"  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"/>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Şifrə</label>
                                <button className="text-[11px] font-bold text-red-600 hover:text-red-700 transition-colors">Unutmusunuz?</button>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white"
                            />
                        </div>

                        <button className="w-full py-3.5 bg-red-600 text-white rounded-xl font-bold text-sm mt-4
                            shadow-[0_10px_20px_-5px_rgba(220,38,38,0.4)] 
                            hover:bg-red-700 hover:shadow-[0_15px_25px_-5px_rgba(220,38,38,0.5)] 
                            hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] 
                            transition-all duration-200">
                            Daxil ol
                        </button>
                    </form>
                    
                    <NavLink to="/register" className="block text-center mt-6">
                        <p className="text-sm text-slate-500">
                            Hesabınız yoxdur? <span className="text-red-600 font-bold hover:underline decoration-2 underline-offset-4">Qeydiyyat</span>
                        </p>
                    </NavLink>
                </div>

            </div>
        </section>
    );
};

export default Login;