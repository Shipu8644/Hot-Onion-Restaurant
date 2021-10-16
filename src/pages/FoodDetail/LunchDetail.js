import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useLaunch from '../../hooks/useLaunch';


const LunchDetail = () => {
    const { id } = useParams();
    const idInt = parseInt(id);

    const [LunchAll, setLunchAll] = useLaunch();

    const [matchFood, setMatchFood] = useState({});
    let [count, setCount] = useState(0);


    useEffect(() => {
        setMatchFood(LunchAll.find(food => (food.id === idInt)));

    }, [LunchAll, idInt])

    const handleDecrease = () => {
        count < 1 ? setCount(0) :
            setCount(count - 1);

    }
    const handleIncrease = () => {
        setCount(count + 1);
    }
    const history = useHistory();

    const goPlaceorder = () => {
        history.push('/place-order', { matchFood, count })
    }
    return (
        <>
            <div className='detail-style'>
                <div className='detail'>
                    <h1 >{matchFood?.name}</h1>
                    <p>{matchFood?.description}</p>
                    <div className='increDecreStyle'>
                        <h2 style={{ marginRight: '20px', fontSize: '30px', marginTop: '10px' }}>${matchFood?.price}</h2>
                        <div className='icon'>
                            <span><i onClick={handleDecrease} className="fas fa-minus"></i></span>
                            <span style={{
                                fontSize: "25px", marginRight: '20px',
                                marginLeft: '20px'
                            }} >{count}</span>
                            <span><i onClick={handleIncrease} className="fas fa-plus"></i></span>
                        </div>

                    </div>
                    <button onClick={goPlaceorder} className='btn-regular'>
                        <i className="fas fa-shopping-cart" style={{ marginRight: '10px' }}></i>   Add</button>
                </div>

                <div>
                    <img style={{ width: '550px', marginTop: '100px', marginRight: '200px' }} src={matchFood?.img} alt="" />
                </div>

            </div>
            <NavLink to='/lunch-items'>
                <button className='btn-regular' style={{
                    display: 'flex', justifyContent: 'center',
                    width: '20%', marginBottom: "75px", float: "right",
                    marginRight: '300px'
                }}>Lunch Items</button>
            </NavLink>

        </>
    );
};

export default LunchDetail;