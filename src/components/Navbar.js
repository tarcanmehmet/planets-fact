import React from 'react';

const Navbar = ({planetList}) => {

    return(
        <nav className='navbar'>
            <span className='title'>THE PLANETS</span>
            <div className='planet-header-container'>
                {planetList.map((planet)=> {
                    return(
                        <div className='planet-header-item'>{planet.name}</div>
                    );
                })}
            </div>
        </nav>
    )
}

export default Navbar;