import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider = () => {
    const items = [
        {
            img: 'assets/Image/offerCode.png'
        },
        {
            img: 'assets/Image/offerCode.png'
        },
        {
            img: 'assets/Image/offerCode.png'
        },
        {
            img: 'assets/Image/offerCode.png'
        },
    ]
    return (
        <>
            <div className="slider-outer">
                <div className="container">
                    <div className="slider-inner">
                        <OwlCarousel className='owl-theme' loop margin={10} items={1} nav={false}>
                            {items.map((i) => {
                                return (
                                    <div className="item">
                                        <div className="item-inner">
                                            <img src={i.img} alt="" />
                                        </div>

                                    </div>
                                )

                            })}

                        </OwlCarousel>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Slider