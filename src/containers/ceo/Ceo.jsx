import React from 'react'
import "./ceo.css"
import hero from "./../../assets/hero.png"

const Ceo = () => {
  return (
    <div className='ceo section__padding'>
      <div className="ceo__container">
        <div className="ceo__image">
            <img src={hero} alt="Tee Jay" />
        </div>

        <div className="ceo__content">
            <h2 className="ceo__heading">
                Meet The Ceo
            </h2>

            <p className="ceo__intro">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat facilis culpa numquam sunt eveniet fugiat assumenda ullam dolorem est consequatur neque aliquid blanditiis nesciunt, molestias, libero repellendus rerum maiores?
            </p>

            <a href="#" className="ceo__more">
                Read More
            </a>
        </div>
      </div>
    </div>
  )
}

export default Ceo
