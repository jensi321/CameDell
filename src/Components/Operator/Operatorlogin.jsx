import React from 'react'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Operatorlogin = ({ onClose }) => {
  return (
    <>

      <div className="login-outer operator-login">
        <div className="login-inner row">
          <div className="col-12 col-sm-6 left">
            <div className="img-content">
              <img src="assets/Image/Merchant.png" alt="" />
            </div>
          </div>
          <div className="col-12 col-sm-6 right">
            <button onClick={onClose}><FaX /></button>
            <div className="inner">

              <div className="heading" style={{ textAlign: 'center' }}>
                <h3>Operators log in
                  <br />
                  ( Manager )
                </h3>
              </div>
              <form method="post">

                <input type="email" name='email' id='email' placeholder='E-mail id' />
                <input type="password" name='password' id='password' placeholder='Password' />

                <div className="privacy-check"><input type="checkbox" /><label htmlFor="">By signing up . I agree to the terms of use and privacy policy of app</label></div>

                <Link to='' className='button'>Sign In</Link>

              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Operatorlogin