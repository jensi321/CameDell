import React from 'react'
import { DropdownButton, DropdownItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SubscriptionHistory = () => {
  const items = [
    {
      name: 'Basic ',
      img: 'assets/Image/sub-1.png',
      startdate: '22/02/2023',
      enddate: '22/02/2023',
      cuponlimit: '20',
      wallet: '100',
      rupees: '1,000'
    },
    {
      name: 'Premium ',
      img: 'assets/Image/subscriptionmodel.png',
      startdate: '22/02/2023',
      enddate: '22/02/2023',
      cuponlimit: '20',
      wallet: '100',
      rupees: '1,000'
    },
    {
      name: 'Premium ',
      img: 'assets/Image/subscriptionmodel.png',
      startdate: '22/02/2023',
      enddate: '22/02/2023',
      cuponlimit: '20',
      wallet: '100',
      rupees: '1,000'
    },
    {
      name: 'Basic ',
      img: 'assets/Image/sub-1.png',
      startdate: '22/02/2023',
      enddate: '22/02/2023',
      cuponlimit: '20',
      wallet: '100',
      rupees: '1,000'
    },
    {
      name: 'Premium ',
      img: 'assets/Image/subscriptionmodel.png',
      startdate: '22/02/2023',
      enddate: '22/02/2023',
      cuponlimit: '20',
      wallet: '100',
      rupees: '1,000'
    },
    {
      name: 'Premium ',
      img: 'assets/Image/subscriptionmodel.png',
      startdate: '22/02/2023',
      enddate: '22/02/2023',
      cuponlimit: '20',
      wallet: '100',
      rupees: '1,000'
    },

  ]
  return (
    <>
      <div className="sub-history-outer">
        <div className="container">
          <div className="sub-history-inner">
            <div className="new-subscription">
              <div className="heading">
                <h3>New</h3>
                <DropdownButton id="dropdown-basic-button" className="list-view" title="List View">
                  <DropdownItem as={Link} to='' >User</DropdownItem>
                  <DropdownItem as={Link} to='' >Merchant</DropdownItem>
                </DropdownButton>

              </div>

              <div className="row">
                {
                  items.map((i) => {
                    return (
                      <div className="subcription-item col-xl-4 col-md-6  col-12">
                        <div className="item-inner">
                          <div className="img-content">
                            <img src={i.img} alt="" />
                          </div>
                          <div className="text-content">
                            <h3>{i.name} Subscription plan</h3>
                            <div className="date-info">
                              <p className='start-date'>Start On : {i.startdate}</p>
                              <p className='end-date'>End On : {i.enddate}</p>
                            </div>
                            <div className="cupon-limit">
                              Coupon limited  : {i.cuponlimit} Coupons
                            </div>
                            <div className="wallet">
                              <div className="usedwallet">Used Wallet  : Rs {i.wallet}</div>
                              <p><span className='ruppes-icon'>₹ </span>1000</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>


            </div>
            <div className="expired-subscription">
              <div className="heading">
                <h3>Expired</h3>
              </div>
              <div className="row">
                {
                  items.map((i) => {
                    return (
                      <div className="subcription-item col-xl-4 col-md-6  col-12">
                        <div className="item-inner">
                          <div className="img-content">
                            <img src={i.img} alt="" />
                          </div>
                          <div className="text-content">
                            <h3>{i.name} Subscription plan</h3>
                            <div className="date-info">
                              <p className='start-date'>Start On : {i.startdate}</p>
                              <p className='end-date'>End On : {i.enddate}</p>
                            </div>
                            <div className="cupon-limit">
                              Coupon limited  : {i.cuponlimit} Coupons
                            </div>
                            <div className="wallet">
                              <div className="usedwallet">Used Wallet  : Rs {i.wallet}</div>
                              <p><span className='ruppes-icon'>₹ </span>1000</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default SubscriptionHistory