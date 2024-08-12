import React from 'react'
import { Link } from 'react-router-dom'

const Subscriptionmodel = () => {
    return (
        <>
            <div className="sub-model-outer">
                <div className="sub-model-inner">
                    <div className="all-sub">
                        <h4>Your Subscription plan</h4><Link>View All</Link>
                    </div>
                    <div className="img-content">
                        <img src='assets/Image/subscriptionmodel.png' alt="" />
                        <div className="heading">
                            <h3>Premium<span> ( PER MONTH )</span></h3>
                        </div>

                    </div><div className="date">
                        <span className="strat-deate">Starting Date : 11/05/2024</span>
                        <span className="end-deate">End Date : 11/06/2024</span>
                    </div>
                    <div className="cupon-info">
                        <span className="avialabel-cupon">Coupon Available : 19</span>
                        <Link to={''} className='renewed'>Renewed now</Link>
                    </div>
                </div>
            </div></>
    )
}

export default Subscriptionmodel