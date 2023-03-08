import React from "react";
import {Link} from "react-router-dom";
import './Footer.css'
import Navbar from "../navbar/Navbar";

class Footer extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="container footer-inner">
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <Navbar/>
                </div>
            </div>
        );
    }
}

export default Footer;