import React from 'react'
import { LuAlertCircle } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const Income = () => {

    const User = [
        {
            img: 'assets/Image/user1.png',
            name: "Dinesh kumar",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user1.png',
            name: "Dinesh kumar",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user1.png',
            name: "Dinesh kumar",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user3.png',
            name: "Sanjay kumar",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user3.png',
            name: "Sanjay kumar",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user3.png',
            name: "Sanjay kumar",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user2.png',
            name: "Kavin",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user2.png',
            name: "Kavin",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user2.png',
            name: "Kavin",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user4.png',
            name: "Kaviya Anjali",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user4.png',
            name: "Kaviya Anjali",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user4.png',
            name: "Kaviya Anjali",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user5.png',
            name: "Dhanush",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user5.png',
            name: "Dhanush",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
        {
            img: 'assets/Image/user5.png',
            name: "Dhanush",
            date: '05/06/2024',
            referralid: "#485625",
            coins: '500'
        },
    ]
    return (
        <>
            <div className="income-outer">
                <div className="container">
                    <div className="income-inner row">
                        {
                            User.map((i) => {
                                return (
                                    <>
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="item user-profile">
                                                <div className="item-inner">
                                                    <div className="img-content">
                                                        <img src={i.img} alt="" />
                                                    </div>
                                                    <div className="text-content">
                                                        <div className="user-name">
                                                            <h4>{i.name}</h4>
                                                            <Link to='' className="alert-icon">
                                                                <LuAlertCircle />
                                                            </Link>
                                                        </div>

                                                        <div className="id-date">
                                                            <div className="rafferal-id">Referral ID : {i.referralid}</div>
                                                            <div className='date'>Date : {i.date}</div>
                                                        </div>
                                                        <div className="plan-commision">Plan commission : RS {i.coins}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Income