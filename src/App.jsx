import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Header from './component/Header/header.jsx';

import HomePage from './component/Main/HomePage.jsx';
import Profil from './component/Main/profil.jsx';
import Shop from './component/Main/shop.jsx';
import Experience from './component/Main/experience.jsx';
import Rating from './component/Main/rating.jsx';
import List from './page-component/Experience/list.jsx';
import Globe from './page-component/Experience/globe.jsx';
import Cardsİnfo from './page-component/Experience/cardsİnfo.jsx';

import Login from './page-component/Login/login.jsx';
import Register from './page-component/Login/register.jsx';

import ContinentGame from './page-component/Games/ContinentGame.jsx';
import GlobalGame from './page-component/Games/GlobalGame.jsx';
import CurrencyGame from './page-component/Games/CurrencyGame.jsx';
import FlagGame from './page-component/Games/FlagGame.jsx';

import { CountryProvider } from './api/CountryContext.jsx';

import FlagGamePlay from './page-component/Games/FlagGamePlay.jsx';
import CurrencyGamePlay from './page-component/Games/CurrencyGamePlay.jsx';
import ContinentGamePlay from './page-component/Games/ContinentGamePlay.jsx';
import Footer from './component/Footer/footer.jsx';
import GlobalGamePlay from './page-component/Games/GlobalGamePlay.jsx';
function App() {
  return (
    <>
      <Header />




      <section>
        <CountryProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/experience/list" element={<List />} />
            <Route path="/experience/globe" element={<Globe />} />
            <Route path="/experience/cardsinfo" element={<Cardsİnfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/games/continent" element={<ContinentGame />} />
            <Route path="/games/global" element={<GlobalGame />} />
            <Route path="/games/currency" element={<CurrencyGame />} />
            <Route path="/games/flag" element={<FlagGame />} />
            <Route path='/games/flag/fplay' element={<FlagGamePlay/>}/>
            <Route path='/games/currency/cplay' element={<CurrencyGamePlay/>}/>
            <Route path='/games/continent/qplay' element={<ContinentGamePlay/>}/>
            <Route path='games/continent/memory' element={<GlobalGamePlay/>}/>
          </Routes>
        </CountryProvider>
      </section>
    <Footer/>
    </>
  )
}

export default App
