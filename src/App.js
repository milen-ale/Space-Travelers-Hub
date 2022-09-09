import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Rockets from './compnentes/Rocket/Rockets';
import Header from './compnentes/Header/Header';
import store from './redux/configurStore';
import MyProfile from './compnentes/MyProfile/MyProfile';

function App() {
  return (
    <Provider store={store}>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
