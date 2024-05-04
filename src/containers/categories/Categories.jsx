import React from 'react'
import "./categories.css"
import hero from "./../../assets/hero.png"

const categories = [
  {
    image: hero,
    title: "INVESTMENTS",
  },
  {
    image: hero,
    title: "BUSINESS NEWS",
  },
  {
    image: hero,
    title: "ENTREPRENEURSHIP",
  },
  {
    image: hero,
    title: "STARTUPS",
  },
]

const Categories = () => {
  return (
    <div className='categories section__padding'>
      <div className="categories__container">
        <div className="categories__heading">
          Categories
        </div>

        <div className="categories__content">
          {categories.map((category) => (
            <div className="categories__content-card">

              <div className='categories__content-hover'></div>

              <div className="categories__content-card_image">
                <img src={category.image} alt={category.title} />
              </div>

              <h2 className="categories__content-card_title">
                {category.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
