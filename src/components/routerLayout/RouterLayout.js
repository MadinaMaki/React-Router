import React from "react";
import {Outlet} from "react-router-dom";
import './style.css'
import Navbar from "../navbar/Navbar";

class RouterLayout extends React.Component {
    render() {
        return (
            <div>
                <div className="main">
                    <div className="container header-inner">
                        <div className="title">Title</div>
                        <Navbar/>
                    </div>
                </div>
                <Outlet/>
            </div>
        );
    }
}

export default RouterLayout;