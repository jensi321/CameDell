import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsSetTimeOut = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 2000)

    }, []);
    return (
        <>
            <Modal id="myModal" show={show}>
                <div className="sub-terms-outer">
                    <div className="sub-terms-inner">
                        <div className="heading">
                            <h3>Terms & condition</h3>
                        </div>
                        <p>If you confirm to purchase this coupons and after reduce in your subscription count</p>
                        <Link to='/' className='button' onClick={() => setShow(false)} >OK</Link>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default TermsSetTimeOut