import React from 'react';
import "./trendingnews.css"
import hero from "../../assets/hero.png";



const posts = [
    {
        image: hero,
        cartegory: "ENTREPRENEURSHIP",
        title: "Dynamic Capital Ltd IPO gets oversubscribed by over five times on Day 20",
        date: "june 30, 2021"
    },
    {
        image: hero,
        cartegory: "ENTREPRENEURSHIP",
        title: "Dynamic Capital Ltd IPO gets oversubscribed by over five times on Day 20",
        date: "june 30, 2021"
    },
    {
        image: hero,
        cartegory: "ENTREPRENEURSHIP",
        title: "Dynamic Capital Ltd IPO gets oversubscribed by over five times on Day 20",
        date: "june 30, 2021"
    },
    {
        image: hero,
        cartegory: "ENTREPRENEURSHIP",
        title: "Dynamic Capital Ltd IPO gets oversubscribed by over five times on Day 20",
        date: "june 30, 2021"
    },
]

const TrendingNews = () => {
  return (
    <div className='trendingNews section__padding'>
      <div className="trendingNews__container">
        <h2 className="trendingNews__heading">
            Trending news
        </h2>

        <div className="trendingNews__posts">
            {posts.map((post) => (
                <div className="trendingNews__card">
                    <div className="trendingNews__card-image">
                        <img src={post.image} alt={"post"} />
                    </div>

                    <div className="trendingNews__card-content">
                        <h4 className='trendingNews__card-cartegory'>{post.cartegory}</h4>
                        <h3 className="trendingNews__card-title">{post.title}</h3>
                        <p className="trendingNews__card-date">{post.date}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TrendingNews
