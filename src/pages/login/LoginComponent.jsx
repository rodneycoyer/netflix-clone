import React from 'react';
import './login.scss';

const Login = () => {

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1> Sign in </h1>
                    <input type="email" placeholder="Email or Phone Number" />
                    <input type="password" placeholder="Password" />
                    <button className="login-btn"> Sign In </button>
                    <span> New to Netflix? <b> Sign up now </b> </span>
                    <small>
                        this page is protected by google reCAPTCHA to ensure you're not a bot.
                        <b>Learn More</b>
                    </small>
                </form>
            </div>
        </div>
    );
}

export default Login;