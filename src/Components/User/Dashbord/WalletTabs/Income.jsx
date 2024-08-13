import { Masonry } from '@mui/lab'
import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { LuAlertCircle } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const Income = () => {
    return (
        <>
            <div className="income-outer">
                <div className="container">
                    <div className="income-inner">
                        <Masonry columns={3} spacing={2}>
                            <div className="item compny-profile">
                                <div className="item-inner">
                                    <div className="top">
                                        <img src="assets/Image/justdial.png" alt="" />
                                        <div className="rating"><span className='star-icon'><FaStar /></span>4.5</div>
                                        <p>( Get amount : 150 cash back )</p>
                                        <div className="alert-icon">
                                            <LuAlertCircle />
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="img-content">
                                            <img src="assets/Image/car.png" alt="" />
                                        </div>
                                        <div className="text-content">
                                            <h5>Only Car Service</h5>
                                            <p className='getoff'><span>( Above Rs 5,000)</span> Get 50% Off</p>
                                            <p className='offer'>Offer till 15th Feb <Link className='button'>View</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item user-profile">2</div>
                            <div className="item compny-profile">3</div>
                            <div className="item compny-profile">4</div>
                            <div className="item user-profile">5</div>
                            <div className="item user-profile">6</div>
                            <div className="item compny-profile">4</div>
                            <div className="item user-profile">5</div>
                            <div className="item user-profile">6</div>
                            <div className="item user-profile">6</div>
                            <div className="item compny-profile">4</div>
                        </Masonry>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Income