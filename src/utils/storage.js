export const saveToStorage = (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch { console.warn("LocalStorage yazma xətası"); }
};

export const loadFromStorage = (key) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch { return null; }
};

export const removeFromStorage = (key) => {
    try { localStorage.removeItem(key); }
    catch { console.warn("LocalStorage silmə xətası"); }
};