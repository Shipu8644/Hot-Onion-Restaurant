import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import './Breakfast.css';
const BreakFast = ({ breakfast }) => {
    const { id, name, price, description, img } = breakfast;


    return (

        <NavLink style={{ textDecoration: 'none', color: 'blue' }} to={`/breakfast-detail/${id}`}>
            <div className='breakfast'>
                <img style={{ width: '180px' }} src={img} alt="" />
                <div style={{ marginTop: '20px' }}>
                    <h6>{name}</h6>
                    <p><small>{description}</small></p>
                    <h3>${price}</h3>
                </div>

            </div>
        </NavLink>

    );
};

export default BreakFast;

