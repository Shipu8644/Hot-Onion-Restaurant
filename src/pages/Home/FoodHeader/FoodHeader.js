import React, { useState } from 'react';

import BreakfastAll from '../BreakfastAll/BreakfastAll';
import DinnerAll from '../DinnerAll/DinnerAll';
import LaunchAll from '../LaunchAll/LaunchAll';
import './FoodHeader.css';

const FoodHeader = () => {
    const [isBreakfast, setIsBreakFast] = useState(true);
    const [isLaunch, setIsLaunch] = useState(false);
    const [isDinner, setIsDinner] = useState(false);


    return (
        <div>
            <div className='food-header'>
                <h4 onClick={() => {
                    setIsBreakFast(true);
                    setIsLaunch(false);
                    setIsDinner(false);
                }} style={{ cursor: 'pointer' }} >

                    {!isBreakfast ? "Breakfast" :
                        <span style={{
                            color: 'red',
                            borderBottom: '2px solid red'
                        }} >Breakfast</span>
                    }
                </h4>


                <h4 onClick={() => {
                    setIsBreakFast(false);
                    setIsLaunch(true);
                    setIsDinner(false);
                }}
                    className='f-head' >
                    {!isLaunch ? "Launch" :
                        <span style={{
                            color: 'red',
                            borderBottom: '2px solid red'
                        }} >Launch</span>
                    }
                </h4>

                <h4
                    onClick={() => {
                        setIsBreakFast(false);
                        setIsLaunch(false);
                        setIsDinner(true);
                    }}
                    className='f-head'>
                    {!isDinner ? "Dinner" :
                        <span style={{
                            color: 'red',
                            borderBottom: '2px solid red'
                        }} >Dinner</span>
                    }
                </h4>
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
                <div>
                    <DinnerAll></DinnerAll>
                </div>}


        </div>
    );
};

export default FoodHeader;