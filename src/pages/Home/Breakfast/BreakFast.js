import React from 'react';
import { NavLink } from 'react-router-dom';
import './Breakfast.css'
const BreakFast = ({ breakfast }) => {
    const { id, name, price, description, img } = breakfast;
    return (
        <NavLink style={{ textDecoration: 'none', color: 'blue' }} to={`/breakfast-detail/${id}`}>
            <div className='breakfast'>
                <img style={{ width: '180px' }} src={img} alt="" />
                <h4>{name}</h4>
                <p>{description}</p>
                <h3>${price}</h3>
            </div>
        </NavLink>

    );
};

export default BreakFast;