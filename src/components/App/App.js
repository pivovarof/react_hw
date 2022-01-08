import React from 'react';
import './App.css';
import Header from '../Header/Header';
import { NavLink, Routes, Route, Link } from 'react-router-dom'
import Profile from "../HomeWork1/Profile/index";
import ImageFinder from '../HomeWork2/ImageFinder';

function App() {
  return (
    <div className="App">

      <Header />
      <main className='mainContainer'>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/hw2' element={<ImageFinder />} />
          <Route path='/hw3' element={<Profile />} />
        </Routes>
        
      </main>

    </div>


  );
}

export default App;
