import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h1 className="header-title">Best Food is waiting For your belly</h1>
            <div className='search'>
                <input className="input" type="text" />
                <button style={{ marginBottom: '40px' }} className='btn-regular'>Search</button>
            </div>



        </div>
    );
};

export default Header;