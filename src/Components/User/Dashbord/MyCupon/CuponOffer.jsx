import React from 'react'
import { Link } from 'react-router-dom'

const CuponOffer = () => {

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
    return (
        <>
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
        </>
    )
}

export default CuponOffer