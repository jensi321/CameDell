import React from 'react'
import { PiSealCheckFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const WithDrawal = (props) => {

    return (
        <>

            <div className="withdrawal-outer modal show">
                <div className="withdrawal-inner ">
                    <div className="heading">
                        <h3>Enter Withdrawal Amount</h3>
                    </div>
                    <div className="withdrawal-amount">
                        <input type="text" placeholder='Enter Withdrawal Amount' />
                    </div>

                    <p className='verify-account'><span><PiSealCheckFill />
                    </span> Verify Bank Account</p>
                    {/* <p className='warning'>! Not Verify Your Bank Account <Link to='' onClick={() => props.onClick('4')}>Click here</Link></p> */}

                    <div className="check-group">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Your request verify by camdell after then your amount transfer to your account and it take time for verification process</label>
                    </div>

                    <div className="withdrawal-button">
                        <Link to='' className='button'>Submit</Link>
                    </div>
                </div>
            </div>


        </>
    )
}

export default WithDrawal