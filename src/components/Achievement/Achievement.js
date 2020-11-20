import React from 'react';
import './Achievement.css';
import happy from '../../image/Illustration/happy@2x.png';
import marketing from '../../image/Illustration/marketing@2x.png';
import surface from '../../image/Illustration/surface1@2x.png';
import transportation from '../../image/Illustration/transportation@2x.png';

const Achievement = () => {
    return (

        <div className="achievement text-left py-5">
            <div className="container pt-5 mx-auto">
                <div className="row">
                    <div className="col-lg-5 mt-5 pt-5">
                        <h1 className="title">
                            Our Achievements
                            </h1>
                        <p className="">
                            Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                        </p>
                    </div>
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-lg-5 ml-auto mt-5 button left achievement-div">
                                <div className="d-flex flex-row">
                                    <img src={happy} className="img" alt="" />

                                    <div className="text-left pl-3">
                                        <h5>700+</h5>
                                        <p>Happy Client</p>
                                    </div>
                                </div>
                            </div >
                            <div className="col-lg-5 ml-auto mt-5 button right achievement-div ">
                                <div className="d-flex flex-row">
                                    <img src={marketing} className="img" alt="" />
                                    <div className="text-left pl-3">
                                        <h5>140+</h5>
                                        <p>Projects Completed</p>
                                    </div>
                                </div>
                            </div >
                        </div>
                        <div className="row">
                            <div className="col-lg-5 ml-auto mt-5 right button achievement-div">
                                <div className="d-flex flex-row">
                                    <img src={surface} className="img" alt="" />

                                    <div className="text-left pl-3">
                                        <h5>25+</h5>
                                        <p>crazy Minds</p>
                                    </div>
                                </div>
                            </div >
                            <div className="col-lg-5 ml-auto mt-5 left button achievement-div ">
                                <div className="d-flex flex-row">
                                    <img src={transportation} className="img" alt="" />
                                    <div className="text-left pl-3">
                                        <h5>75+</h5>
                                        <p>Running Project</p>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;