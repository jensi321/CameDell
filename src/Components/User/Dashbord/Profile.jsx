import React from 'react'
import { MdEditSquare } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <>
            <div className="profile-outer">
                <div className="container">
                    <div className="profile-inner">

                        <div className="row">
                            <div className="col-md-3 col-12 img-content">
                                <div className="edit-icon">
                                    <MdEditSquare />

                                </div>
                                <div className="profile-img">
                                    <img src="assets/Image/profile.png" alt="" />
                                </div>


                                <div className="user-name">
                                    <h2>Jaya</h2>
                                </div>
                            </div>
                            <div className="col-md-9 col-12 text-content">
                                <form method='Post' className='row'>
                                    <div className="col-sm-6 col-12">
                                        <label htmlFor="">User Name</label>
                                        <input type="text" id='username' name='username' placeholder='Enter your name' />
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <label htmlFor="">E-mail ID</label>
                                        <input type="email" id='email' name='email' placeholder='Enter E-mail id' />
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <label htmlFor="">Date of birth</label>

                                        <div className="birth-date"><input type="text" placeholder='DD' id='date' />
                                            <input type="text" id='month' placeholder='MM' />
                                            <input type="text" id='year' placeholder='YYYY' /></div>
                                    </div>
                                    <div className="col-sm-6 col-12 gender">
                                        <label htmlFor="">Gender </label>
                                        <span><input type="radio" id='male' name='gender' value='Male' checked /> Male</span>
                                        <span>
                                            <input type="radio" id='female' name='gender' value='Female' /> Female
                                        </span>

                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <label htmlFor="">Mobile number</label>
                                        <input type="number" id='mnumber' name='mnumber' placeholder='Enter mobile number' />
                                    </div>
                                    <div className="col-sm-6 col-12">
                                        <label htmlFor="">Location</label>
                                        <input type="text" id='mnumber' name='mnumber' placeholder='Enter your Location' />
                                    </div>
                                    <div className="col-12 submit-form">
                                        <Link className='button'>Save</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile