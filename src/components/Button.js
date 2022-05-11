import React from 'react';

const Button = ({index, data, activeState, planet, changeSelectedInfo}) => {
    const selectInfoChanger = data.split(' ')[0];
    return(
        <button onClick={()=>changeSelectedInfo(selectInfoChanger)} className={`btn-large ${planet.toLowerCase()} ${activeState && 'active'}`}>
            <span>{index}</span>
            {data}
        </button>
    )
}

export default Button;