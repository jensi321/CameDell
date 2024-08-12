import React from 'react'

const Notification = () => {
    const newnotification = [
        {
            img: 'assets/Image/notification1.png',
            sale: '50% OFF',
            noinfo: " in ultraboost all terrain LTD Shoes!!"
        },
        {
            img: 'assets/Image/notification2.png',
            sale: '',
            noinfo: "One step ahead with stylish colection every week"
        },
    ]
    const earlynotification = [
        {
            img: 'assets/Image/notification3.png',
            sale: 'FLASH Sale',
            noinfo: "starting tomorrow Don’t forget to check it out"
        },
        {
            img: 'assets/Image/notification4.png',
            sale: 'Promo code B88FSECC8#',
            noinfo: " Don’t forget to use"
        },
        {
            img: 'assets/Image/notification5.png',
            sale: 'FLASH Sale',
            noinfo: "starting tomorrow Don’t forget to check it out"
        },
        {
            img: 'assets/Image/notification2.png',
            sale: '',
            noinfo: "One step ahead with stylish colection every week"
        },
    ]
    return (
        <>
            <div className="notification-outer">
                <div className="notification-inner">
                    <div className="heading">
                        <h3>Notification</h3>
                    </div>

                    <div className="new-noptification">
                        <p>New <span>2</span></p>

                        <div className="new">
                            {
                                newnotification.map((i) => {
                                    return (
                                        <div className="item">
                                            <div className="item-inner">
                                                <div className="img-content">
                                                    <img src={i.img} alt="" />
                                                </div>
                                                <div className="text-content">
                                                    <span className="slae">{i.sale}</span> {i.noinfo}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className="early-noptification">
                        <p>New <span>4</span></p>

                        <div className="new">
                            {
                                earlynotification.map((i) => {
                                    return (
                                        <div className="item">
                                            <div className="item-inner">
                                                <div className="img-content">
                                                    <img src={i.img} alt="" />
                                                </div>
                                                <div className="text-content">
                                                    <span className="slae">{i.sale}</span> {i.noinfo}
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

export default Notification