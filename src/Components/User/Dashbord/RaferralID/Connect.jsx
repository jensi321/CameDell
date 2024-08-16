import React from 'react'

const Connect = () => {
    const User = [
        {
            img: 'assets/Image/user1.png',
            name: "Dinesh kumar",
            referralid: "#485625",
        },
        {
            img: 'assets/Image/user1.png',
            name: "Dinesh kumar",
            referralid: "#485625",
        },
        {
            img: 'assets/Image/user1.png',
            name: "Dinesh kumar",
            referralid: "#485625",
        },
        {
            img: 'assets/Image/user3.png',
            name: "Sanjay kumar",
            referralid: "#485625",
        },
        {
            img: 'assets/Image/user3.png',
            name: "Sanjay kumar",
            referralid: "#485625",
        },
        {
            img: 'assets/Image/user3.png',
            name: "Sanjay kumar",
            referralid: "#485625",
        },
        {
            img: 'assets/Image/user2.png',
            name: "Kavin",
            referralid: "#485625",
        },
        {
            img: 'assets/Image/user2.png',
            name: "Kavin",
            referralid: "#485625",
        },
        {
            img: 'assets/Image/user2.png',
            name: "Kavin",
            referralid: "#485625",
        },
        {
            img: 'assets/Image/user4.png',
            name: "Kaviya Anjali",
            referralid: "#485625",
        },
        {
            img: 'assets/Image/user4.png',
            name: "Kaviya Anjali",
            referralid: "#485625",
        },
        {
            img: 'assets/Image/user5.png',
            name: "Dhanush",
            referralid: "#485625",
        },

    ]
    return (
        <>

            <div className="connect-outer">
                <div className="container">
                    <div className="connect-inner">
                        {
                            User.map((i) => {
                                return (
                                    <div className="item">
                                        <div className="item-inner">
                                            <div className="img-content">
                                                <img src={i.img} alt="" />
                                            </div>
                                            <div className="text-content">
                                                <div className="user-name">
                                                    {i.name}
                                                </div>
                                                <div className="referral-id">
                                                    <span>Referral ID : </span>{i.referralid}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Connect