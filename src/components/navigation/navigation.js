import NavDropDown from './navdropdown';
import ApexLogo from '../images/apexstocks.jpg';
import React, { useState } from 'react';

export default function Navigation() {
    const [dropdownShowpPortfolio, setDropDrownShowPortfolio] = useState(false);
    return (
        <div className="container-fluid  py-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark primary-color">
                {/* TODO: Change logo to svg file */}
                <img src={ApexLogo} alt="Logo" />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className=" d-flex flex-column flex-md-row justify-content-between flex-fill">
                        <ul className="navbar-nav primary-text">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <NavDropDown
                                    className="text-white py-0 border-0"
                                    show={dropdownShowpPortfolio}
                                    hovered={() => setDropDrownShowPortfolio(true)}
                                    unhovered={() => setDropDrownShowPortfolio(false)}
                                    title="Portfolios">
                                    <div className="min-vh-15 bg-gray">
                                        <a className='text-dark  nav-link active align-item-center' aria-current="page" href="/account">My Portfolio</a>
                                        <a className='text-dark  nav-link active align-item-center' aria-current="page" href="#">Public portfolio</a>
                                        <a className='text-dark  nav-link active align-item-center' aria-current="page" href="#">Favorite portfolio</a>
                                    </div>
                                </NavDropDown>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className='text-dark nav-link active align-item-center' aria-current="page" href="/new-transaction">Transaction</a>
                            </li>
                        </ul>
                        <div className="d-flex align-self-center me-3">
                            <span className="align-self-center p1"><i className="bi-person-circle text-white"></i></span>
                            <div className="navbar-nav dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-gray" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/login">Log in</a></li>
                                    <li><a className="dropdown-item" href="/register">Sign up</a></li>
                                    <li><a className="dropdown-item" href="/home">Log Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}


