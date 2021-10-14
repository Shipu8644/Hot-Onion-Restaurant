import { useEffect, useState } from "react"

const useBreakfast = () => {
    const [breakfast, setBreakfast] = useState([]);

    useEffect(() => {
        fetch('./breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfast(data));
    }, [])

    return [breakfast, setBreakfast];


}
export default useBreakfast;