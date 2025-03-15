import React,{useState} from 'react';
import "./services.css";

const Services = () => {
    const[toggleState,setToggleState] = useState(0);

    const toggleTab=(index) =>{
        setToggleState(index);
    };
  return (
    <sectiion className="services section" id="services">
        <h2 className="section_title"> Services</h2>
        <span className="section_subtitle">What I Offer</span>

        <div className="services_container sontainer grid">

            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services_icon"></i>
                    <h3 className="services_title">Ui/Ux <br/>Designer</h3>
                </div>

                <span onClick={() => toggleTab(2)} 
                className="services_button">
                    View More 
                    <i className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState===2? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)}className="uil uil-times services_modal-close"></i>

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

                        </ul>


                    </div>
                </div>
            </div>

            <div className="services_content">
                <div>
                    <i className="uil uil-edit services_icon"></i>
                    <h3 className="services_title">Web<br/>Developer</h3>
                </div>

                <span onClick={() => toggleTab(3)}className="services_button">
                    View More 
                    <i className="uil uil-arrow-right services_button-icon"></i></span>

                    <div className={toggleState===3? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)}className="uil uil-times services_modal-close"></i>

                        <h3 className="services_modal-title">Web Developer</h3>
                        <p className="services_modal-description">
                            
                            providing quality work to clients and companies.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                Develops responsive and high-performance websites.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                Optimizes user experience and functionality.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                Ensures seamless interaction across all devices.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                Implements modern web technologies and best practices.</p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle
                                 services_modal-icon"></i>
                                <p className="services_modal-info">
                                Enhances website accessibility and performance.</p>
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