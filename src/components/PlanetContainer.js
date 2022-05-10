import React from 'react';
import {useState} from 'react';
import PlanetInfoArea from './PlanetInfoArea';
const PlanetContainer = ({selectedPlanet}) => {
    const [selectedInfo, useSelectedInfo] = useState('Overview');
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
        image: selectedPlanet.images.internal,
        imageSurface: selectedPlanet.images.geology,
        info: selectedPlanet.geology.content,
        source: selectedPlanet.geology.source
    };
    return(
        <div className='planet-box'>
            <PlanetInfoArea planetName={selectedPlanet.name} selectedInfo={selectedInfo} infoType={selectedInfo === 'Overview' ? overView : selectedInfo === 'Structure' ? internalStructure : surface} />
        </div>
    )
}

export default PlanetContainer;