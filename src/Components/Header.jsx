import { Avatar } from 'antd'
import React from 'react'
import { Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap'
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa'
import { FaRegBell } from 'react-icons/fa6'
import { MdOutlineQrCodeScanner } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="">
                <div className="top">
                    <Container>
                        <div className="header-inner row">


                            <div className="logo col-2">
                                <div className="img-content">
                                    <img src="assets/Image/logo.png" alt="Header Logo" />

                                </div>
                            </div>
                            <div className="info col-10">
                                <div className="search">
                                    <input type="text" name="search" id="search" placeholder='Search for the coupons , deals and  offers' />
                                    <button><FaSearch /></button>
                                </div>
                                <div className="points">
                                    <img src="assets/Image/Coins.png" alt="Coins Logo" />
                                    <p>100</p>
                                </div>

                                <DropdownButton id="dropdown-basic-button" className="login-dropdown" title="Members Login">
                                    <Dropdown.Item href="">Member Login</Dropdown.Item>
                                    <Dropdown.Item href="">Merchant Login</Dropdown.Item>
                                    <Dropdown.Item href="">Operator Login</Dropdown.Item>
                                </DropdownButton>

                                <div className="scanner">
                                    <Link to={''}><MdOutlineQrCodeScanner /></Link>
                                </div>
                                <div className="subscribe">
                                    <Link to={''}><FaRegBell />
                                    </Link>
                                </div>
                                <div className="loction-info">
                                    <span><FaMapMarkerAlt /></span>
                                    <span>West mambalam, Chennai - 600009</span>

                                </div>

                                <div className="avtar-img">
                                    <Avatar src="assets/Image/avtar.png" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="bottom">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                        <Nav className="">
                            <Nav.Link href="">All</Nav.Link>
                            <Nav.Link href="">Categories</Nav.Link>
                            <Nav.Link href="">Discount</Nav.Link>
                            <Nav.Link href="">Cashback</Nav.Link>
                            <Nav.Link href="">Vouchers</Nav.Link>
                            <Nav.Link href="">Wallet</Nav.Link>
                        </Nav>
                        <DropdownButton id="dropdown-basic-button" className="login-dropdown" title="Members Login">
                            <Dropdown.Item href="">Member Login

                            </Dropdown.Item>
                            <Dropdown.Item href="">Merchant Login</Dropdown.Item>
                            <Dropdown.Item href="">Operator Login</Dropdown.Item>
                        </DropdownButton>
                        <div className="search">
                            <input type="text" name="search" id="search" placeholder='Search for the coupons , deals and  offers' />
                            <button><FaSearch /></button>
                        </div>

                    </Navbar.Collapse>
                </div>
            </Navbar >
        </>
    )
}

export default Header