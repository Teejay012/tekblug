import React from 'react'
import "./about.css"
import hero from "./../../assets/hero.png"

const About = () => {
  return (
    <div className='about section__padding'>
      <div className="about__container">
        <div className="about__cover-image">
            <img src={hero} alt="Cover Image" />
        </div>

        <div className="about__aboutUs-content">
            <h2 className="about__aboutUs-content_title">
                About Us
            </h2>

            <div className="about__aboutUs-content_info">
                <h3 className="about__aboutUs-content_info-title">
                    We provide articles about Stock Market, Business News, Investments, Startups, and Entrepreneurship. We also provide Paid Downloadable Monthly issues of duis aute irure dolor in reprehenderit.
                </h3>

                <p className="about__aboutUs-content_info-text">
                                        
                    We provide articles about Stock Market, Business News, Investments, Startups, and Entrepreneurship. We also provide Paid Downloadable Monthly issues of duis aute irure dolor in reprehenderit.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    <br />
                    <br />

                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    <br />
                    <br />

                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
        </div>

        <div className="about__guestAuthor">
            <h2 className="about__guestAuthor-title">
                Become a Guest Author
            </h2>

            <h3 className="about__guestAuthor-sub_title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </h3>

            <a href="#" className="about_guestAuthor-start_btn">
                START TODAY
            </a>
        </div>
      </div>
    </div>
  )
}

export default About
