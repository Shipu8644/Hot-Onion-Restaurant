import React from 'react';
import useBreakfast from '../../../hooks/useBreakfast';
import BreakFast from '../Breakfast/BreakFast';
import './BreakfastAll.css'
const BreakfastAll = () => {
    const [breakfastAll, setBreakfastAll] = useBreakfast();

    return (
        <div className='breakfast-container'>
            {breakfastAll.map(breakfast => <BreakFast
                key={breakfast.id}
                breakfast={breakfast}></BreakFast>)}
        </div>
    );
};

export default BreakfastAll;