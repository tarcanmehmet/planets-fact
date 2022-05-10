import './sass/App.scss';
import {useState} from 'react';
import Navbar from './components/Navbar'
import data from './data/data.json'
import Button from './components/Button'
import InfoBox from './components/InfoBox';
import PlanetContainer from './components/PlanetContainer';
function App() {
  const [planetList, usePlanetList] = useState(data);
  const [selectedPlanet, useSelectedPlaned] = useState('Earth');
  return (
    <div className="App">
      <header>
        <Navbar planetList = {planetList} />
      </header>
      <main>
        {planetList.filter((planet) => {
          return planet.name === selectedPlanet
        })
        .map((planet)=> {
          return (
            <PlanetContainer selectedPlanet={planet} />
          )
        })
        }
      </main>
    </div>
  );
}

export default App;
