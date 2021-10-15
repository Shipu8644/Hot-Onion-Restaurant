import React from 'react';
import { NavLink } from 'react-router-dom';

const Launch = ({ launch }) => {
    const { id, name, price, description, img } = launch;
    return (
        <NavLink style={{ textDecoration: 'none', color: 'blue' }} to={`/lunch-detail/${id}`}>
            <div className='breakfast'>
                <img style={{ width: '180px' }} src={img} alt="" />
                <h4>{name}</h4>
                <p>{description}</p>
                <h3>${price}</h3>
            </div>
        </NavLink>
    );
};

export default Launch;