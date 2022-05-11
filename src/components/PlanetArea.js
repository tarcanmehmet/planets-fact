import React from 'react';
import Button from './Button';

const PlanetInfoArea = ({planetName, selectedInfo, infoType, changeSelectedInfo}) => {
    return(
        <div className='planet-upper-container'>
            <div className='planet-image-container'>
                <img src={infoType.image} alt={`info-type-${infoType.image}`}></img>
                {selectedInfo === 'Surface' ? <img className='geology' src={infoType.imageSurface} alt='geology'></img> : null}
            </div>
            <div className='planet-info-container'>
                <div className='planet-info-upper'>
                    <h1>{planetName.toUpperCase()}</h1>
                    <p>{infoType.info}</p>
                    <p className='source-link'>Source : <a href={infoType.source} target='_blank' rel='noreferrer'>Wikipedia</a> <img src='/images/icon-source.svg' alt='source'></img></p>
                </div>
                <div className='planet-info-lower'>
                    <Button index='1' data={'Overview'} activeState={selectedInfo === 'Overview' ? true : false} planet={planetName} changeSelectedInfo={changeSelectedInfo}> </Button>
                    <Button index='2' data={'Internal Structure'} activeState={selectedInfo === 'Internal' ? true : false} planet={planetName} changeSelectedInfo={changeSelectedInfo}> </Button>
                    <Button index='3' data={'Surface Geology'} activeState={selectedInfo === 'Surface' ? true : false} planet={planetName} changeSelectedInfo={changeSelectedInfo}> </Button>
                </div>
            </div>
        </div>
    )
}

export default PlanetInfoArea;