import React from 'react';
import useBreakfast from '../../../hooks/useBreakfast';
import BreakfastAll from '../BreakfastAll/BreakfastAll';
import './FoodHeader.css'
const FoodHeader = () => {

    return (
        <div>
            <div className='food-header'>
                <h4 className='f-head'>Breakfast</h4>
                <h4 className='f-head'>Launch</h4>
                <h4 className='f-head'>Dinner</h4>
            </div>

            <div>
                <BreakfastAll></BreakfastAll>
            </div>


        </div>
    );
};

export default FoodHeader;