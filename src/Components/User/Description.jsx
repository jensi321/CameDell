import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SubTermsCondition from './SubTermsCondition'
import { Modal } from 'react-bootstrap'
import GetCuponCode from './GetCuponCode'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import WonLoyaltiyPoints from './WonLoyaltiyPoints'
const Description = () => {
    const items = [
        {
            heading: 'Categories',
            info: 'Automotive'
        },
        {
            heading: 'Sub - categories ',
            info: 'Car washing'
        },
        {
            heading: 'No of year trading',
            info: '22 years'
        },
        {
            heading: 'Business type',
            info: 'Car service'
        },
        {
            heading: 'Business Relationship',
            info: 'E-commerce'
        },
        {
            heading: 'Restrictions',
            info: '32456GIMS444'
        },
        {
            heading: 'Coupon Type',
            info: 'Discount'
        },
        {
            heading: 'Coupons Used on',
            info: 'Online'
        },
        {
            heading: 'Available coupons',
            info: '150'
        },
        {
            heading: 'started  Deals',
            info: ' Feb 15'
        },
        {
            heading: 'Ended  Deals',
            info: 'Feb 30'
        },
        {
            heading: 'Used coupons',
            info: '150'
        },
        {
            heading: 'Get Discount',
            info: '50 % Off'
        },
        {
            heading: 'Min-Purchace',
            info: '1,000'
        },
        {
            heading: 'Max-Purchase',
            info: '30,000'
        },
        {
            heading: 'Website link',
            info: ' https://www.w3.org/Provider/Style/dummy.htmlAutomotive'
        },

    ]

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleClose = () => setShowModal(false);

    const handleSubterms = () => {
        setModalContent(<SubTermsCondition onClose={handleClose} />);
        setShowModal(true);
    };
    const GetCoupnCode = () => {
        setModalContent(<GetCuponCode onClose={handleClose} />);
        setShowModal(true);
    };
    return (
        <>
        <WonLoyaltiyPoints/>
            <div className="cupon-description-outer">
                <div className="container">
                    <div className="cupon-desscription-inner">
                        <div className="heading">
                            <h3>Car service & Washing</h3>
                            <Link className='button'>Online</Link>
                        </div>

                        <div className="img-cupon-content row">
                            <div className="col-md-8 col-12  img-content">
                                <div className="row">
                                    <Carousel   infiniteLoop>

                                        <div>
                                            <img src="assets/Image/carservices.png" alt="" />
                                        </div>
                                        <div>
                                            <img src="assets/Image/carservices.png" alt="" />
                                        </div>
                                    </Carousel>

                                </div>
                            </div>
                            <div className="col-md-4 col-12 ">
                                <div className="item">
                                    <div className="item-inner">
                                        <span className="offer-sale">up to 30% off</span>
                                        <div className="img-content">
                                            <img src="assets/Image/white.png" alt="" />
                                        </div>
                                        <div className="text-content">
                                            <Link className="button" to="/">Earn up to 30% Offers</Link>
                                            <Link className="rewards" to="" onClick={handleSubterms}>Rewards Rates &amp; terms</Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="code-button">
                                    <Link to={''} className='code-button' onClick={GetCoupnCode}>Get Code</Link>

                                </div>
                            </div>
                        </div>

                        <div className="note">
                            <p><b>Note</b> : When you purchase this coupon you can get some loyalty point </p>
                        </div>

                        <ul className="services-info row">
                            {
                                items.map((i) => {
                                    return (
                                        <li className="col-12 col-md-4">
                                            <p><b>{i.heading}</b> : <span>{i.info}</span></p>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className="description">
                            <div className="heading">
                                <h4>Description</h4>
                            </div>
                            <p>A car wash, or auto wash, is a facility used to clean the exterior, and in some cases the interior, of cars. Car washes can be self-service, full-service (with attendants who wash the vehicle), or fully automated (possibly connected to a filling station)</p>
                        </div>

                        <div className="terms-condition row">
                            <div className="col-12 col-md-6 item">
                                <div className="heading">
                                    <h4>Terms & conditions </h4>
                                </div>
                                <ul>
                                    <li>How to propel your business growth with discount coupons</li>
                                    <li>What limits to use and how to build an effective coupon journey</li>
                                    <li>Learn the best practices of all successful coupon campaigns</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 item">
                                <div className="heading">
                                    <h4>How to use</h4>
                                </div>
                                <p>If you receive an online store coupon, you can enter in the coupon code at check out on the merchants online store. When you redeem a coupon, your card statement may initially show a pending charge for the full transaction amount</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleClose}>
                {modalContent}
            </Modal>
        </>
    )
}

export default Description