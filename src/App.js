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
<<<<<<< HEAD
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
=======

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        {/* <Route path = "/" element={<Mission /> } />
<Route path = "/" element={< MyProfile/>} /> */}
      </Routes>
    </BrowserRouter>

>>>>>>> 9889968b3892b27917e7b5aa30b9f0b0214ec2a7
  );
}

export default App;
