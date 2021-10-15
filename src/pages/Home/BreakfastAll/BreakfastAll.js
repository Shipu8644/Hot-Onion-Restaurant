import React from 'react';
import useBreakfast from '../../../hooks/useBreakfast';
import BreakFast from '../Breakfast/BreakFast';
import FoodHeader from '../FoodHeader/FoodHeader';
import './BreakfastAll.css'
const BreakfastAll = () => {
    const [breakfastAll, setBreakfastAll] = useBreakfast();

    return (
        <div>
            <div id='breakfast' className='breakfast-container'>
                {breakfastAll.map(breakfast => <BreakFast
                    key={breakfast.id}
                    breakfast={breakfast}></BreakFast>)}
            </div>
        </div>

    );
};

export default BreakfastAll;