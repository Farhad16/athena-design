import React from 'react';
import pro from '../../images/project.png'
import './Projects.css';

const Projects = () => {
    return (
        <div className="project-area">
            <div className="text-left">
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-lg-6 col-md-6 d-flex align-items-center">
                            <div className="project-img">
                                <img className="img-fluid" src={pro} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 d-flex align-items-center">
                            <div className="project-content">
                                <h1 className="project-title">
                                    Stay Running & Projects
                                </h1>
                                <p className="mb-5 mt-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <a href="#" className="contact-btn">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;