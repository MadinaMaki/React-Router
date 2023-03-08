import React from "react";
import Banner from "../../components/banner/Banner";
import './Contact.css';

import location from './icons/location.png';
import phone from './icons/phone.png';
import telegram from './icons/telegram.png';
import email from './icons/email.png';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Banner/>
                <div className="container">
                    <div className="contact-page">
                        <div className="social">
                            <div className="social-item">
                                <img src={location} alt="location"/>
                                <h3>Our Office</h3>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit
                                </p>
                            </div>
                            <div className="social-item">
                                <img src={phone} alt="location"/>
                                <h3>Phone Number</h3>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit
                                </p>
                            </div>
                            <div className="social-item">
                                <img src={telegram} alt="location"/>
                                <h3>Telegram</h3>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit
                                </p>
                            </div>
                            <div className="social-item">
                                <img src={email} alt="location"/>
                                <h3>Email</h3>
                                <p>Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit
                                </p>
                            </div>
                        </div>

                        <div className="feedback">
                            <h1>Contact us</h1>
                            <form className="form">
                                <input placeholder="Enter your name"/>
                                <input placeholder="Enter your email address"/>
                                <textarea cols="1" rows="7"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;