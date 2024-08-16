import React from 'react'
import { Link } from 'react-router-dom';

const ChangePassword = () => {
    return (
        <>
            <div className="change-password-outer">
                <div className="container">
                    <div className="cahnge-password-inner">
                        <div className="change-password row">
                            <div className="col-12 col-sm-6 left">
                                <div className="img-content">
                                    <img src='assets/Image/changepassword.png' alt="" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 right">
                                <div className="inner">

                                    <div className="heading">
                                        <h3>Sign in</h3>
                                    </div>
                                    <form method="post">
                                        <div className="input-group">
                                            <label htmlFor="">Create Password</label>
                                            <input type="email" name='email' id='email' placeholder='E-mail id' />
                                        </div>

                                        <div className="input-group">
                                            <label htmlFor="">Confirm Password</label>
                                            <input type="password" name='password' id='password' placeholder='Password' />

                                        </div>


                                        <Link to='' className='button'>Save</Link>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChangePassword