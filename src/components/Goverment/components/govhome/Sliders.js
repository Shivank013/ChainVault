// Slider.jsx
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'
import './Sliders.css'

const Sliders = () => {
  return (
    <div className="container">
      <h3 className="text-center section-subheading">- popular Delivery -</h3>
      <h1 className="text-center section-heading">Tranding food</h1>
      <Swiper
        className="tranding-slider"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <SwiperSlide className="tranding-slide">
          {/* Slide 1 content */}
          <div className="tranding-slide-img">
            <img src="images/tranding-food-1.png" alt="Tranding" />
          </div>
          <div className="tranding-slide-content">
            <h1 className="food-price">$20</h1>
            <div className="tranding-slide-content-bottom">
              <h2 className="food-name">Special Pizza</h2>
              <h3 className="food-rating">
                <span>4.5</span>
                <div className="rating">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </h3>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
      <div className="tranding-slider-control">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}

export default Sliders
