import React from 'react';
import logo from '../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand logo" href="#"><img src={logo} alt="Athena" /></a>
                <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link s_button text-white" href="#">Contact us</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;