import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderHome from './Components/HeaderHome/HeaderHome';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate';
import HomePage from './Pages/HomePage/HomePage';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';

function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='' element={<HomePage />}></Route>
          <Route path='*' element={<Navigate to={''} />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;

//tsrfc: React.FC
//<TenComponent />: React.ReactElement
