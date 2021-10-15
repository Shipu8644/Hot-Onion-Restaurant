import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

import useBreakfast from '../../hooks/useBreakfast';
import './BreakFastDetail.css';





const BreakFastDetail = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const [breakfastAll, setBreakfastAll] = useBreakfast();
    const [matchFood, setMatchFood] = useState({});
    let [count, setCount] = useState(0);

    useEffect(() => {
        setMatchFood(breakfastAll.find(food => (food.id === idInt)));

    }, [breakfastAll, idInt])

    const handleIncrease = () => {
        count < 1 ? setCount(0) :
            setCount(count - 1);

    }
    const handleDecrease = () => {
        setCount(count + 1);
    }
    const history = useHistory();

    const goPlaceorder = () => {
        history.push('/place-order', { matchFood, count })
    }


    return (

        <div className='detail-style'>
            <div className='detail'>
                <h1 >{matchFood?.name}</h1>
                <p>{matchFood?.description}</p>
                <div className='increDecreStyle'>
                    <h2 style={{ marginRight: '20px', fontSize: '30px' }}>${matchFood?.price}</h2>
                    <div className='icon'>
                        <span><i onClick={handleIncrease} className="fas fa-minus"></i></span>
                        <span style={{
                            fontSize: "25px", marginRight: '20px',
                            marginLeft: '20px'
                        }} >{count}</span>
                        <span><i onClick={handleDecrease} className="fas fa-plus"></i></span>
                    </div>

                </div>
                <button onClick={goPlaceorder} className='btn-regular'>Add</button>
            </div>

            <div>
                <img style={{ width: '550px', marginTop: '100px', marginRight: '200px' }} src={matchFood?.img} alt="" />
            </div>

        </div>


    );
};

export default BreakFastDetail;