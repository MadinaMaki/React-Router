import React from "react";
import {Link} from "react-router-dom";
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <ul>
                    <li>
                        <Link className="link" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="link" to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className="link" to='/contacts'>Contact</Link>
                    </li>
                    <li>
                        <Link className="link" to='/auth'>Sign in</Link>
                    </li>
                    <li>
                        <Link to='*'></Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;