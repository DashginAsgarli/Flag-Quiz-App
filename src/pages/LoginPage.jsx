import { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";

function LoginPage() {
  const { login } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise(r => setTimeout(r, 400)); // mock delay
    const result = login(email, password);
    setLoading(false);
    if (result.success) navigate("/profil");
    else setError(result.error);
  };

  return (
    <section className="min-h-screen flex justify-center items-start pt-8 sm:pt-12 md:pt-16 px-4 bg-linear-to-br from-slate-50 via-white to-slate-100 font-sans mt-13">
      <div className="w-full max-w-md">
        <div className="p-6 sm:p-8 rounded-3xl border bg-white border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="p-3 bg-red-50 text-red-600 rounded-2xl mb-3 shadow-inner">
              <FaSignInAlt size={26} />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {t("auth.welcomeBack")}
            </h3>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-700">
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wide">
                {t("auth.email")}
              </label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="nümunə@mail.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white" />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {t("auth.password")}
                </label>
                <button type="button" className="text-[11px] font-bold text-red-600 hover:text-red-700">
                  {t("auth.forgotPw")}
                </button>
              </div>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white" />
            </div>

            <button type="submit" disabled={loading} className="w-full py-3.5 bg-red-600 text-white rounded-xl font-bold text-sm mt-4 shadow-[0_10px_20px_-5px_rgba(220,38,38,0.4)] hover:bg-red-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60">
              {loading ? "Gözləyin..." : t("auth.loginBtn")}
            </button>
          </form>

          <NavLink to="/register" className="block text-center mt-6">
            <p className="text-sm text-slate-500">
              {t("auth.needAccount")}{" "}
              <span className="text-red-600 font-bold hover:underline decoration-2 underline-offset-4">
                {t("auth.register")}
              </span>
            </p>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default LoginPage