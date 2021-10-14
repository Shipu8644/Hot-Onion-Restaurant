import React from 'react';

const Launch = ({ launch }) => {
    const { id, name, price, description, img } = launch;
    return (
        <div className='breakfast'>
            <img style={{ width: '180px' }} src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <h3>${price}</h3>
        </div>
    );
};

export default Launch;