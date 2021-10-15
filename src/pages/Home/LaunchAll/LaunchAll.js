import React from 'react';
import useLaunch from '../../../hooks/useLaunch';
import Launch from '../Launch/Launch';


const LaunchAll = () => {
    const [launchAll, setLaunchAll] = useLaunch();

    return (
        <div id='lunch' className='breakfast-container'>
            {
                launchAll.map(launch => <Launch
                    key={launch.id}
                    launch={launch}
                ></Launch>)
            }
        </div>
    );
};

export default LaunchAll;