import React from 'react';
import useDinner from '../../../hooks/useDinner';
import Dinner from '../Dinner/Dinner';

const DinnerAll = () => {
    const [dinnerAll, setDinnerAll] = useDinner();


    return (
        <div id='dinner' className='breakfast-container'>
            {dinnerAll.map(dinner => <Dinner
                key={dinner.id}
                dinner={dinner}></Dinner>)}
        </div>
    );
};

export default DinnerAll;