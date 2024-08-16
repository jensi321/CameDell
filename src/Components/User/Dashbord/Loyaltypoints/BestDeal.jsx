import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { FiPackage } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Addressing from './Addressing';

const BestDeal = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showAddressingComponent, setShowAddressingComponent] = useState(false);

    const handleClose = () => {
        setShowModal(false);
        setSelectedItem(null);
    };
    const handleShow = (item) => {
        setShowModal(true);
        setSelectedItem(item);
    };

    const handleAddressingComponent = () => {
        setShowAddressingComponent(true);
    };


    const items = [
        {
            img: 'assets/Image/product-1.png',
            name: 'Air Pods Max 9S',
            coins: '250'
        },
        {
            img: 'assets/Image/product-2.png',
            name: 'Apple Watch ',
            coins: '500'
        },
        {
            img: 'assets/Image/product-1.png',
            name: 'Air Pods Max 9S',
            coins: '250'
        },
        {
            img: 'assets/Image/product-2.png',
            name: 'Apple Watch ',
            coins: '500'
        },
        {
            img: 'assets/Image/product-2.png',
            name: 'Apple Watch ',
            coins: '500'
        },
        {
            img: 'assets/Image/product-3.png',
            name: 'Hand Bag',
            coins: '550'
        },
        {
            img: 'assets/Image/product-4.png',
            name: 'HP Laptop',
            coins: '1,550'
        },
        {
            img: 'assets/Image/product-3.png',
            name: 'Hand Bag',
            coins: '550'
        },
        {
            img: 'assets/Image/product-4.png',
            name: 'HP Laptop',
            coins: '1,550'
        },
        {
            img: 'assets/Image/product-4.png',
            name: 'HP Laptop',
            coins: '1,550'
        },
    ]

    return (
        <>

            {
                showAddressingComponent ? (
                    <Addressing />
                ) : (<div className="loyalty-points-outer">
                    <div className="container">
                        <div className="loyalty-points-inner">
                            <div className="top">
                                <div className="current-coins">
                                    <div className="text-content"><h3>Loyalty point</h3>
                                        <p>Current Points</p>
                                        <div className="coins-ruppes">
                                            <div className="coin-img">
                                                <img src="assets/Image/Coins.png" alt="" />
                                            </div>
                                            <div className="coins-point">
                                                100
                                            </div>
                                        </div>

                                    </div>
                                    <div className="img-content">
                                        <img src="assets/Image/loyaltypoint.png" alt="" />
                                    </div>

                                </div>

                                <div className="oreder-now">
                                    <Link to='' onClick={props.setShowOrderList}> <span className='icon'><FiPackage />
                                    </span> Your Order</Link>

                                </div>
                            </div>
                            <div className="bottom">
                                <div className="heading">
                                    <h3>Best Deals</h3>
                                </div>
                                <div className="bestdeal-outer">
                                    {
                                        items.map((i) => {
                                            return (<>

                                                <div className="item">
                                                    <div className="item-inner">
                                                        <div className="img-content">
                                                            <img src={i.img} alt="" />
                                                        </div>
                                                        <div className="text-content">
                                                            <h4>{i.name}</h4>

                                                            <Link to='' onClick={() => handleShow(i)}>Use <img src='assets/Image/Coins.png' alt='' /> {i.coins}</Link>


                                                        </div>
                                                    </div>
                                                </div>
                                                {selectedItem && (
                                                    <Modal show={showModal} onHide={handleClose}>
                                                        <div className="loyalty-point-modal">
                                                            <div className="loyalty-point-modal-inner">
                                                                <div className="img-text">
                                                                    <div className="img-content">
                                                                        <img src={selectedItem.img} alt="" />
                                                                    </div>
                                                                    <div className="text-content">
                                                                        <p>{selectedItem.name}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="description">
                                                                    <h5>Description</h5>
                                                                    <p>This is part of a redesign for a bank account opening solution. This project had some really interesting constraints</p>
                                                                </div>
                                                                <div className="modal-button">
                                                                    <Link to='' onClick={handleAddressingComponent} className='button'>Use <img src='assets/Image/Coins.png' alt='' /> {selectedItem.coins}</Link>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </Modal>
                                                )}
                                            </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </>
    )
}

export default BestDeal