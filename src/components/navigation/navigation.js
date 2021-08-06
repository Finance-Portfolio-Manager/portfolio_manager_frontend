import NavDropDown from './navdropdown';
import React, { useState } from 'react';

export default function Navigation() {
    const [dropdownShow, setDropDrownShow] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className=" d-flex flex-column flex-md-row justify-content-between flex-fill">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavDropDown
                                    className="text-white py-0 border-0"
                                    show={dropdownShow}
                                    hovered={() => setDropDrownShow(true)}
                                    unhovered={() => setDropDrownShow(false)}
                                    title="Home">
                                    <div className="min-vh-45 bg-gray">

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
                            </li>
                        </ul>
                        <div className="d-flex align-self-center me-3">
                            <span className="align-self-center p1"><i className="bi-person-circle text-white"></i></span>
                            <div className="navbar-nav dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-gray" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Log in</a></li>
                                    <li><a className="dropdown-item" href="#">Sign up</a></li>
                                    <li><a className="dropdown-item" href="#">Log Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}


