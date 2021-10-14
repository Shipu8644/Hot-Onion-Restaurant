import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/banner_error_404.jpg'
const NotFound = () => {
    return (
        <div>
            <img style={{ padding: '20px' }} src={notfound} alt="" />
            <div>
                <Link to='/home'> <button style={{
                    backgroundColor: 'orange', fontSize: '30px',
                    borderRadius: '10px', color: 'white', cursor: 'pointer'
                }}>Home Page</button></Link>
            </div>
        </div>

    );
};

export default NotFound;