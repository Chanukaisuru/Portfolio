import React from 'react';
import "./services.css";

const Services = () => {
  return (
    <sectiion className="services section" id="srvices">
        <h2 className="section_title"> Services</h2>
        <span className="section_subtitle">What I Offer</span>

        <div className="services_container sontainer grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services_icon"></i>
                    <h3 className="services_title">
                        product <br/>Designer</h3>
                </div>

                <span className="services_button">
                    View More
                    <i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className="services_modal">
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">product Designer</h3>
                        <p className="services_modal-description">
                            service with more than 3 years of experience.
                            providing quality work to clients and companies.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the user interface.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web page development.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I create UX element interaction.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I position your company brand.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies.</p>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">Ui/Ux <br/>Designer</h3>
                </div>

                <span className="services_button">
                    View More 
                    <i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className="services_modal">
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">Ui/Ux Designer</h3>
                        <p className="services_modal-description">
                            service with more than 3 years of experience.
                            providing quality work to clients and companies.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the user interface.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web page development.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I create UX element interaction.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I position your company brand.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies.</p>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-edit services_icon"></i>
                    <h3 className="services_title">Visual<br/>Designer</h3>
                </div>

                <span className="services_button">
                    View More 
                    <i className="uil uil-arrow-right services_button-icon"></i></span>

                <div className="services_modal">
                    <div className="services_modal-content">
                        <i className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">Visual Designer</h3>
                        <p className="services_modal-description">
                            service with more than 3 years of experience.
                            providing quality work to clients and companies.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I develop the user interface.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                    Web page development.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I create UX element interaction.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                    I position your company brand.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                   Design and mockups of products for companies.</p>
                            </li>
                        </ul>


                    </div>
                </div>
            </div>
        </div>

    </sectiion>
  );
};

export default Services;