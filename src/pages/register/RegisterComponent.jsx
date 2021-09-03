import React from 'react';
import './register.scss';

const Register = () => {
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                        alt=""
                    />
                    <button className="login-btn"> Sign In </button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited Movies, TV shows, and more</h1>
                <h2>Watch anywhere, Cancel anytime</h2>
                <p>
                    Ready to watch? Enter your email to create to restart your membership.
                </p>
                <div className="input">
                    <input type="email" placeholder="email address" />
                    <button className="register-btn"> Get Started </button>
                </div>
            </div>
        </div>
    );
}

export default Register;