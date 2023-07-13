import React from 'react'
import 'react-slideshow-image/dist/styles.css';
import {Fade,Zoom,Slide} from 'react-slideshow-image';




const Carousel = ({ data }) => {
  return (
    <div className='swiper'>
      <Fade>
      {data.map((item, index) => {
        return (
            <div className="swiper-wrapper">
              <div className='swiper-slide'>
                <div className="testimonial-item">
                  <img src={item.image} className="testimonial-img" key={index} />
                  <h3>{item.name}</h3>
                  <h4>{item.title}</h4>
                </div>
              </div>
            </div>
        )
      })}
      </Fade>
    </div>
  )
}

export default Carousel;
