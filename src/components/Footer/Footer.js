import React from 'react';
import './Footer.css';
import logo from '../../images/logo.png'
import fb from '../../images/facebook.png'
import twitter from '../../images/twitter.png'
import ball from '../../images/ball.png'
import linkedin from '../../images/linkedin.png'
import be from '../../images/be.png'


const Footer = () => {
    return (
        <div className="py-5 footer">
            <div className="container">
                <h2 className="font-weight-bold text-center pt-5">What we do</h2>
                <p className="text-center pb-3 text-secondary">
                    Be the first know our latest offers and updates!
                </p>
                <div className="get">
                    <input type="text" placeholder="Enter your email address" />
                    <input type="submit" value="Get Started" />
                </div>
                <div className="row pb-5 py-5 m5-3">
                    <div className="col-lg-6 flex-row">
                        <img src={logo} alt="" width="150px" />
                        <div className="pt-3">
                            <img src={fb} alt="" width="20px" className="mr-3" />
                            <img src={twitter} alt="" width="20px" className="mr-3" />
                            <img src={linkedin} alt="" width="20px" className="mr-3" />
                            <img src={ball} alt="" width="20px" className="mr-3" />
                            <img src={be} alt="" width="20px" className="mr-3" />
                        </div>
                    </div>
                    <div className="col-lg-2 text-color py-3">
                        <p>Features</p>
                        <p>Enterprise</p>
                        <p>Pricing</p>
                    </div>
                    <div className="col-lg-2 text-color">
                        <p>Blog</p>
                        <p>Help Center</p>
                        <p>Contact Us</p>
                        <p>Status</p>
                    </div>
                    <div className="col-lg-2 text-color">
                        <p>About Us</p>
                        <p>Terms of Service</p>
                        <p>Security</p>
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;