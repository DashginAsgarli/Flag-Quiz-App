import { createContext, useContext, useState, useEffect } from "react";
import { saveToStorage, loadFromStorage } from "../utils/storage";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState(() => loadFromStorage("geoquiz_theme") ?? "light");

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        saveToStorage("geoquiz_theme", theme);
    }, [theme]);

    const toggleTheme = () => setThemeState(prev => (prev === "light" ? "dark" : "light"));
    const setTheme = (t) => setThemeState(t);
    const isDark = theme === "dark";

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);