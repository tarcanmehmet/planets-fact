import React from 'react';

const Button = ({index, data, activeState}) => {
    return(
        <button className={`btn-large mercury ${activeState && 'active'}`}>
            <span>{index}</span>
            {data}
        </button>
    )
}

export default Button;