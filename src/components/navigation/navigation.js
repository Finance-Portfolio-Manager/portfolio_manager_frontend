import NavDropDown from './navdropdown';
import ApexLogo from '../images/apexstocks.jpg';
import React, { useState } from 'react';
import { Logo } from '../styled-components/logo/Logo';
import ToggleButton from '../styled-components/components/ToggleButton';

export default function Navigation({ theme, toggleTheme, loggedIn, setLoggedIn }) {

    function logOut(){
        setLoggedIn(false);
        sessionStorage.removeItem("Authorization");
    }
    
    const [dropdownShowpPortfolio, setDropDrownShowPortfolio] = useState(false);

    return (
        <div className="container-fluid p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark primary-color">
                {/* TODO: Change logo to svg file */}
                <div className="global__logo">
                    <Logo className='m-2' />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className=" d-flex flex-column flex-md-row justify-content-between flex-fill">
                        <ul className="navbar-nav primary-text">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            {loggedIn && <li className="nav-item">
                                <NavDropDown
                                    className="text-white py-0 border-0"
                                    show={dropdownShowpPortfolio}
                                    hovered={() => setDropDrownShowPortfolio(true)}
                                    unhovered={() => setDropDrownShowPortfolio(false)}
                                    title="Portfolios">
                                    <div className="min-vh-15 bg-gray">
                                        <a className='text-dark  nav-link active align-item-center' aria-current="page" href="/account">My Portfolio</a>
                                        <a className='text-dark  nav-link active align-item-center' aria-current="page" href="/portfolios/public">Public portfolio</a>
                                        <a className='text-dark  nav-link active align-item-center' aria-current="page" href="/favorites">Favorite portfolio</a>
                                    </div>
                                </NavDropDown>
                            </li>}
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">About Us</a>
                           </li>
                        </ul>
                        <div className="d-flex align-self-center me-3">
                            <span className="align-self-center p1"><i className="bi-person-circle text-white"></i></span>
                            <div className="navbar-nav dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-gray" aria-labelledby="navbarDropdown">
                                    {loggedIn ? null : (<li><a className="dropdown-item" href="/login">Log in</a></li>)}    
                                    {loggedIn ? null : (<li><a className="dropdown-item" href="/register">Sign up</a></li>)}
                                    {loggedIn ? (<li><a className="dropdown-item" href="/" onClick={logOut}>Log Out</a></li>) : null}
                                    <li><ToggleButton theme={theme} toggleTheme={toggleTheme} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}


