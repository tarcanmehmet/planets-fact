import React from 'react';
import {useState} from 'react';
import PlanetBottomArea from '../components/PlanetBottomArea';
import PlanetArea from '../components/PlanetArea';

const PlanetContainer = ({selectedPlanet}) => {
    const [selectedInfo, setSelectedInfo] = useState('Overview');
    const overView = {
        image: selectedPlanet.images.planet,
        info: selectedPlanet.overview.content,
        source: selectedPlanet.overview.source
    };
    const internalStructure = {
        image: selectedPlanet.images.internal,
        info: selectedPlanet.structure.content,
        source: selectedPlanet.structure.source
    };
    const surface = {
        image: selectedPlanet.images.planet,
        imageSurface: selectedPlanet.images.geology,
        info: selectedPlanet.geology.content,
        source: selectedPlanet.geology.source
    };
    const changeSelectedInfo = (data) => {
        setSelectedInfo(data);
    }
    return(
        <div className='planet-box'>
            <PlanetArea planetName={selectedPlanet.name} selectedInfo={selectedInfo} infoType={selectedInfo === 'Overview' ? overView : selectedInfo === 'Internal' ? internalStructure : surface} changeSelectedInfo={changeSelectedInfo} />
            <PlanetBottomArea selectedPlanet={selectedPlanet}></PlanetBottomArea>
        </div>
    )
}

export default PlanetContainer;