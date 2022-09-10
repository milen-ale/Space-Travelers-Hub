import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './Components/Header/Header';
import Rockets from './Components/rockets/rockets';
import Mission from './Components/Mission/mission';
import Myprofile from './Components/my_profile/my_profile';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/My-Profile" element={<Myprofile />} />

        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
