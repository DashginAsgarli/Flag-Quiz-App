import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // BrowserRouter yerinə HashRouter import etdik
import "./index.css";
import App from "./App.jsx";

import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import { CountryProvider } from "./contexts/CountryContext.jsx";
import { GameProvider } from "./contexts/GameContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter> =
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <CountryProvider>
              <GameProvider>
                <App />
              </GameProvider>
            </CountryProvider>
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
    </HashRouter>
  </StrictMode>
);