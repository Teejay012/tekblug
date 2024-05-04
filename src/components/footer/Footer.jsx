import React from 'react'
import "./footer.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaPinterestP, FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

const Footer = () => {
  return (
    <div className='footer section__padding'>
      <div className="footer__container">
        <div className="footer__top-container">
            <div className="footer__top-container_socials-content">
                <h2 className="footer__top-container-heading">
                    Stay Connected
                </h2>

                <div className="footer__top-container_socials">
                    <FaXTwitter className='navbar__socials-icon' />
                    <FaLinkedinIn className='navbar__socials-icon' />
                    <FaInstagram className='navbar__socials-icon' />
                    <FaFacebookF className='navbar__socials-icon' />
                    <FaPinterestP className='navbar__socials-icon' />
                </div>
            </div>


            <div className="footer__top-container_subscribe-content">
                <h2 className="footer__top-container-heading">
                    Subscribe
                </h2>

                <div className="footer__top-container_input-email">
                    <input type="email" placeholder='Email Address' />
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>


        <div className="footer__middle-container">
          <div className="footer__middle-container_logo">
            <h1>TekBlug</h1>
          </div>
          
          <div className="footer__middle-container_nav">
            <h3 className="footer__middle-container_nav-heading">Company</h3>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Advertise</a>
            <a href="#">Reprints & Licensing</a>
            <a href="#">Help Center</a>
          </div>

          <div className="footer__middle-container_nav">
            <h3 className="footer__middle-container_nav-heading">Categories</h3>
            <a href="#">Business News (2)</a>
            <a href="#">Entrepreneurship (3)</a>
            <a href="#">Investments (3)</a>
            <a href="#">Startups (3)</a>
            <a href="#">Stock Market (3)</a>
          </div>

          <div className="footer__middle-container_nav">
            <h3 className="footer__middle-container_nav-heading">Latest News</h3>
            <a href="#">OnlineEasyPay arrives on the online shopping platform ShopOnline.com</a>
            <a href="#">Launches surge – investors seek alternatives to the industry’s biggest names</a>
            <a href="#">News aggregation app Initech raises $100 million from existing investors</a>
          </div>
        </div>


        <div className="footer__bottom-container">
          <p>Copyright © 2024 Tech Magazine | Powered by TekBlog</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
