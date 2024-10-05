import React, { useState } from "react";
import './login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase";
import { Link } from "react-router-dom";

function Login (){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth,email,pass);
            setMessage("User logged in successfully");
            setIsLoggedIn(true);
        }
        catch (error){
            setMessage(error.message);
        }
    };

    return(
        <div className="login-container">
        <h4>Login to Your Account</h4>
        <p className="redirect-text">
            New here? <Link to="/signup">Create an account!</Link>
        </p>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label>Email Address</label>
                <input
                    type="email"
                    className="input-field"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="input-group">
                <label>Password</label>
                <input
                    type="password"
                    className="input-field"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="submit-btn">Login</button>

            {message && <p className="message">{message}</p>}
            {isLoggedIn && (<p className="success-message">Login successful!</p>)}
        </form>
    </div>
    );
}

export default Login;
