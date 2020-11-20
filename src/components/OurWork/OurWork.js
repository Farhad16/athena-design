import React from 'react';
import './OurWork.css'

import xp from '../../images/Group 65@2x.png';
import inter from '../../images/Group 66@2x.png';
import proto from '../../images/Group 69@2x.png';
import illus from '../../images/Group 72@2x.png';


const OurWork = () => {
    return (
        <div className="ourWork">
            <div className="justify-content-center py-3 bgline">
                <h2 className="font-weight-bold text-center pt-5">What we do</h2>
                <p className="text-secondary">
                    <small>Our main focus is to make the user experience way <br />simple and easy simplicity is our strength</small>
                </p>
                <div className="d-flex justify-content-center">
                    <div className="w-100 row my-5">
                        <div className="col-md-12 col-lg-3">
                            <div className="service p-3 h-100 mb-3">
                                <div className="m-3 text-center">
                                    <img className="img-style" src={xp} alt="" width="60px" height="60px" />
                                </div>
                                <div className="m-3 text-center">
                                    <h6 className="my-2 text-dark">Experience Design</h6>
                                    <small className="text-secondary p-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto harum reprehenderit tempora
                                </small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-3">
                            <div className="service p-3 h-100 mb-3">
                                <div className="m-3 text-center">
                                    <img className="img-style" src={inter} alt="" width="60px" height="60px" />
                                </div>
                                <div className="m-3 text-center">
                                    <h6 className="my-2 text-dark">Interface Design</h6>
                                    <small className="text-secondary p-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto harum reprehenderit tempora
                                </small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-3">
                            <div className="service p-3 h-100 mb-3">
                                <div className="m-3 text-center">
                                    <img className="img-style" src={proto} alt="" width="60px" height="60px" />
                                </div>
                                <div className="m-3 text-center">
                                    <h6 className="my-2 text-dark">Prototyping</h6>
                                    <small className="text-secondary p-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto harum reprehenderit tempora
                                </small>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-3">
                            <div className="service p-3 h-100 mb-3">
                                <div className="m-3 text-center">
                                    <img className="img-style" src={illus} alt="" width="60px" height="60px" />
                                </div>
                                <div className="m-3 text-center">
                                    <h6 className="my-2 text-dark">Illustration</h6>
                                    <small className="text-secondary p-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iusto harum reprehenderit tempora
                                </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;