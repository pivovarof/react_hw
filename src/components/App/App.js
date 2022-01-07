import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { NavLink, Routes, Route, Link } from 'react-router-dom'
import Profile from "../HomeWork1/Profile/index";
import HomeWork2 from '../HomeWork2/HomeWork2';

function App() {
  return (
    <div className="App">

      <Header />
      <main className='mainContainer'>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/hw2' element={<HomeWork2 />} />
          <Route path='/hw3' element={<Profile />} />
        </Routes>
        
      </main>

    </div>


  );
}

export default App;
