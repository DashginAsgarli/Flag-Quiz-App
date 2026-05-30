import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { saveToStorage, loadFromStorage, removeFromStorage } from "../utils/storage";

export const AuthContext = createContext();

const GUEST_USER = {
    id: "guest",
    name: "Qonaq",
    nickname: "səyyah",
    email: "",
    avatar: null,
    isGuest: true,
    coin: 500,
    xp: 0,
    level: 1,
    rank: null,
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const saved = loadFromStorage("geoquiz_user");
        setUser(saved ?? { ...GUEST_USER });
        setLoading(false);
    }, []);

    const login = useCallback((email, password) => {
        const accounts = loadFromStorage("geoquiz_accounts") ?? [];
        const found = accounts.find(a => a.email === email && a.password === password);
        if (!found) return { success: false, error: "E-poçt və ya şifrə yanlışdır" };
        const { password: _pw, ...safeUser } = found;
        saveToStorage("geoquiz_user", safeUser);
        setUser(safeUser);
        return { success: true };
    }, []);

    const register = useCallback((name, email, password) => {
        const accounts = loadFromStorage("geoquiz_accounts") ?? [];
        if (accounts.find(a => a.email === email))
            return { success: false, error: "Bu e-poçt artıq qeydiyyatdadır" };
        const newUser = {
            id: Date.now().toString(),
            name,
            nickname: name.split(" ")[0].toLowerCase(),
            email,
            avatar: null,
            isGuest: false,
            coin: 500,
            xp: 0,
            level: 1,
            rank: null,
        };
        saveToStorage("geoquiz_accounts", [...accounts, { ...newUser, password }]);
        saveToStorage("geoquiz_user", newUser);
        setUser(newUser);
        return { success: true };
    }, []);

    const logout = useCallback(() => {
        removeFromStorage("geoquiz_user");
        setUser({ ...GUEST_USER });
    }, []);

    const updateUser = useCallback((patch) => {
        setUser(prev => {
            const updated = { ...prev, ...patch };
            if (!updated.isGuest) {
                saveToStorage("geoquiz_user", updated);
                const accounts = loadFromStorage("geoquiz_accounts") ?? [];
                saveToStorage(
                    "geoquiz_accounts",
                    accounts.map(a => (a.id === updated.id ? { ...a, ...patch } : a))
                );
            }
            return updated;
        });
    }, []);

    const addCoin = useCallback((amount) => {
        updateUser({ coin: (user?.coin ?? 0) + amount });
    }, [user, updateUser]);

    const addXP = useCallback((amount) => {
        setUser(prev => {
            const newXP = (prev.xp ?? 0) + amount;
            const newLevel = Math.floor(newXP / 500) + 1;
            const patch = { xp: newXP, level: newLevel };
            const updated = { ...prev, ...patch };
            if (!updated.isGuest) saveToStorage("geoquiz_user", updated);
            return updated;
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout, updateUser, addCoin, addXP }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);