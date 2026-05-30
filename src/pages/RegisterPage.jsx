import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useLanguage } from "../contexts/LanguageContext";

function RegisterPage() {
  const { register } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPw) return setError("Şifrələr uyğun gəlmir");
    if (password.length < 6) return setError("Şifrə ən az 6 simvol olmalıdır");
    setLoading(true);
    await new Promise(r => setTimeout(r, 400));
    const result = register(name, email, password);
    setLoading(false);
    if (result.success) navigate("/profil");
    else setError(result.error);
  };

  return (
    <section className="min-h-screen flex justify-center items-start pt-6 sm:pt-12 md:pt-16 px-4 bg-linear-to-br from-slate-50 via-white to-slate-100 font-sans mt-13">
      <div className="w-full max-w-md">
        <div className="p-6 sm:p-8 rounded-3xl border bg-white border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="p-3 bg-slate-50 text-[#0f172a] rounded-2xl mb-3 shadow-inner">
              <FaUserPlus size={28} />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {t("auth.createAcc")}
            </h3>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-700">
              {error}
            </div>
          )}

          <form className="space-y-3.5" onSubmit={handleSubmit}>
            {[
              { label: t("auth.name"), value: name, set: setName, type: "text", ph: "Adınız Soyadınız" },
              { label: t("auth.email"), value: email, set: setEmail, type: "email", ph: "nümunə@mail.com" },
              { label: t("auth.password"), value: password, set: setPassword, type: "password", ph: "••••••••" },
              { label: t("auth.confirmPw"), value: confirmPw, set: setConfirmPw, type: "password", ph: "••••••••" },
            ].map(({ label, value, set, type, ph }) => (
              <div key={label} className="space-y-1">
                <label className="text-xs font-bold text-slate-500 ml-1">{label}</label>
                <input type={type} required value={value} onChange={e => set(e.target.value)} placeholder={ph} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-slate-500 focus:ring-4 focus:ring-slate-500/10 outline-none transition-all text-sm bg-slate-50/50 focus:bg-white" />
              </div>
            ))}

            <button type="submit" disabled={loading} className="w-full py-3.5 bg-[#0f172a] text-white rounded-xl font-bold text-sm mt-4 shadow-[0_10px_20px_-5px_rgba(15,23,42,0.3)] hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-60">
              {loading ? "Gözləyin..." : t("auth.registerBtn")}
            </button>
          </form>

          <NavLink to="/login" className="block text-center mt-6">
            <p className="text-sm text-slate-500">
              {t("auth.haveAccount")}{" "}
              <span className="text-[#0f172a] font-bold hover:underline decoration-2 underline-offset-4">
                {t("auth.login")}
              </span>
            </p>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage