import logo from './assets/rings-icon-removebg-preview.png';
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
        <div className='Title-Font'> Adam and Cassie </div>
      </header>
      <div className="App-body">
        <div className="box m-5">
        A Story about us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum, tellus et venenatis porta, leo tortor semper libero, eget cursus sapien purus quis lorem. Maecenas tincidunt diam id nibh facilisis sodales. Fusce efficitur orci vitae pellentesque scelerisque. Phasellus aliquam pharetra volutpat. In hac habitasse platea dictumst. Cras ut turpis ex. Duis eleifend venenatis magna non vehicula. Etiam porttitor orci sed quam tempor, eget facilisis tortor mollis. Donec auctor, lorem in facilisis porta, mi felis tincidunt ipsum, a ornare purus turpis sit amet nisi. Ut accumsan tincidunt pulvinar. Sed quis dapibus quam, ullamcorper mattis nisi. Fusce sapien velit, mollis nec enim vitae, commodo dapibus nisl. Nunc vel arcu quis sapien dapibus bibendum. Aliquam sit amet cursus risus. Vivamus sit amet dictum nunc, a iaculis ligula. Etiam bibendum luctus turpis pulvinar mattis.      
        </div>
        <div className="box m-3">
          <img src={us} className="Us-Photo" alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
