import './sass/App.scss';
import {useState} from 'react';
import Navbar from './components/Navbar'
import data from './data/data.json'
import Button from './components/Button'
import InfoBox from './components/InfoBox';
function App() {
  const [planetList, usePlanetList] = useState(data);
  const [selectedPlanet, useSelectedPlaned] = useState('earth');
  return (
    <div className="App">
      <header>
        <Navbar planetList = {planetList} />
      </header>
    </div>
  );
}

export default App;
