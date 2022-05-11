import './sass/App.scss';
import {useState} from 'react';
import Navbar from './container/Navbar'
import data from './data/data.json'
import PlanetContainer from './container/PlanetContainer';
function App() {
  const [planetList, setPlanetList] = useState(data);
  const [selectedPlanet, setSelectedPlanet] = useState('Earth');
  const changeSelectedPlanet = (data) => {
    setSelectedPlanet(data);
}
  return (
    <div className="App">
      <header>
        <Navbar planetList = {planetList} changeSelectedPlanet={changeSelectedPlanet}/>
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
