import { useEffect, useState } from "react"

const useLaunch = () => {
    const [launch, setLaunch] = useState([]);

    useEffect(() => {
        fetch('./dinner.json')
            .then(res => res.json())
            .then(data => setLaunch(data));
    }, [])

    return [launch, setLaunch];


}
export default useLaunch;