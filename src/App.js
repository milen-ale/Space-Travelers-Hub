import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Rockets from './compnentes/Rocket/Rockets';
import './App.css';
import Header from './compnentes/Header/Header';

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        {/* <Route path = "/" element={<Mission /> } />
<Route path = "/" element={< MyProfile/>} /> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
