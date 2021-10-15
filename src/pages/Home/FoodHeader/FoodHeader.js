import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


import BreakfastAll from '../BreakfastAll/BreakfastAll';
import DinnerAll from '../DinnerAll/DinnerAll';
import LaunchAll from '../LaunchAll/LaunchAll';
import './FoodHeader.css';

const FoodHeader = () => {

    const [isBreakfast, setIsBreakFast] = useState(true);
    const [isLaunch, setIsLaunch] = useState(false);
    const [isDinner, setIsDinner] = useState(false);


    const ActiveStyle = {
        color: 'red',
        borderBottom: '2px solid red'
    }

    return (
        <div>
            <div className='food-header'>
                <NavLink to='/breakfast-items' onClick={() => {
                    setIsBreakFast(true);
                    setIsLaunch(false);
                    setIsDinner(false);
                }} style={{ cursor: 'pointer' }} >

                    {!isBreakfast ? "Breakfast" :
                        <span style={ActiveStyle} >Breakfast</span>
                    }
                </NavLink>

                <NavLink to='/lunch-items' onClick={() => {
                    setIsBreakFast(false);
                    setIsLaunch(true);
                    setIsDinner(false);
                }}
                    className='f-head' >
                    {!isLaunch ? "Lunch" :
                        <span style={ActiveStyle} >Lunch</span>
                    }
                </NavLink>

                <NavLink to='/dinner-items'
                    onClick={() => {
                        setIsBreakFast(false);
                        setIsLaunch(false);
                        setIsDinner(true);
                    }}
                    className='f-head'>
                    {!isDinner ? "Dinner" :
                        <span style={ActiveStyle} >Dinner</span>
                    }
                </NavLink>
            </div>

            {isBreakfast &&
                <div>
                    <BreakfastAll></BreakfastAll>
                </div>}

            {isLaunch &&
                <div>
                    <LaunchAll></LaunchAll>
                </div>}

            {isDinner &&
                <div id="dinner">
                    <DinnerAll></DinnerAll>
                </div>}


        </div>
    );
};

export default FoodHeader;