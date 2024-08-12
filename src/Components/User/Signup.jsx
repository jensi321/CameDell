import React from 'react'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Signup = ({ onClose, onOpenMemberLogin }) => {

    return (
        <>
            <div className="signup-outer">
                <div className="signup-inner row">
                    <div className="col-12 col-sm-6 left">
                        <div className="img-content">
                            <img src="assets/Image/Discount.png" alt="" />
                            <img src="assets/Image/signupcuponbg.png" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 right">
                        <button onClick={onClose}><FaX /></button>
                        <div className="inner">

                            <div className="heading">
                                <h3>Sign Up</h3>
                            </div>
                            <form method="post">

                                <div className="name-group">
                                    <input type="text" name='fname' placeholder='First Name' />
                                    <input type="text" name='lname' placeholder='Last Name' />
                                </div>
                                <input type="password" name='password' id='password' placeholder='Enter your password' />
                                <input type="number" name='mnumber' id='mnumber' placeholder='Mobile number' />

                                <div className="otp-group">
                                    <input type="text" name="otp" placeholder='Enter OTP' />
                                    <input type='button' className='button' value='Get OTP' />
                                </div>
                                <div className="privacy-check"><input type="checkbox" /><label htmlFor="">By signing up . I agree to the terms of use and privacy policy of app</label></div>

                                <Link to='' className='button'>Sign Up</Link>

                                <div className="sign-in">Already have an account ? <Link to={''} onClick={() => {

                                    onOpenMemberLogin();
                                }}>Sign in</Link></div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup