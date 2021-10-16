import React from 'react';
import logo from '../../../images/logo2.png'
import { NavLink } from 'react-router-dom';
const Register = () => {
    return (
        <div>
            <div className='login'>
                <div>
                    <img style={{ width: '200px', marginBottom: '40px', marginTop: '20px' }} src={logo} alt="" />
                    <input type="text" name="" id="" placeholder='Name' />
                    <br />
                    <input type="email" name="" id="" placeholder="Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Password" />
                    <br />
                    <input type="password" name="" id="" placeholder='Confirm Password' />
                    <br />
                    <button className='btn-regular' style={{ width: "100%" }}>Sign Up</button>

                    <NavLink to='/login' >
                        <p style={{ marginTop: '2em' }}>Already have Account?</p>
                    </NavLink>

                </div>

            </div>
        </div>
    );
};

export default Register;