import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ShopPage from "./pages/ShopPage";
import ExperiencePage from "./pages/ExperiencePage";
import RatingPage from "./pages/RatingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import List from "./features/experience/List";
import CardsInfo from "./features/experience/CardsInfo";
import GlobeView from "./features/experience/GlobeView";
import FlagGame from "./features/games/flag/FlagGame";
import FlagGamePlay from "./features/games/flag/FlagGamePlay";
import CurrencyGame from "./features/games/currency/CurrencyGame";
import CurrencyGamePlay from "./features/games/currency/CurrencyGamePlay";
import ContinentGame from "./features/games/continent/ContinentGame";
import ContinentGamePlay from "./features/games/continent/ContinentGamePlay";
import GlobalGame from "./features/games/memory/GlobalGame";
import GlobalGamePlay from "./features/games/memory/GlobalGamePlay";
import CoinStorePage from "./pages/CoinStorePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/experience/globe" element={<GlobeView />} />
        <Route path="/experience/list" element={<List />} />
        <Route path="/experience/cardsinfo" element={<CardsInfo />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/games/flag" element={<FlagGame />} />
        <Route path="/games/flag/fplay" element={<FlagGamePlay />} />
        <Route path="/games/currency" element={<CurrencyGame />} />
        <Route path="/games/currency/cplay" element={<CurrencyGamePlay />} />
        <Route path="/games/continent" element={<ContinentGame />} />
        <Route path="/games/continent/qplay" element={<ContinentGamePlay />} />
        <Route path="/games/global" element={<GlobalGame />} />
        <Route path="/games/global/memory" element={<GlobalGamePlay />} />
        <Route path="/coinstore" element={<CoinStorePage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center mt-13">
            <p className="text-slate-400 font-bold text-lg">404 — Səhifə tapılmadı</p>
          </div>
        } />
      </Routes>
    </>
  );
}

export default App