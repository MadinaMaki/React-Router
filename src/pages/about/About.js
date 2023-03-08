import React from "react";
import Banner from "../../components/banner/Banner";
import './About.css'
import Boxes from "../../boxes/Boxes";
import Button from "../../ui/button/Button";

class About extends React.Component {
    render() {
        return (
            <div>
                <Banner/>
                <div className="container">
                    <div className="about-page">
                        <div className="frame">
                            <div className="info">
                                <h1>Lorem ipsum dolor sit amet</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="frame">
                            <div className="info">
                                <h1>Lorem ipsum dolor sit amet</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Boxes/>
            </div>
        );
    }
}

export default About;