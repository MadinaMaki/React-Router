import React from "react";
import Banner from "../../components/banner/Banner";
import Boxes from "../../boxes/Boxes";
import Button from "../../ui/button/Button";
import './Home.css'


class Home extends React.Component {
    render() {
        return (
            <div>
                <Banner/>
                <div className="container">
                    <div className="home-page">
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <Button/>
                    </div>
                </div>
                <Boxes/>
            </div>
        );
    }
}

export default Home;