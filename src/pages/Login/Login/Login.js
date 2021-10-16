import React from 'react';
import './Login.css';
import logo from '../../../images/logo2.png'
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const { signInGoogle } = useAuth();


    return (
        <div className='login'>
            <div>
                <img style={{ width: '200px', marginBottom: '40px', marginTop: '20px' }} src={logo} alt="" />
                <input type="email" name="" id="" placeholder="Email" />
                <br />
                <input type="password" name="" id="" placeholder="Password" />

                <br />
                <button onClick={signInGoogle} className='btn-regular' style={{ width: "100%" }}>Sign In With Goolge</button>

                <NavLink to='/registration' >
                    <p style={{ marginTop: '2em' }}>New in Account?</p>
                </NavLink>

            </div>

        </div>
    );
};

export default Login;