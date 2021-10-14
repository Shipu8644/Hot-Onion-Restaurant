import React from 'react';

const Dinner = ({ dinner }) => {
    const { id, name, price, description, img } = dinner;
    return (
        <div className='breakfast'>
            <img style={{ width: '180px' }} src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <h3>${price}</h3>
        </div>
    );
};

export default Dinner;