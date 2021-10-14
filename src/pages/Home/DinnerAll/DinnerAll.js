import React from 'react';
import useDinner from '../../../hooks/useDinner';

const DinnerAll = () => {
    const [dinnerAll, setDinnerAll] = useDinner();

    return (
        <div>
            <h1>take your dinner</h1>
        </div>
    );
};

export default DinnerAll;