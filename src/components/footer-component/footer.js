import React from 'react';

export default function Footer() {
    return (
        <div className="footer bg-dark min-vh-45 d-flex flex-column pt-md-5 align-items-center overflow-auto">
            <div className="d-flex flex-column flex-md-row w-100 justify-content-center">
                {/* Columns */}
                <div className="card border-0 w-md-15 bg-transparent">
                    <div className="card-body d-flex flex-column">
                        <span className="card-title text-white text-uppercase mb-3">Service</span>
                        <a href="/" className="text-decoration-none text-white small">Investment Relations</a>
                        <a href="/" className="text-decoration-none text-white small">Accessiblity</a>
                        <a href="/" className="text-decoration-none text-white small"> Company Over</a>
                        <a href="/" className="text-decoration-none text-white small">Stocks Plans</a>
                    </div>
                </div>
                <div className="card border-0 w-md-15 bg-transparent">
                    <div className="card-body d-flex flex-column">
                        <span className="card-title text-white text-uppercase mb-3">Portfolio</span>
                        <a href="/" className="text-decoration-none text-white small mb-2">Financial and Application</a>
                        <a href="/" className="text-decoration-none text-white small mb-2">Executive Services</a>
                        <a href="/" className="text-decoration-none text-white small mb-2">Protections and Guarantees</a>
                    </div>
                </div>
                <div className="card border-0 w-md-15 bg-transparent">
                    <div className="card-body d-flex flex-column">
                        <span className="card-title text-white text-uppercase mb-3">About Stock History</span>
                        <a href="/" className="text-decoration-none text-white small mb-2">About Us</a>
                        <a href="/" className="text-decoration-none text-white small mb-2">Customer Reviews</a>
                        <a href="/" className="text-decoration-none text-white small mb-2">Careers</a>
                    </div>
                </div>
                <div className="card border-0 w-md-15 bg-transparent">
                    <div className="card-body d-flex flex-column">
                        <span className="card-title text-white text-uppercase mb-3">Support</span>
                        <a href="/" className="text-decoration-none text-white small mb-2">Contact Us</a>
                        <a href="/" className="text-decoration-none text-white small mb-2">FAQ</a>
                        <a href="/" className="text-decoration-none text-white small mb-2">Business Partnerships</a>
                        <a href="/" className="text-decoration-none text-white small mb-2">Media Relations</a>
                    </div>
                </div>
            </div>
            <div className="d-flex w-md-75 ps-md-3 flex-column align-items-center">
                <div className="d-flex">
                    <a href="/" className="text-decoration-none text-white small text-uppercase">Search</a>
                    <span className="text-decoration-none text-white small mx-2">|</span>
                    <a href="/" className="text-decoration-none text-white small text-uppercase">Stocks</a>
                    <span className="text-decoration-none text-white small mx-2">|</span>
                    <a href="/" className="text-decoration-none text-white small text-uppercase">User Protections</a>
                    <span className="text-decoration-none text-white small mx-2">|</span>
                    <a href="/" className="text-decoration-none text-white small text-uppercase">Blog</a>
                </div>
                <div className="d-flex w-md-25 justify-content-between">
                    <a href="/"><i className="bi bi-facebook fs-1 text-white ms-2 ms-md-0"></i></a>
                    <a href="/"><i className="bi bi-twitter fs-1 text-white"></i></a>
                    <a href="/"><i className="bi bi-instagram fs-1 text-white"></i></a>
                    <a href="/"><i className="bi bi-youtube fs-1 text-white me-2 me-md-0"></i></a>
                </div>
            </div>
            
            <hr className="bg-white w-75" />
            
            <div className="d-flex flex-column my-3">
                <span className="text-white">Copyright &copy; 2021 Stock Portfolio. All Rights Reserved</span>
                <div className="d-flex">
                    <a href="/termsandconditions" className="text-decoration-none text-white small text-capitalized">Terms and Conditions</a>
                    <span className="text-decoration-none text-white small mx-2">|</span>
                    <a href="/privacyandpolicy" className="text-decoration-none text-white small text-capitalized">Privacy Policy</a>
                    <span className="text-decoration-none text-white small mx-2">|</span>
                    <a href="/businesscodeofethics" className="text-decoration-none text-white small text-capitalized">Business Code of Ethics</a>
                    <span className="text-decoration-none text-white small mx-2">|</span>
                    <a href="/" className="text-decoration-none text-white small text-capitalized">Site Map</a>
                </div>
            </div>
        </div>
    );
}