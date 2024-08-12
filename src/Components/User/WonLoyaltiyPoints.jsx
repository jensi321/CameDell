import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { FaShareAlt } from 'react-icons/fa'
import { RiLogoutCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom'

const WonLoyaltiyPoints = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        },2000)

    }, []);
    return (
        <>
            <Modal id="myModal" show={show}>
                <div className="loyaltipoints-outer">
                    <div className="loyaltipoints-inner">
                        <div className="heading">
                            <h3>Congratulations</h3>
                        </div>
                        <div className="reward-img">
                            <img src="assets/Image/reward.png" alt="" />
                        </div>
                        <div className="loyaltiy-points">
                            <div className="coins-img">
                                <img src="assets/Image/Coins.png" alt="" />
                            </div>
                            <span className='coins'>200</span>
                        </div>

                        <p>You Can Get 200 Loyalty Points</p>

                        <div className="buttons-group">
                            <Link to='' className='outline-button'><FaShareAlt /> <span>Share</span>
                            </Link>
                            <Link className='button' onClick={() => setShow(false)}><RiLogoutCircleFill /> <span>Back</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default WonLoyaltiyPoints