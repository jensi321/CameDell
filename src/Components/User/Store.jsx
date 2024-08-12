import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

const Store = () => {

    const settings = {
        slidesToShow: 5,
        rows: 4,
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint :420,
                settings :{
                    slidesToShow : 1
                }
            }
        ]
    };

    const compny = [
        {
            img: 'assets/Image/amzon.png'
        },
        {
            img: 'assets/Image/louts-logo.png'
        },
        {
            img: 'assets/Image/realme.png'
        },
        {
            img: 'assets/Image/realme.png'
        },
        {
            img: 'assets/Image/flipkart.png'
        },
        {
            img: 'assets/Image/Naykaa.png'
        },
        {
            img: 'assets/Image/nike.png'
        },
        {
            img: 'assets/Image/nike.png'
        },
        {
            img: 'assets/Image/acer.png'
        },

        {
            img: 'assets/Image/udemy.png'
        },
        {
            img: 'assets/Image/boat.png'
        },
        {
            img: 'assets/Image/boat.png'
        },
        {
            img: 'assets/Image/acer.png'
        },

        {
            img: 'assets/Image/udemy.png'
        },
        {
            img: 'assets/Image/boat.png'
        },
        {
            img: 'assets/Image/boat.png'
        },
        {
            img: 'assets/Image/acer.png'
        },

        {
            img: 'assets/Image/udemy.png'
        },
        {
            img: 'assets/Image/boat.png'
        },
        {
            img: 'assets/Image/boat.png'
        },
    ]
    return (
        <>
            <div className="store-outer">
                <div className="container">
                    <div className="store-inner">

                        <div className="heading">
                            <h3>Popular STORE</h3>
                        </div>

                        <div className="row">
                            <div className="left col-12 col-lg-3">
                                <div className="inner">
                                    <div className="text-inner">


                                        <div className="heading">
                                            <h3>
                                                Popular STORE
                                            </h3>
                                        </div>
                                        <div className="img-content">
                                            <img src="assets/Image/Naykaa.png" alt="" />
                                        </div>
                                        <div className="text-content">
                                            <p>Up to 760% off + Extra 5% offer on EMI</p>
                                            <Link to='' className='button'>vouchers</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="right col-12 col-lg-9">
                                <div className="inner">
                                    <Slider {...settings}>
                                        {
                                            compny.map((i) => {
                                                return (
                                                    <div className="item">
                                                        <div className="item-inner">
                                                            <div className="img-content">
                                                                <img src={i.img} alt="" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            })
                                        }

                                    </Slider>
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Store