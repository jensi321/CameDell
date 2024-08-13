import React from 'react'
import { Link } from 'react-router-dom'

const BankAccount = () => {
    return (
        <>
            <div className="bank-outer">
                <div className="bank-inner">
                    <form>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="input-group">
                                    <label htmlFor="">
                                        Account Name
                                    </label>
                                    <input type="text" id='account-name' placeholder='Enter Account Name' />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="input-group">
                                    <label htmlFor="">
                                        Account number
                                    </label>
                                    <input type="text" id='account-`number`' placeholder='Enter Account number' />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="input-group">
                                    <label htmlFor="">
                                        Mobile number
                                    </label>
                                    <input type="text" id='mobilenumber' placeholder='Enter mobile number' />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="input-group">
                                    <label htmlFor="">
                                        IFSC code number
                                    </label>
                                    <input type="text" id='ifsccode' placeholder='Enter IFSC Code number' />
                                </div>
                            </div>

                        </div>
                        <div className="or">
                            <span>OR</span>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6"><div className="input-group">
                                <label htmlFor="">
                                    Enter UPI ID Number
                                </label>
                                <input type="text" id='upiid' placeholder='Enter UPI ID number' />
                            </div></div>
                        </div>

                        <div className="input-buton">
                            <Link to='' className='button'>Submit</Link>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default BankAccount