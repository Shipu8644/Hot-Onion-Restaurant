import React from 'react';
import './Breakfast.css'
const BreakFast = ({ breakfast }) => {
    const { id, name, price, description, img } = breakfast;
    return (
        <div className='breakfast'>
            <img style={{ width: '150px' }} src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <h3>${price}</h3>
        </div>
    );
};

export default BreakFast;