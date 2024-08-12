import React from 'react'
import { Link } from 'react-router-dom'

const SubTermsCondition = () => {
    return (
        <>
            <div className="sub-terms-outer">
                <div className="sub-terms-inner">
                    <div className="heading">
                        <h3>Terms & condition</h3>
                    </div>
                    <p>If you confirm to purchase this coupons and after reduce in your subscription count</p>
                    <Link to='/' className='button'>OK</Link>
                </div>
            </div>
        </>
    )
}

export default SubTermsCondition