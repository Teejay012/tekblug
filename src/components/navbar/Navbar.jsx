import React, { useState } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaPinterestP, FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import HeaderNav from '../headerNav/HeaderNav';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase-config';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);

    const [toggleSearch, setToggleSearch] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleClick = ()=>{
        setToggleSearch(prevState => !prevState);
    }

    const openMobileMenu = ()=>{
        setToggleMenu(true)
    }

    const closeMobileMenu = ()=>{
        setToggleMenu(false)
    }

  return (
    <div className='navbar'>
      <div className="navbar__container section__padding">
        <div className="navbar__top-nav">
            <div className="navbar__socials">
                <FaXTwitter className='navbar__socials-icon' />
                <FaLinkedinIn className='navbar__socials-icon' />
                <FaInstagram className='navbar__socials-icon' />
                <FaFacebookF className='navbar__socials-icon' />
                <FaPinterestP className='navbar__socials-icon' />
            </div>    

            <div className="navbar__logo">
                <Link to={"/"}>
                    <h1>TekBlug</h1>
                </Link>
            </div>

            <div className="navbar__action-btns">
                <a href="#contact__section" className="navbar__subscribe">SUBSCRIBE</a>

                <div className="navbar__auth">
                    {
                        user ? (
                            <div className='navbar__auth-profile_pic'>
                                <Link to={"/profile"} ><span>{user.email[0]}</span></Link>
                            </div>
                        ) :
                        <Link to={"/login"} className="navbar__login">Log In</Link>
                    }
                    
                </div>

                <div className={`navbar__search ${toggleSearch && `show__search`}`}>
                    {toggleSearch && <input type="text" placeholder='Search...' />}
                    <FaSearch className='navbar__socials-icon' onClick={handleToggleClick} />
                </div>
            </div>

            <div className="navbar__toggle-icon"  onClick={openMobileMenu}>
                <IoIosMenu className='navbar__socials-icon' />
            </div>
        </div>

        <HeaderNav
         closeMobileMenu={closeMobileMenu}
         toggleMenu={toggleMenu}
        />
      </div>
    </div>
  )
}

export default Navbar
