import React from 'react'
import { Link } from 'react-router-dom'

const Addressing = () => {
  return (
    <>
      <div className="addressing-outer">
        <div className="container">
          <div className="addressing-inner">
            <div className="heading">
              <h3>Address Details</h3>
            </div>

            <form >

              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="input-group">
                    <label htmlFor="">
                      Name
                    </label>
                    <input type="text" placeholder='Enter Name' />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="input-group">
                    <label htmlFor="">
                      Mobile number
                    </label>
                    <input type="text" placeholder='Enter Mobile Number' />
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-group">
                    <label htmlFor="">
                      Address
                    </label>
                    <textarea name="" id="" placeholder='Enter Address'></textarea>
                  </div>
                </div>

                <div className="col-12 col-sm-6">
                  <div className="input-group">
                    <label htmlFor="">
                      Landmark
                    </label>
                    <input type="text" placeholder='Enter Near Landmark' />
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="input-group">
                    <label htmlFor="">
                      Pin code
                    </label>
                    <input type="text" placeholder='Enter Pin Code' />
                  </div>
                </div>
              </div>

              <div className="check-group">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Once submit the order they did not have order cancelation option </label>
              </div>

              <div className="input-button">
                <Link className="button">Submit</Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addressing