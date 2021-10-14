import { useEffect, useState } from "react"

const useDinner = () => {
    const [dinner, setDinner] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Shipu8644/Hot-Onion-Restaurant/main/public/dinner.json')
            .then(res => res.json())
            .then(data => setDinner(data));
    }, [])

    return [dinner, setDinner];


}
export default useDinner;