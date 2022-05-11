import React from 'react';

const InfoBox = ({title, value}) => {
    return(
        <div className='info-box'>
            <h4>{title}</h4>
            <h2>{value}</h2>
        </div>
    )
}

export default InfoBox;