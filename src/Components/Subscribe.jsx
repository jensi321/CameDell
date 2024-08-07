import React from 'react'
import { Link } from 'react-router-dom'

const Subscribe = () => {
    return (
        <>
            <div className="subscribe-outer">
                <div className="container">
                    <div className="subscribe-inner row">
                        <div className="left col-12 col-lg-7">
                            <div className="text-content">
                                <div className="heading">
                                    <h3>GET THE LATEST & best coupons / offers alerts </h3>
                                </div>

                                <form method='post'>
                                    <input type="email" name="" id="" placeholder='E-mail id'/>
                                    <Link to={''} className='button'>Subscribe</Link>
                                </form>
                            </div>


                        </div>
                        <div className="right col-12 col-lg-5">
                            <div className="img-content">
                                <img src='assets/Image/subscribe.png' alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe