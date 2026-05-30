import { createContext, useContext, useEffect, useState } from "react";

export const CountryContext = createContext();

export function CountryProvider({ children }) {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let cancelled = false;

        const fetchCountries = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,population,currencies,continents,region,cca3");
                if (!res.ok) throw new Error(`API xətası: ${res.status}`);
                const data = await res.json();
                if (!cancelled) {
                    setCountries(data.sort((a, b) => a.name.common.localeCompare(b.name.common)));
                }
            } catch (err) {
                if (!cancelled) setError(err.message);
                console.error("Ölkə məlumatları yüklənmədi:", err);
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        fetchCountries();
        return () => { cancelled = true; };
    }, []);

    const retry = () => {
        setCountries([]);
        setLoading(true);
        setError(null);
    };

    return (
        <CountryContext.Provider value={{ countries, loading, error, retry }}>
            {children}
        </CountryContext.Provider>
    );
}

export const useCountries = () => useContext(CountryContext);