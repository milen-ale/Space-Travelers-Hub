import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
          {/* <Route path = "/" element={<Mission /> } />
<Route path = "/" element={< MyProfile/>} /> */}
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
