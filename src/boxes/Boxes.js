import React from "react";
import Button from "../ui/button/Button";
import './Boxes.css'

class Boxes extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="boxes">
                    <div className="box">
                        <h3>Lorem ipsum </h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </p>
                        <Button/>
                    </div>
                    <div className="box">
                        <h3>Lorem ipsum </h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </p>
                        <Button/>
                    </div>
                    <div className="box">
                        <h3>Lorem ipsum </h3>
                        <p>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua.
                        </p>
                        <Button className="button"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Boxes;