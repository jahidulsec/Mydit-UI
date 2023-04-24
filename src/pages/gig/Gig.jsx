import React from 'react'
import "./Gig.scss"
import { Slider } from 'infinite-react-carousel/lib'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'

const Gig = () => {

  const {id} = useParams()
  console.log(id)



  return (
    <div className='gig'>
      
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">MYDIT {">"} TRADITIONAL {">"}</span>
          <h1>I will design and create high wedding dresses</h1>

          
            <div className="user">
              <img className='pp' src={"/img/noavatar.jpg"} alt="" />
              <span>John Doe</span>
                
                <div className="stars">
                <img src="/img/star.png" alt=""  />
                <img src="/img/star.png" alt=""  />
                <img src="/img/star.png" alt=""  />
                <img src="/img/star.png" alt=""  />
                <img src="/img/star.png" alt=""  />

                  <span>5</span>
                </div>
              
            </div>
          
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              
                <img src="https://img.freepik.com/free-vector/set-sketches-beautiful-diverse-female-fashion-outfits_1150-50902.jpg" alt="" />
                <img src="https://img.freepik.com/free-vector/set-sketches-beautiful-diverse-female-fashion-outfits_1150-50902.jpg" alt="" />
                <img src="https://img.freepik.com/free-vector/set-sketches-beautiful-diverse-female-fashion-outfits_1150-50902.jpg" alt="" />

            </Slider>
          <h2>About this gig</h2>
          <p>
            Gig description
          </p>
          <div className="seller">
            <h2>About the seller</h2>
              <div className="user">
               <img src={"/img/noavatar.jpg"} alt="" />
               <div className="info">
                 <span>John Doe</span>
                     <div className="stars">
                       
                         <img src="/img/star.png" alt="" />
                         <img src="/img/star.png" alt="" />
                         <img src="/img/star.png" alt="" />
                         <img src="/img/star.png" alt="" />
                         <img src="/img/star.png" alt="" />

                       <span>
                             5
                       </span>
                     </div>
                 
                 <button>Contact me</button>
               </div>
              </div>
            
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Jul 2021</span>
                </div>
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">1 hour</span>
                </div>
                <div className="item">
                  <span className="title">Last Delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">Vietnamese ,English</span>
                </div>
              </div>
              <hr />
              <p>
              I will design and create high wedding dresses
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Review</h2>
            <div className="item">
              <div className="user">
                <img className='pp' src="/img/noavatar.jpg" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://cdn-icons-png.flaticon.com/512/555/555526.png" alt="" />
                    <span> United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I definitely love working with this artist. 
                She takes all my asks into consideration and illustrates them beautifully! Thank you!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="/img/noavatar.jpg" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://cdn-icons-png.flaticon.com/512/555/555526.png" alt="" />
                    <span> United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I definitely love working with this artist. 
                She takes all my asks into consideration and illustrates them beautifully! Thank you!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img className='pp' src="/img/noavatar.jpg" alt="" />
                <div className="info">
                  <span>John Doe</span>
                  <div className="country">
                    <img src="https://cdn-icons-png.flaticon.com/512/555/555526.png" alt="" />
                    <span> United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I definitely love working with this artist. 
                She takes all my asks into consideration and illustrates them beautifully! Thank you!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Traditional</h3>
            <h3>$ 79.00</h3>
          </div>
          <p>
            Traditional dress short desc
          </p>
          <div className="details">
            <div className="item">
            <img src="/img/clock.png" alt="" />
            <span>2 days delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
                <div className="item" >
                  <span style={{color: "#9900ff"}} class="material-symbols-outlined">
                    check
                  </span>
                  <span>feature 1</span>
                </div>
                <div className="item" >
                  <span style={{color: "#9900ff"}} class="material-symbols-outlined">
                    check
                  </span>
                  <span>feature 1</span>
                </div>
                <div className="item" >
                  <span style={{color: "#9900ff"}} class="material-symbols-outlined">
                    check
                  </span>
                  <span>feature 1</span>
                </div>
                <div className="item" >
                  <span style={{color: "#9900ff"}} class="material-symbols-outlined">
                    check
                  </span>
                  <span>feature 1</span>
                </div>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gig