import React from 'react'
import "./navlink.css"
import hero from "../../assets/hero.png"



const posts = [
    {
        image: hero,
        cartegory: "ENTREPRENEURSHIP",
        title: "Dynamic Capital Ltd IPO gets oversubscribed by over five times on Day 20",
        date: "june 30, 2021",
        description: "Get the latest issue of our eMagazine lorem ipsum dolor sit amet, consectetur adipisicing elit. Get the latest issue of our eMagazine lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        image: hero,
        cartegory: "ENTREPRENEURSHIP",
        title: "Dynamic Capital Ltd IPO gets oversubscribed by over five times on Day 20",
        date: "june 30, 2021",
        description: "Get the latest issue of our eMagazine lorem ipsum dolor sit amet, consectetur adipisicing elit. Get the latest issue of our eMagazine lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        image: hero,
        cartegory: "ENTREPRENEURSHIP",
        title: "Dynamic Capital Ltd IPO gets oversubscribed by over five times on Day 20",
        date: "june 30, 2021",
        description: "Get the latest issue of our eMagazine lorem ipsum dolor sit amet, consectetur adipisicing elit. Get the latest issue of our eMagazine lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        image: hero,
        cartegory: "ENTREPRENEURSHIP",
        title: "Dynamic Capital Ltd IPO gets oversubscribed by over five times on Day 20",
        date: "june 30, 2021",
        description: "Get the latest issue of our eMagazine lorem ipsum dolor sit amet, consectetur adipisicing elit. Get the latest issue of our eMagazine lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        image: hero,
        cartegory: "ENTREPRENEURSHIP",
        title: "Dynamic Capital Ltd IPO gets oversubscribed by over five times on Day 20",
        date: "june 30, 2021",
        description: "Get the latest issue of our eMagazine lorem ipsum dolor sit amet, consectetur adipisicing elit. Get the latest issue of our eMagazine lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
    {
        image: hero,
        cartegory: "ENTREPRENEURSHIP",
        title: "Dynamic Capital Ltd IPO gets oversubscribed by over five times on Day 20",
        date: "june 30, 2021",
        description: "Get the latest issue of our eMagazine lorem ipsum dolor sit amet, consectetur adipisicing elit. Get the latest issue of our eMagazine lorem ipsum dolor sit amet, consectetur adipisicing elit."
    },
]

const NavLink = () => {
  return (
    <div className='navlink section__padding'>
      <div className="navlink__container">
        <div className="navlink__posts-container">
            <h2 className="navlink__posts-heading">
                Stock Market
            </h2>

            <div className="navlink__posts">
                {posts.map((post) => (
                    <div className="navlink__posts-post">
                        <div className="navlink__posts-post_image">
                            <img src={post.image} alt={"post"} />
                        </div>

                        <div className="navlink__posts-post-content">
                            <h4 className='navlink__posts-post-cartegory'>{post.cartegory}</h4>
                            <h3 className="navlink__posts-post-title">{post.title}</h3>
                            <p className="navlink__posts-post-description">{post.description}</p>
                            <a href="#" className="navlink__posts-post_btn">Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className="navlink__recent-posts_container">
            <div className="navlink__recent-posts">
                <h4 className="navlink__recent-posts_title">
                    Recent Posts
                </h4>

                <a href="#" className="navlink__recent-posts_post">
                    OnlineEasyPay arrives on the online shopping platform ShopOnline.com
                </a>

                <a href="#" className="navlink__recent-posts_post">
                    Launches surge – investors seek alternatives to the industry’s biggest names
                </a>

                <a href="#" className="navlink__recent-posts_post">
                    News aggregation app Initech raises $100 million from existing investors
                </a>

                <a href="#" className="navlink__recent-posts_post">
                    Dynamic Capital Ltd IPO gets oversubscribed by over five times on Day 20
                </a>

                <a href="#" className="navlink__recent-posts_post">
                    Credit Suisse just rehired a specialty-finance dealmaker who’s a double boomerang
                </a>
            </div>

            <div className="navlink__post-categories">
                <h4 className="navlink__post-categories_title">
                    Categories
                </h4>

                <a href="#" className="navlink__post-categories_post">
                    Business News (2)
                </a>

                <a href="#" className="navlink__post-categories_post">
                    Entrepreneurship (3)
                </a>

                <a href="#" className="navlink__post-categories_post">
                    Investments (3)
                </a>

                <a href="#" className="navlink__post-categories_post">
                    Startups (3)
                </a>

                <a href="#" className="navlink__post-categories_post">
                    Stock Market (3)
                </a>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default NavLink
