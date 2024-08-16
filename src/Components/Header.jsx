import React, { useState } from 'react'
import { Container, Dropdown, DropdownButton, DropdownItem, Modal, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa'
import { FaHeart, FaRegBell, FaUser } from 'react-icons/fa6'
import { MdOutlineQrCodeScanner } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'
import Merchantlogin from './Merchant/Merchantlogin'
import Operatorlogin from './Operator/Operatorlogin'
import Login from './User/Login'
import Signup from './User/Signup'
import Location from './User/Location'
import ScanerModel from './User/ScanerModel'
import { IoLogOut } from 'react-icons/io5'
import Notification from './User/Notification'

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleClose = () => setShowModal(false);

    const handleMemberLogin = () => {
        setModalContent(<Login onClose={handleClose} onOpenMemberSignUp={handleMemberSignUp} />);
        setShowModal(true);
    };
    const handleMemberSignUp = () => {
        setModalContent(<Signup onClose={handleClose} onOpenMemberLogin={handleMemberLogin} />);
        setShowModal(true);
    };

    const handleMerchantLogin = () => {
        setModalContent(<Merchantlogin onClose={handleClose} />);
        setShowModal(true);
    };

    const handleOperatorLogin = () => {
        setModalContent(<Operatorlogin onClose={handleClose} />);
        setShowModal(true);
    };

    const handleOpenLocation = () => {
        setModalContent(<Location onClose={handleClose} />)
        setShowModal(true);
    }
    const handlenotificition = () => {
        setModalContent(<Notification onClose={handleClose} />)
        setShowModal(true);
    }
    const handleOpenscaer = () => {
        setModalContent(<ScanerModel onClose={handleClose} />)
        setShowModal(true);
    }

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
                                    <DropdownItem as={Link} to="" onClick={handleMemberLogin}>Member Login</DropdownItem>
                                    <DropdownItem as={Link} to="" onClick={handleMerchantLogin}>Merchant Login</DropdownItem>
                                    <DropdownItem as={Link} to="" onClick={handleOperatorLogin}>Operator Login</DropdownItem>
                                </DropdownButton>

                                <div className="scanner">
                                    <Link to={''} onClick={handleOpenscaer}><MdOutlineQrCodeScanner /></Link>
                                </div>
                                <div className="subscribe">
                                    <Link to={''} onClick={handlenotificition}><FaRegBell />
                                    </Link>
                                </div>
                                <div className="loction-info" onClick={handleOpenLocation}>
                                    <span><FaMapMarkerAlt /></span>
                                    <span>West mambalam, Chennai - 600009</span>

                                </div>

                                <div className="avtar-img">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="" id="dropdown-basic">
                                            <img src="assets/Image/avtar.png" alt='' />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <DropdownItem as={Link} to="/dashbord"><FaUser /> Dashboard</DropdownItem>
                                            <DropdownItem as={Link} to=""><FaHeart /> Wishlist</DropdownItem>
                                            <DropdownItem as={Link} to=""> <IoLogOut /> Logout</DropdownItem>

                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="bottom">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                        <Nav className="">
                            <NavLink to="/">All</NavLink>
                            <NavDropdown title="Categories" id="basic-nav-dropdown">
                                <NavLink to=''>Automotive</NavLink>
                                <NavLink to=''>Fashion & Clothing</NavLink>
                                <NavLink to=''>Toys & Games</NavLink>
                                <NavLink to=''>Household & Garden</NavLink>
                                <NavLink to=''>Sports & Leisure</NavLink>
                                <NavLink to=''>Food & Drinks</NavLink>
                            </NavDropdown>
                            <NavLink to="">Discount</NavLink>
                            <NavLink to="">Cashback</NavLink>
                            <NavLink to="">Vouchers</NavLink>
                            <NavLink to="">Wallet</NavLink>
                        </Nav>
                        <DropdownButton id="dropdown-basic-button" className="login-dropdown" title="Members Login">
                            <DropdownItem as={Link} to='' onClick={handleMemberLogin}>Member Login

                            </DropdownItem>
                            <DropdownItem as={Link} to='' onClick={handleMerchantLogin}>Merchant Login</DropdownItem>
                            <DropdownItem as={Link} to='' onClick={handleOperatorLogin}>Operator Login</DropdownItem>
                        </DropdownButton>
                        <div className="search">
                            <input type="text" name="search" id="search" placeholder='Search for the coupons , deals and  offers' />
                            <button><FaSearch /></button>
                        </div>

                    </Navbar.Collapse>
                </div>
            </Navbar >

            <Modal show={showModal} onHide={handleClose}>
                {modalContent}
            </Modal>

        </>
    )
}

export default Header



