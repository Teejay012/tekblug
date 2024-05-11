import React from 'react'
import "./postarticle.css"
import hero from "./../../assets/hero.png"

const PostArticle = () => {
  return (
    <div className='postArticle section__padding'>
      <div className="postArticle__container">
        <div className="postArticle__image">
            <img src={hero} alt="cover image" />
        </div>

        <div className="postArticle__content">
            <h2 className="postArticle__title">
                News aggregation app Initech raises $100 million from existing investors
            </h2>

            <h4 className="postArticle__sub-title">
                Leave a Comment / Investments, Stock Market / By Alex
            </h4>

            <p className="postArticle__post-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

             <br />
             <br />
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

             <br />
             <br />
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>

        <div className="postArticle__comments">
            <div className="postArticle__new-comment">
                <h3 className="postArticle__heading">
                    Leave a Comment
                </h3>

                <textarea className="postArticle__input-comment" placeholder='Post Your Comment...'></textarea>

                <button className='postArticle__btn'>Post Comment =</button>
            </div>

            <div className="postArticle__posted-comments">

                <h3 className="postArticle__posted-comments_heading">
                    Other Comments
                </h3>
                <div className="postArticle__posted-comment_user">
                    <h4 className="postArticle__posted-comment_user-name">
                        Teejay :
                    </h4>

                    <p className="postArticle__posted-comment_user-comment">
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="postArticle__posted-comment_user">
                    <h4 className="postArticle__posted-comment_user-name">
                        Teejay :
                    </h4>

                    <p className="postArticle__posted-comment_user-comment">
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="postArticle__posted-comment_user">
                    <h4 className="postArticle__posted-comment_user-name">
                        Teejay :
                    </h4>

                    <p className="postArticle__posted-comment_user-comment">
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>

        <h3 className="postArticle__similar-posts_heading">
                Similar Posts
        </h3>

        <div className="postArticle__similar-posts">

            <div className="postArticle__card">
                <div className="postArticle__card-image">
                    <img src={hero} alt={"post"} />
                </div>

                <div className="postArticle__card-content">
                    <h4 className='postArticle__card-cartegory'>INVESTMENT</h4>
                    <h3 className="postArticle__card-title">News aggregation app Initech raises $100 million from existing investors</h3>
                    <p className="postArticle__card-date">july 2024</p>
                </div>
            </div>

            <div className="postArticle__card">
                <div className="postArticle__card-image">
                    <img src={hero} alt={"post"} />
                </div>

                <div className="postArticle__card-content">
                    <h4 className='postArticle__card-cartegory'>INVESTMENT</h4>
                    <h3 className="postArticle__card-title">News aggregation app Initech raises $100 million from existing investors</h3>
                    <p className="postArticle__card-date">july 2024</p>
                </div>
            </div>

            <div className="postArticle__card">
                <div className="postArticle__card-image">
                    <img src={hero} alt={"post"} />
                </div>

                <div className="postArticle__card-content">
                    <h4 className='postArticle__card-cartegory'>INVESTMENT</h4>
                    <h3 className="postArticle__card-title">News aggregation app Initech raises $100 million from existing investors</h3>
                    <p className="postArticle__card-date">july 2024</p>
                </div>
            </div>

            <div className="postArticle__card">
                <div className="postArticle__card-image">
                    <img src={hero} alt={"post"} />
                </div>

                <div className="postArticle__card-content">
                    <h4 className='postArticle__card-cartegory'>INVESTMENT</h4>
                    <h3 className="postArticle__card-title">News aggregation app Initech raises $100 million from existing investors</h3>
                    <p className="postArticle__card-date">july 2024</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PostArticle
