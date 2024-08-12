import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaRegEyeSlash } from 'react-icons/fa6';


const ScanerModel = () => {
    return (
        <>
            <div className="scaner-outer">
                <div className="scaner-inner">
                    <OwlCarousel className='owl-theme' margin={10} items={1} nav={false} dots>
                        <div className="item">
                            <div className="item-inner">
                                <div className="logo-content">
                                    <img src='assets/Image/logo.png' alt="" />
                                </div>
                                <div className="img-content">
                                    <img src='assets/Image/QR-Code.png' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-inner">
                                <div className="logo-content">
                                    <img src='assets/Image/logo.png' alt="" />
                                </div>

                                <div className="code">
                                    <span><FaRegEyeSlash />
                                    </span>
                                    <p>4000  1234  5647  9102</p>
                                </div>
                                <div className="date-id">
                                    <div className="expiration">
                                        <span>Expiration</span>
                                        <h4>04/07/2024</h4>
                                    </div>
                                    <div className="referelid">
                                        <span>Referral ID</span>
                                        <h4>#12A45A</h4>
                                    </div>

                                </div>
                                <div className="custoumer-name">
                                    <h3>Jaya</h3>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}

export default ScanerModel