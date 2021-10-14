import React, { useState } from 'react';
import useBreakfast from '../../../hooks/useBreakfast';
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
                }} className='f-head' >Breakfast</h4>


                <h4 onClick={() => {
                    setIsBreakFast(false);
                    setIsLaunch(true);
                    setIsDinner(false);
                }}
                    className='f-head' >Launch</h4>

                <h4
                    onClick={() => {
                        setIsBreakFast(false);
                        setIsLaunch(false);
                        setIsDinner(true);
                    }}
                    className='f-head'>Dinner</h4>
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