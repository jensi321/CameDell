import React from 'react'
import { Link } from 'react-router-dom'

const UsertermsCondition = () => {
  return (
    <>
      <div className="user-terms-outer">
        <div className="container">
            <div className="sub-terms-outer">
              <div className="sub-terms-inner">
                <div className="heading">
                  <h3>Terms & condition</h3>
                </div>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                <Link to='/' className='button'>OK</Link>
              </div>
            </div>
        </div>
      </div>


    </>
  )
}

export default UsertermsCondition