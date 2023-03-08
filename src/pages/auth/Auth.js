import React from "react";
import './Auth.css';
import facebook from './icons/facebook.png';
import vk from './icons/vk-logo.png';
import google from './icons/google.png';

class Auth extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="auth-form">
                    <h1>Login</h1>
                    <form className="form">
                        <input placeholder="Enter your number"/>
                        <input placeholder="Enter your email address"/>
                    </form>
                    <button>Login</button>

                    <h3 className="sign-up-title">Sign up with</h3>
                    <div className="sign-up-icons">
                        <div className="icon">
                            <img src={facebook} alt="facebook"/>
                        </div>
                        <div className="icon">
                            <img src={google} alt="google"/>
                        </div>
                        <div className="icon">
                            <img src={vk} alt="vk"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;