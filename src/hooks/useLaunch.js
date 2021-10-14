import { useEffect, useState } from "react"

const useLaunch = () => {
    const [launch, setLaunch] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Shipu8644/Hot-Onion-Restaurant/main/public/launch.json')
            .then(res => res.json())
            .then(data => setLaunch(data));
    }, [])

    return [launch, setLaunch];


}
export default useLaunch;