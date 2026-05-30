import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../i18n";
import { saveToStorage, loadFromStorage } from "../utils/storage";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(() => loadFromStorage("geoquiz_lang") ?? "az");

    const t = (key) => {
        const keys = key.split(".");
        let val = translations[lang];
        for (const k of keys) val = val?.[k];
        return val ?? key;
    };

    const setLang = (code) => {
        setLangState(code);
        saveToStorage("geoquiz_lang", code);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => useContext(LanguageContext);