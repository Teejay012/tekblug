import React from 'react';
import "./editorialPick.css";
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
        date: "june 30, 2021"
    },
    {
        image: hero,
        cartegory: "ENTREPRENEURSHIP",
        title: "Dynamic Capital Ltd IPO gets oversubscribed by over five times on Day 20",
        date: "june 30, 2021"
    },
]


const EditorialPicks = () => {
  return (
    <div className='editorialPick section__padding'>
      <div className="editorialPick__container">

        <h2 className="editorialPick__heading">
            Editorial picks
        </h2>

        <div className="editorialPick__posts">
            
            <div className="editorialPick__bigger-card">
                {posts.slice(0, 4).map((post) => (
                    <div className="editorialPick__bigger-card_container">
                        <div className="editorialPick__bigger-card-image">
                            <img src={post.image} alt={"post"} />
                        </div>

                        <div className="editorialPick__bigger-card-content">
                            <h4 className='editorialPick__bigger-card-cartegory'>{post.cartegory}</h4>
                            <h3 className="editorialPick__bigger-card-title">{post.title}</h3>
                            <p className="editorialPick__bigger-card-date">{post.date}</p>
                            <p className="editorialPick__bigger-card-description">{post.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            

            
            {/* <div className="editorialPick__smaller-card">
                {posts.slice(4).map((post) => (
                    <div className="editorialPick__smaller-card_container">
                        <div className="editorialPick__smaller-card-image">
                            <img src={post.image} alt={"post"} />
                        </div>

                        <div className="editorialPick__smaller-card-content">
                            <h4 className='editorialPick__smaller-card-cartegory'>{post.cartegory}</h4>
                            <h3 className="editorialPick__smaller-card-title">{post.title}</h3>
                            <p className="editorialPick__smaller-card-date">{post.date}</p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default EditorialPicks
