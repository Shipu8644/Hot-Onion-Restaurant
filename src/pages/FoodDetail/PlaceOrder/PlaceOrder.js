import { useEffect } from "react";
import { useLocation } from "react-router";
import { useState } from "react/cjs/react.development";


const PlaceOrder = () => {
    const location = useLocation();
    const food = location.state?.matchFood;
    const itemNumber = location.state?.count;

    const [item, setItem] = useState([]);
    let allitem = [];

    useEffect(() => {
        allitem = [...item, food];
        setItem(allitem);

        console.log(food, itemNumber);
        console.log(allitem, item);
    }, [food])


    // console.log(item);



    return (
        <div>
            <h1>Place Order</h1>
            <h1>{food?.name}</h1>
            <h4>{food?.price}</h4>
        </div>
    );
};

export default PlaceOrder;