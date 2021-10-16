import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo2.png'
const MainHeader = () => {
    return (
        <div>
            <nav className="navbar navbar-toggler navbar-expand-lg bg-white fixed-top">
                <NavLink to='/home'>
                    <ul className="navbar-nav mr-auto">
                        <img style={{ width: '150px' }} src={logo} alt="" />
                    </ul>
                </NavLink>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to='/home' className="nav-link" >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/login' className="nav-link" >
                            Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/registration' className="nav-link" >
                            Registration
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MainHeader;