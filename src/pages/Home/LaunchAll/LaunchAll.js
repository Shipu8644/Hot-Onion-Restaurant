import React from 'react';
import useLaunch from '../../../hooks/useLaunch';


const LaunchAll = () => {
    const [launchAll, setLaunchAll] = useLaunch();

    return (
        <div>
            <h1>This is from Launch</h1>
        </div>
    );
};

export default LaunchAll;