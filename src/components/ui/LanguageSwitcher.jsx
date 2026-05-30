import { useLanguage } from "../../contexts/LanguageContext";
import { LANGUAGES } from "../../i18n";

export function LanguageSwitcher() {
    const { lang, setLang } = useLanguage();
    return (
        <div className="flex gap-1 bg-slate-800/50 rounded-xl p-1">
            {LANGUAGES.map(({ code, flag, label }) => (
                <button key={code} onClick={() => setLang(code)} className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold uppercase transition-all    ${lang === code ? "bg-white text-slate-900" : "text-slate-400 hover:text-white"}`}>
                    <span>{flag}</span> {label}
                </button>
            ))}
        </div>
    );
}