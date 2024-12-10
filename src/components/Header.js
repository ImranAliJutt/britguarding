import React from 'react';
import './Header.css';
import bgImage from '../images/bg.png';
import broImage1 from '../images/403 Error Forbidden-bro.png';

const Header = () => {
    return (
        <header
            className="header"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="overlay"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="header-content">
                            <h1>
                                Protecting You is Our
                            </h1>
                            <h1>
                                Top Priority <i className="fa-solid fa-user-shield"></i>
                            </h1>
                            <p>
                                As market leaders in identifying, analysing, and managing risk, ASEL (Argenbright Security Europe Limited) bring together dynamic data sources, comprehensive integrated services, and innovation to deliver truly cost-effective, bespoke security solutions across industry sectors in the UK and Europe.
                            </p>
                            <div className="button-group">
                                <a href="#services" className="A-0">Our Services</a>
                                <a href="#contact" className="A-0">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="circle-container">
                            <img src={broImage1} alt="403 Error" className="circle-image" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
