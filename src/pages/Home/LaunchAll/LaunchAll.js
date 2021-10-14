import React from 'react';
import useLaunch from '../../../hooks/useLaunch';


const LaunchAll = () => {
    const [launchAll, setLaunchAll] = useLaunch();
    console.log(launchAll);
    return (
        <div>

        </div>
    );
};

export default LaunchAll;