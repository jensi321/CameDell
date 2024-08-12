import React from 'react'
import { FaCircleCheck } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const SubscriptionPlan = () => {
    const items = [
        {
            textcolor: '#9A08A7',
            img: "assets/Image/sub-1.png",
            name: "Basic",
            rupees: "500"
        },
        {
            textcolor: '#094298',
            img: "assets/Image/subscriptionmodel.png",
            name: "Premium",
            rupees: "500"
        },
        {
            textcolor: '#E36118',
            img: "assets/Image/sub-3.png",
            name: "Pro",
            rupees: "500"
        },
    ]
    return (
        <>
            <div className="sub-plan-outer">
                <div className="container">
                    <div className="sub-plan-inner">
                        <div className="heading">
                            <h3>Choose your best plan</h3>
                        </div>
                        <div className="row">
                            {
                                items.map((i) => {
                                    return (
                                        <>
                                            <div className="item col-lg-4 col-12">
                                                <div className="item-inner">
                                                    <div className="h3" style={{ color: `${i.textcolor}` }}>{i.name}</div>
                                                    <div className="img-content">
                                                        <img src={i.img} alt={i.name} />
                                                    </div>
                                                    <div className="rupees">
                                                        <span className='ruppes-icon'>₹ </span>
                                                        <span className='rupess-text'>{i.rupees}</span>
                                                        <span className='monthly-plan'> PER MONTH</span>
                                                    </div>
                                                    <ul className="plan-description">
                                                        <li><span style={{ color: `${i.textcolor}` }}><FaCircleCheck />

                                                        </span>Lorem Ipsum is simply dummy text </li>
                                                        <li><span style={{ color: `${i.textcolor}` }}><FaCircleCheck />

                                                        </span> Lorem Ipsum is simply dummy text </li>
                                                        <li><span style={{ color: `${i.textcolor}` }}><FaCircleCheck />

                                                        </span>Lorem Ipsum is simply dummy text </li>
                                                        <li><span style={{ color: `${i.textcolor}` }}><FaCircleCheck />

                                                        </span>Lorem Ipsum is simply dummy text </li>
                                                    </ul>

                                                    <Link to='' className="button" style={{ backgroundColor: `${i.textcolor}` }}>Subscribe</Link>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubscriptionPlan