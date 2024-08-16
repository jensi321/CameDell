import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const TypeOfCategory = () => {

    const options = {
        loop: true,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 3,
            },
            700: {
                items: 5,
            },
            1200: {
                items: 7,

            }
        },
    };

    const items = [
        {
            img: 'assets/Image/automotive.png',
            name: 'Automotive'
        },
        {
            img: 'assets/Image/clothing.png',
            name: 'Fashion & Clothing'
        },
        {
            img: 'assets/Image/garden.png',
            name: 'Household & Garden'
        },
        {
            img: 'assets/Image/sports.png',
            name: 'Sports & Leisure'
        },
        {
            img: 'assets/Image/drinks.png',
            name: 'Food & Drinks'
        },
        {
            img: 'assets/Image/Games.png',
            name: 'Toys & Games'
        },
        {
            img: 'assets/Image/Games.png',
            name: 'Toys & Games'
        },

    ]
    return (
        <>
            <div className="category-outer">
                <div className="container">
                    <div className="category-inner">
                        <div className="heading">
                            <h3>TYPES OF CATEGORIES</h3>
                        </div>
                        <OwlCarousel className='owl-theme' {...options}>
                            {items.map((i) => {
                                return (
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="img-content">
                                                <img src={i.img} alt={i.name} />
                                            </div>
                                            <div className="text-content">
                                                <p>{i.name}</p>
                                            </div>

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

export default TypeOfCategory