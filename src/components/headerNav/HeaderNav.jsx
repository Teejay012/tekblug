import React from 'react';
import "./headerNav.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaPinterestP, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const HeaderNav = (props) => {
  return (
    <div className='header__nav'>
      <div className="header__nav-container">
        <a href="#" className='header__nav-link active'>Home</a>
        <a href="#" className='header__nav-link'>Business News</a>
        <a href="#" className='header__nav-link'>Entrepreneurship</a>
        <a href="#" className='header__nav-link'>Investments</a>
        <a href="#" className='header__nav-link'>Startups</a>
        <a href="#" className='header__nav-link'>About us</a>
        <a href="#" className='header__nav-link'>Contact</a>
      </div>



      {/*  Mobile =========== */}

      {props.toggleMenu && <div className="mobile__nav-container slide-in-top">

        <div className='mobile__navbar-search'>
                <input type="text" placeholder='Search...' />
                <FaSearch className='navbar__socials-icon'/>
        </div>

        <div className="mobile__nav-links">
            <a href="#" className='mobile__header__nav-link active'>Home</a>
            <a href="#" className='mobile__header__nav-link'>Business News</a>
            <a href="#" className='mobile__header__nav-link'>Entrepreneurship</a>
            <a href="#" className='mobile__header__nav-link'>Investments</a>
            <a href="#" className='mobile__header__nav-link'>Startups</a>
            <a href="#" className='mobile__header__nav-link'>About us</a>
            <a href="#" className='mobile__header__nav-link'>Contact</a>
        </div>

        <div className="mobile__navbar_action-btns">
            <a href="#contact__section" className="mobile__navbar-subscribe">SUBSCRIBE</a>

            <a href="#" className="mobile__navbar-login">Log In</a>
        </div>

        <div className="mobile__navbar-socials">
                <FaXTwitter className='navbar__socials-icon' />
                <FaLinkedinIn className='navbar__socials-icon' />
                <FaInstagram className='navbar__socials-icon' />
                <FaFacebookF className='navbar__socials-icon' />
                <FaPinterestP className='navbar__socials-icon' />
        </div>  


        <div className="close__toggle-btn" onClick={props.closeMobileMenu}>
            <IoMdClose className='navbar__socials-icon mobile__navbar_close-btn' />
        </div>
      </div>}
    </div>
  )
}

export default HeaderNav
