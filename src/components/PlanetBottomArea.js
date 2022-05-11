import React from 'react';
import InfoBox from './InfoBox';
const PlanetBottomArea = ({selectedPlanet}) => {
    return(
        <div className='planet-bottom-container'>
            <InfoBox title={'ROTATION TIME'} value={selectedPlanet.rotation}></InfoBox>
            <InfoBox title={'REVOLUTION TIME'} value={selectedPlanet.revolution}></InfoBox>
            <InfoBox title={'RADIUS'} value={selectedPlanet.radius}></InfoBox>
            <InfoBox title={'AVERAGE TEMP.'} value={selectedPlanet.temperature}></InfoBox>
        </div>
    )
}

export default PlanetBottomArea;