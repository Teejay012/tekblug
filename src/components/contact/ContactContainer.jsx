import React from 'react'
import "./contactcontainer.css"

const ContactContainer = () => {
  return (
    <div className='contactContainer section__padding'>
      <div className="contactContainer__container">
        <div className="contactContainer__title">
            <h2 className="contactContainer__heading">
                Contact Us
            </h2>

            <p className="contactContainer__text">
                Please let us know lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
            </p>
        </div>

        <div className="contactContainer__form">
            <form action="#">
                <div className="contactContainer__form-name">

                    <label>Name</label>

                    <div className="contactContainer__form-names">
                        <input type="text" placeholder='First Name' required />
                        <input type="text" placeholder='Second Name' required />
                    </div>
                </div>

                <div className="contactContainer__form-email">
                    <label>Email </label>
                    
                    <input type="text" placeholder='Your Email...' required />
                </div>

                <div className="contactContainer__form-message">
                    <label>Message </label>
                    
                    <textarea required />
                </div>

                <button className="contactContainer__form-btn">
                    SUBMIT
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ContactContainer
