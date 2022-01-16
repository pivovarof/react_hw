import React from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css';
import Header from '../Header/Header';
import Profile from "../HomeWork1/Profile/index";
import ImageFinder from '../HomeWork2/ImageFinder';
import WindowRegistration from '../HomeWork3/WindowRegistration/WindowRegistration';
import FormItems from '../HomeWork4/FormItems/FormItems';


function App() {
  return (
    <div className="App">

      <Header />
      <main className='mainContainer'>        
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/hw2' element={<ImageFinder />} />
          <Route path='/hw3' element={<WindowRegistration />} />
          <Route path='/hw4' element={<FormItems />} />
        </Routes>
        
      </main>

    </div>


  );
}

export default App;
