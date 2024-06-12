import React from 'react';
import "./registerPage.css";
import hero from "./../../assets/hero.png";
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from 'react';
import { auth } from '../../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const navigate = useNavigate();

    const signUp = async ()=>{
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          const timestamp = new Date().toLocaleString();
          alert(`User has been logged in at ${timestamp}.`);
          navigate("/");
        } catch (error) {
          console.error('Sign-in error:', error.message);
        //   alert(`Sign-in error: ${error.message}`);
        }
      };

      const handleSubmit = (e) =>{
        e.preventDefault();
        signUp()
      }


    const showPasswordClick = (e)=>{
        setShowPassword(prevState => !prevState);
    };


  return (
    <div className='registerPage section-padding'>
      <div className="registerPage__container">

        <div className="registerPage__form-container">
            <h2 className="registerPage__heading">
                Create an Account
            </h2>

            <div className="registerPage__form">
                <form onSubmit={handleSubmit}> 
                    <div className="registerPage__form-email">
                        <label>Email</label>
                        <input type="email" placeholder='teejay@gmail.com' onChange={(e) => setEmail(e.target.value)}  required />
                    </div>

                    <div className="registerPage__form-password">
                        <label>Password</label>
                        <input type={showPassword ? "password" : "text"} placeholder='*********' onChange={(e) => setPassword(e.target.value)}  required />
                        <span className='registerPage__form-password-show-or-not' onClick={showPasswordClick}>
                            {showPassword ? <IoEyeOutline />
                            : <IoEyeOffOutline />}
                        </span>
                    </div>

                    <button type='submit' className='registerPage__form-btn'>Register</button>
                </form>


                <h3 className='registerPage__or'>
                    Or
                </h3>

                <div className="registerPage__otherOptions">
                    <button>
                        <FaGoogle className='registerPage__otherOptions-icon' />
                        Log In with Google
                    </button>

                    <button>
                        <FaFacebook className='registerPage__otherOptions-icon' />
                        Log In with Facebook
                    </button>
                </div>

                <div className="registerPage__register">
                    <p>Already have an account?</p>
                    <Link to={"/login"}>Login Here.</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage