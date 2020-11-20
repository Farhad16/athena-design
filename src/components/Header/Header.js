import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import heroImg from '../../images/hero.png'

const Header = () => {
    return (
        <div className="header-area py-3">
            <div className="navigation">
                <Navbar />
            </div>
            <div className="hero-area text-left pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 d-flex">
                            <div className="header-content">
                                <h1 className="header-title">
                                    Florence agency
                                </h1>
                                <p className="mb-5 mt-4 text-secondary">
                                    <small>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </small>
                                </p>
                                <a href="#" className="s_button mb-2">See Pricing</a>
                            </div>
                        </div>
                        <div className="col-lg-5 ml-auto">
                            <div className="hero-img">
                                <img className="img-fluid" src={heroImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;