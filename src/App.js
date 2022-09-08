import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Missions from './compnentes/Mission/Missions';
import Rockets from './compnentes/Rocket/Rockets';
import { Provider } from 'react-redux';
import './App.css';
import Header from './compnentes/Header/Header';
import store from './redux/configurStore';


function App() {
  return (
    <Provider store={store}>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Mission" element={<Missions />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
