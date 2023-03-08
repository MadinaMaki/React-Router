import React from "react";
import plug from './strategy-development 1.png'
import './Banner.css'

class Banner extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="container banner">
                    <div className="banner-inner">
                        <div className="banner-info">
                            <h2 className="title">Lorem ipsum dolor sit amet</h2>
                            <p className="subtitle">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <img src={plug}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;