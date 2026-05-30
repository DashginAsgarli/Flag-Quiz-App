import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { saveToStorage, loadFromStorage } from "../utils/storage";
import { useAuth } from "./AuthContext";

export const GameContext = createContext();

export function GameProvider({ children }) {
    const { user, addXP, addCoin, updateUser } = useAuth();
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const saved = loadFromStorage("geoquiz_history") ?? [];
        setHistory(saved);
    }, []);

    const saveGameResult = useCallback(({ gameType, score, correct, total, timeMs }) => {
        const entry = { id: Date.now().toString(), gameType, score, correct, total, timeMs, date: new Date().toISOString(), userId: user?.id ?? "guest", };
        setHistory(prev => {
            const next = [entry, ...prev].slice(0, 50);
            saveToStorage("geoquiz_history", next);
            return next;
        });
        addXP(Math.floor(score / 10));
        addCoin(Math.floor(score / 50));
    }, [user, addXP, addCoin]);

    const inventory = user?.inventory ?? [];

    const buyItem = useCallback((item) => {
        if ((user?.coin ?? 0) < item.price) return { success: false, error: "Coin kifayət deyil" };
        const alreadyOwned = inventory.some(i => i.id === item.id);
        if (alreadyOwned) return { success: false, error: "Artıq sahibsiniz" };
        const newInventory = [...inventory, { ...item, boughtAt: new Date().toISOString() }];
        updateUser({ coin: (user.coin - item.price), inventory: newInventory });
        return { success: true };
    }, [user, inventory, updateUser]);

    const equipItem = useCallback((item) => {
        const patch = {};
        if (item.type === "avatar_frame") patch.equippedFrame = item.id;
        if (item.type === "icon") patch.equippedIcon = item.id;
        if (item.type === "title") patch.equippedTitle = item.id;
        updateUser(patch);
    }, [updateUser]);

    const userHistory = history.filter(h => h.userId === (user?.id ?? "guest"));

    return (
        <GameContext.Provider value={{ history: userHistory, saveGameResult, inventory, buyItem, equipItem, }}>
            {children}
        </GameContext.Provider>
    );
}

export const useGame = () => useContext(GameContext);