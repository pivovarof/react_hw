import React from 'react';
import './App.css';
import Header from './components/Header/Header';

import  Profile  from "./components/Profile/index";


function App() {
  return (
    <div className="App">
      <Header/>      
      <Profile />
    </div>
     
    
  );
}

export default App;
