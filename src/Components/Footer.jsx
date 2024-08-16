import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-inner">


          <div className="top">
            <div className="top-inner row">
              <div className="col-12 col-sm-6 col-lg-3 logo-item item">
                <div className="footer-logo">
                  <img src="assets/Image/logo.png" alt="Footer-logo" />
                </div>
                <div className="app-icon">
                  <img src="assets/Image/GooglePlay.png" alt="Google Play" />
                  <img src="assets/Image/AppStore.png" alt="App Store" />
                </div>


              </div>

              <div className="col-12 col-sm-6 col-lg-2 item">
                <div className="footer-heading">
                  <h4>Special Offers</h4>
                </div>
                <ul className='footer-menu'>
                  <li>
                    <Link to=''>Limited - Time Offers</Link>
                  </li>
                  <li>
                    <Link to=''>Exclusive Codes</Link>
                  </li>
                  <li>
                    <Link to=''>Seasonal</Link>
                  </li>
                  <li>
                    <Link to=''>Black Friday</Link>
                  </li>
                  <li>
                    <Link to=''>Cyber Monday</Link>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-sm-6 col-lg-2 item">
                <div className="footer-heading">
                  <h4>Get to Know us</h4>
                </div>
                <ul className='footer-menu'>
                  <li>
                    <Link to=''>About Us</Link>
                  </li>
                  <li>
                    <Link to=''>Partner With Us</Link>
                  </li>
                  <li>
                    <Link to=''>Influencers Partnership</Link>
                  </li>
                  <li>
                    <Link to=''>Contact Us</Link>
                  </li>
                  <li>
                    <Link to=''>Press Room</Link>
                  </li>
                  <li>
                    <Link to=''>Careers</Link>
                  </li>
                  <li>
                    <Link to=''>FAQs</Link>
                  </li>

                </ul>
              </div>

              <div className="col-12 col-sm-6 col-lg-2 item">
                <div className="footer-heading">
                  <h4>Legal</h4>
                </div>
                <ul className='footer-menu'>
                  <li>
                    <Link to=''>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to=''>Reward Terms</Link>
                  </li>
                  <li>
                    <Link to=''>Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to=''>Cookies Policy</Link>
                  </li>
                  <li>
                    <Link to=''>Modern Slavery Policy</Link>
                  </li>
                </ul>

              </div>
              <div className="col-12 col-sm-6 col-lg-3 item">
                <div className="footer-heading">
                  <h4>Follow Us</h4>
                </div>
                <div className="soical-icon-list">
                  <ul className="icons">
                    <li>
                      <Link to=''>
                        <FaFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to=''>
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to=''>
                        <FaSquareXTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to=''>
                        <FaLinkedin />
                      </Link>
                    </li>

                  </ul>

                </div>

                <div className="footer-heading">
                  <h4>Sign up for the latest deals</h4>
                </div>

                <form method='post'>
                  <div className="input-groups">
                    <input type="email" name="email" id="email" placeholder='Email Address' />
                    <button className='button'>
                      Subscribe
                    </button>
                  </div>
                </form>
                <p>By subscription, I agree to the terms of use and have read the privacy statement</p>
              </div>

            </div>
          </div>

          <div className="bottom">
            <div className="bottom-inner">
              <p><b>From Dreams to Reality. </b> Copyright © 2024 Calgell Bharat Private Limited. All Rights Reserved.</p>
              <ul>
                <li>
                  <Link to={''}>India</Link>
                </li>
                <li>
                  <Link to={''}>English</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </footer >

    </>
  )
}

export default Footer