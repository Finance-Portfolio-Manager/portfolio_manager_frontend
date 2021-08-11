import NavDropDown from './navdropdown';
import React, { useState } from 'react';

export default function Navigation() {
    const [dropdownShowpPortfolio, setDropDrownShowPortfolio] = useState(false);
    const [dropdownShowStocks, setDropdownShowStocks] = useState(false);
    return (
<<<<<<< Updated upstream
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Portfolio</a>
=======
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark primary-color">
            <div className="container-fluid  py-0">
                <a className="navbar-brand">Team Name</a>
>>>>>>> Stashed changes
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className=" d-flex flex-column flex-md-row justify-content-between flex-fill">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <NavDropDown
                                    className="text-white py-0 border-0"
                                    show={dropdownShowpPortfolio}
                                    hovered={() => setDropDrownShowPortfolio(true)}
                                    // unhovered={() => setDropDrownShowPortfolio(false)}
                                    title="Portfolios">
                                    <div className="min-vh-15 bg-gray">
                                        <a className='text-dark  nav-link active align-item-center' aria-current="page" href="#">Your Accounts</a>
                                        <a className='text-dark  nav-link active align-item-center' aria-current="page" href="#">Favorite</a>
                                        <a className='text-dark  nav-link active align-item-center' aria-current="page" href="#">Public portfolio</a>
                                    </div>
                                </NavDropDown>
                            </li>
                            <li className="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">About Us</a>
                                {/* <NavDropDown
                                className="text-white border-0"
                                show={dropdownShow}
                                hovered={() => setDropDrownShow(true)}
                                unhovered={() => setDropDrownShow(false)}
                                title="Products">
                                <div className="min-vh-45 bg-secondary">

                                </div>
                            </NavDropDown> */}
                            </li>
                            <li className="nav-item">
<<<<<<< Updated upstream
                            <a class="nav-link active" aria-current="page" href="#">Stocks</a>
                                {/* <NavDropDown
                                className="text-white border-0"
                                show={dropdownShow}
                                hovered={() => setDropDrownShow(true)}
                                unhovered={() => setDropDrownShow(false)}
                                title="Products">
                                <div className="min-vh-45 bg-secondary">

                                </div>
                            </NavDropDown> */}
=======
                                <NavDropDown
                                    className="text-white py-0 border-0"
                                    show={dropdownShowStocks}
                                    hovered={() => setDropdownShowStocks(true)}
                                    // unhovered={() => setDropdownShowStocks(false)}
                                    title="Stocks">
                                    <div className="min-vh-15 bg-gray">
                                        <a className='text-dark nav-link active align-item-center' aria-current="page" href="/portfolio">Pie Chart</a>
                                        <a className='text-dark nav-link active align-item-center' aria-current="page" href="/#">Stock Prices</a>
                                        <a className='text-dark nav-link active align-item-center' aria-current="page" href="/#">Stock Graph</a>
                                    </div>
                                </NavDropDown>
>>>>>>> Stashed changes
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
            </div>
        </nav>
    );
}


