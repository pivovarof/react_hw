import React from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css';
import Header from '../Header/Header';
import Profile from "../HomeWork1/Profile/index";
import ImageFinder from '../HomeWork2/ImageFinder';
import WindowRegistration from '../HomeWork3/WindowRegistration/WindowRegistration';



function App() {
  return (
    <div className="App">

      <Header />
      <main className='mainContainer'>        
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/hw2' element={<ImageFinder />} />
          <Route path='/hw3' element={<WindowRegistration />} />
        </Routes>
        
      </main>

    </div>


  );
}

export default App;
