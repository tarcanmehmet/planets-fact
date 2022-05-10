import React from 'react';
import Button from './Button';

const PlanetInfoArea = ({planetName, selectedInfo, infoType}) => {
    return(
        <div>
            <img src={infoType.image} alt={`info-type-${infoType.image}`}></img>
            <div>
                <h1>{planetName}</h1>
                <p>{infoType.info}</p>
                Source : <a href={infoType.source} target='_blank'>Wikipedia</a>
            </div>
            <div>
                <Button index='1' data={selectedInfo} activeState={true}> </Button>
            </div>
        </div>
    )
}

export default PlanetInfoArea;