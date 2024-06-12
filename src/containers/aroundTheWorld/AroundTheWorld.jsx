import React from 'react'
import "./aroundTheWorld.css"
import hero from "../../assets/hero.png"


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

const AroundTheWorld = () => {
  return (
    <div className='aroundTheWorld section__padding'>
      <div className="aroundTheWorld__container">
        <h2 className="aroundTheWorld__heading">
            Around The World
        </h2>

        <div className="aroundTheWorld__post">
            {posts.map((post) => (
                <div className="aroundTheWorld__card">
                    <div className="aroundTheWorld__card-content">
                        <h4 className='aroundTheWorld__card-cartegory'>{post.cartegory}</h4>
                        <h3 className="aroundTheWorld__card-title">{post.title}</h3>
                        <p className="aroundTheWorld__card-date">{post.date}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AroundTheWorld
