import React from 'react'
import { Routes, Route, Link ,NavLink } from 'react-router-dom';
import Header from './component/Header/header.jsx';

import HomePage from './component/Main/HomePage.jsx';
import Profil from './component/Main/profil.jsx';
import Shop from './component/Main/shop.jsx';
import Experience from './component/Main/experience.jsx';
import Rating from './component/Main/rating.jsx';

function App() {
  return (
    <>
      <Header />




      <section>
        <Routes>
          <Route path= "/" element={<HomePage />} />
          <Route path= "/profil" element={<Profil />} />
          <Route path= "/shop" element={<Shop />} />
          <Route path= "/experience" element={<Experience />} />
          <Route path= "/rating" element={<Rating />} />
        </Routes>
      </section>

    </>
  )
}

export default App
