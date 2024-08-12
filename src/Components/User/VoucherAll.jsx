import React from 'react'
import { Link } from 'react-router-dom'

const VoucherAll = () => {
    const items = [
        {
            img: "assets/Image/dominoz.png",
            name: "MC Dominos",
            rs: '5,000 - 6,000 ',
            cashback: 'Get Rs 100 Cashback',
        },
        {
            img: "assets/Image/swiggy.png",
            name: "Swiggy",
            rs: ' 5,000 - 6,000',
            cashback: 'Get Rs 500 Cashback',
        },
        {
            img: "assets/Image/dominoz.png",
            name: "MC Dominos",
            rs: '5,000 - 6,000 ',
            cashback: 'Get Rs 100 Cashback',
        },
        {
            img: "assets/Image/swiggy.png",
            name: "Swiggy",
            rs: ' 5,000 - 6,000',
            cashback: 'Get Rs 500 Cashback',
        },
        {
            img: "assets/Image/dominoz.png",
            name: "MC Dominos",
            rs: '5,000 - 6,000 ',
            cashback: 'Get Rs 100 Cashback',
        },
        {
            img: "assets/Image/swiggy.png",
            name: "Swiggy",
            rs: ' 5,000 - 6,000',
            cashback: 'Get Rs 500 Cashback',
        },
        {
            img: "assets/Image/dominoz.png",
            name: "MC Dominos",
            rs: '5,000 - 6,000 ',
            cashback: 'Get Rs 100 Cashback',
        },
        {
            img: "assets/Image/swiggy.png",
            name: "Swiggy",
            rs: ' 5,000 - 6,000',
            cashback: 'Get Rs 500 Cashback',
        },
        {
            img: "assets/Image/dominoz.png",
            name: "MC Dominos",
            rs: '5,000 - 6,000 ',
            cashback: 'Get Rs 100 Cashback',
        },
        {
            img: "assets/Image/swiggy.png",
            name: "Swiggy",
            rs: ' 5,000 - 6,000',
            cashback: 'Get Rs 500 Cashback',
        },
        {
            img: "assets/Image/dominoz.png",
            name: "MC Dominos",
            rs: '5,000 - 6,000 ',
            cashback: 'Get Rs 100 Cashback',
        },
        {
            img: "assets/Image/swiggy.png",
            name: "Swiggy",
            rs: ' 5,000 - 6,000',
            cashback: 'Get Rs 500 Cashback',
        },
        {
            img: "assets/Image/dominoz.png",
            name: "MC Dominos",
            rs: '5,000 - 6,000 ',
            cashback: 'Get Rs 100 Cashback',
        },
        {
            img: "assets/Image/swiggy.png",
            name: "Swiggy",
            rs: ' 5,000 - 6,000',
            cashback: 'Get Rs 500 Cashback',
        },
        {
            img: "assets/Image/dominoz.png",
            name: "MC Dominos",
            rs: '5,000 - 6,000 ',
            cashback: 'Get Rs 100 Cashback',
        },
        {
            img: "assets/Image/swiggy.png",
            name: "Swiggy",
            rs: ' 5,000 - 6,000',
            cashback: 'Get Rs 500 Cashback',
        },
    ]
    return (
        <>
            <div className="voucherpage-outer">
                <div className="container">
                    <div className="vaoucherpage-inner">
                        <div className="row">
                            {
                                items.map((i) => {
                                    return (
                                        <div className="item col-md-4 col-xl-3 col-12 col-sm-6">
                                            <div className="item-inner" >

                                                <div className="text-content">
                                                    <h3>{i.name}</h3>
                                                    <span >Rs ( {i.rs} )</span>
                                                    <p className='cashback' >{i.cashback}</p>
                                                    <p className="link-button">
                                                        <Link to={''} className='button'>Get Now</Link>

                                                    </p>
                                                </div>
                                                <div className="img-content">
                                                    <img src={i.img} alt={i.name} />
                                                </div>


                                            </div>

                                        </div>
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

export default VoucherAll