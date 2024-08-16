import React from 'react'
import { Link } from 'react-router-dom'

const CashbackStore = () => {

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

    return (
        <>
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
        </>
    )
}

export default CashbackStore