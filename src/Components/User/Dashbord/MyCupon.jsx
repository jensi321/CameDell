import React from 'react'
import { Link } from 'react-router-dom'

const MyCupon = () => {
    const cashback = [
        {
            img: 'assets/Image/amzon.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/realme.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/nike.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/acer-logo.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/acer-logo.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/drema.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
        {
            img: 'assets/Image/udemy.png',
            sale: 'Up to 760% off + Extra 5% offer on EMI',

        },
    ]

    const cuponoffer = [
        {
            img: 'assets/Image/amzon.png',
            sale: 'up to 30% off',
            btn: 'Earn up to 30% rewards'
        },
        {
            img: 'assets/Image/Puma.png',
            sale: 'up to 30% off',
            btn: 'Earn up to 30% rewards'
        },
        {
            img: 'assets/Image/flipkart.png',
            sale: 'up to 50% off',
            btn: 'Earn up to 50% rewards'
        },
        {
            img: 'assets/Image/adidas.png',
            sale: 'END : 04:50:11',
            btn: 'Earn up to 30% rewards'
        },
        {
            img: 'assets/Image/Naykaa.png',
            sale: 'END : 04:50:11',
            btn: 'Earn up to 40% rewards'
        },
        {
            img: 'assets/Image/boat.png',
            sale: 'up to 30% off',
            btn: 'Earn up to 30% rewards'
        },
        {
            img: 'assets/Image/flipkart.png',
            sale: 'up to 50% off',
            btn: 'Earn up to 50% rewards'
        },
        {
            img: 'assets/Image/adidas.png',
            sale: 'END : 04:50:11',
            btn: 'Earn up to 30% rewards'
        },
    ]
    const voucher = [
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
            <div className="mycupon-outer">
                <div className="container">
                    <div className="mycupon-inner">
                        <div className="cashback-store">
                            <div className="heading">
                                <h3>cash back stores</h3>
                            </div>
                            <div className="row cashback">
                                {
                                    cashback.map((i) => {
                                        return (
                                            <div className="item">
                                                <div className="item-inner">
                                                    <div className="img-content">
                                                        <img src={i.img} alt='' />
                                                    </div>

                                                    <div className="text-content">
                                                        <p>{i.sale}</p>
                                                        <div className="cupon-button">
                                                            <Link to='' className='cupon-code-button'><span className='cupon'>get Coupons</span><span className='code'>2511545614</span></Link>

                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="cupon-offer-outer">
                            <div className="heading">
                                <h3>COUPONS & OFFERS</h3>
                            </div>

                            <div className="cupon-offer row">
                                {cuponoffer.map((i) => {
                                    return (<>

                                        <div className="item">
                                            <div className="item-inner">

                                                <span className="offer-sale">
                                                    {i.sale}
                                                </span>
                                                <div className="img-content">
                                                    <img src={i.img} alt='' />
                                                </div>
                                                <div className="text-content">
                                                    <Link to='' className='button'>{i.btn}</Link>
                                                    <Link to='' className='rewards'>Rewards Rates & terms</Link>

                                                </div>

                                            </div>

                                        </div>
                                    </>
                                    )

                                })}
                            </div>
                        </div>

                        <div className="vouchercupon-outer">
                            <div className="heading">
                                <h3>Vouchers coupons</h3>
                            </div>
                            <div className="row">


                                {
                                    voucher.map((i) => {
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
            </div>
        </>
    )
}

export default MyCupon