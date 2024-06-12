import React from 'react';
import "./loginPage.css";
import hero from "./../../assets/hero.png";
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from 'react';
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginPage = () => {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);

    const signIn = async ()=>{
        try {
          await signInWithEmailAndPassword(auth, email, password);
          const timestamp = new Date().toLocaleString();
          alert(`User has been logged in at ${timestamp}.`);
        } catch (error) {
          console.error('Sign-in error:', error.message);
        //   alert(`Sign-in error: ${error.message}`);
        }
      };

    const showPasswordClick = (e)=>{
        setShowPassword(prevState => !prevState);
    };


  return (
    <div className='loginPage section-padding'>
      <div className="loginPage__container">

        <div className="loginPage__form-container">
            <h2 className="loginPage__heading">
                Login to Your Account
            </h2>

            <div className="loginPage__form">
                <form> 
                    <div className="loginPage__form-email">
                        <label>Email</label>
                        <input type="email" placeholder='teejay@gmail.com' onChange={(e) => setEmail(e.target.value)}  required />
                    </div>

                    <div className="loginPage__form-password">
                        <label>Password</label>
                        <input type={showPassword ? "password" : "text"} placeholder='*********' onChange={(e) => setPassword(e.target.value)}  required />
                        <span className='loginPage__form-password-show-or-not' onClick={showPasswordClick}>
                            {showPassword ? <IoEyeOutline />
                            : <IoEyeOffOutline />}
                        </span>
                    </div>

                    <button onClick={signIn} className='loginPage__form-btn'>Login</button>
                </form>


                <h3 className='loginPage__or'>
                    Or
                </h3>

                <div className="loginPage__otherOptions">
                    <button>
                        <FaGoogle className='loginPage__otherOptions-icon' />
                        Log In with Google
                    </button>

                    <button>
                        <FaFacebook className='loginPage__otherOptions-icon' />
                        Log In with Facebook
                    </button>
                </div>

                <div className="loginPage__register">
                    <p>Don't have an account?</p>
                    <Link to={"/register"}>Register Here.</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
