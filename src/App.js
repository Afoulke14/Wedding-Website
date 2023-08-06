import logo from './assets/AC-Logo.png';
import us from './assets/US.jpg';
import './App.css';
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='Header-Font Cursvie-Font'> AJ & Cassie</div>
        <div className='Subheader-Small-Font Aerotis-Font mb-5'> October 19, 2024 </div>
        <div className='d-flex flex-row justify-content-between mb-5 w-65'>
          <div class="p-2">Venue</div>
          <div class="p-2">Travel</div>
          <div class="p-2">Wedding Party</div>
          <div class="p-2">Gallery</div>
          <div class="p-2">Registry</div>
        </div> 
      </header>
      <div className="App-body">
        <div className="box m-3 w-100">
          <img src={us} className="Us-Photo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
