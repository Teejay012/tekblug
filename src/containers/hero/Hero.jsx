import React from 'react'
import "./hero.css"
import hero from "../../assets/hero.png"

const Hero = () => {
  return (
    <div className='hero section__padding'>
      <div className="hero__container">
        <div className="hero__image">
            <img src={hero} alt="hero image" />
        </div>

        <div className="hero__content">
            <h3 className="hero__cartegory">
                INVESTMENT
            </h3>

            <h2 className="hero__title">
                OnlineEasyPay arrives on the online shopping platform ShopOnline.com
            </h2>

            <span className="hero__date">
                April 5, 2024
            </span>

            <p className="hero__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
