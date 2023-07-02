import './App.css';
import yara from './assets/yara.jpg';

function LadiesAndGentlemen() {
  return (
    <div className="App p-5">
        <header className="App-header">
            <div className='Title-Font'> Honorable Ladies and Gentlemen </div>
            <img src={yara} className="App-logo" alt="logo" />
        </header>
        <div>
            Picture
        </div>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras bibendum, tellus et venenatis porta, leo tortor semper libero, eget cursus sapien purus quis lorem. Maecenas tincidunt diam id nibh facilisis sodales. Fusce efficitur orci vitae pellentesque scelerisque. Phasellus aliquam pharetra volutpat. In hac habitasse platea dictumst. Cras ut turpis ex.
        </div>
    </div>
  );
}

export default LadiesAndGentlemen;