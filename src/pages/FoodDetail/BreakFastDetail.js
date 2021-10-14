import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useBreakfast from '../../hooks/useBreakfast';
import './BreakFastDetail.css'
const BreakFastDetail = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const [breakfastAll, setBreakfastAll] = useBreakfast();
    const [matchFood, setMatchFood] = useState({});

    useEffect(() => {
        setMatchFood(breakfastAll.find(food => (food.id === idInt)));

    }, [breakfastAll, idInt])

    return (
        <div className='detail-style'>
            <div className='detail'>
                <h1>{matchFood?.name}</h1>
                <p>{matchFood?.description}</p>
                <h4>${matchFood?.price}</h4>
            </div>

            <div>
                <img style={{ width: '550px', marginTop: '100px', marginRight: '200px' }} src={matchFood?.img} alt="" />
            </div>
        </div>
    );
};

export default BreakFastDetail;