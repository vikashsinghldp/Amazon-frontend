import React from 'react'
import {Navigation } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import { Link } from 'react-router-dom';

const CarouselProduct = () => {
  return (
    <div>
      <Swiper
      slidesPerView={7}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      >
        {
        Array.from({length:9},(_,i)=>
        <SwiperSlide key={i}>
            <Link to={`/product/${i}`}>
                <img src={`../images/product_${i}_small.jpg`} alt="" />
            </Link>
        </SwiperSlide>
        )
        }
      </Swiper>
    </div>
  )
}

export default CarouselProduct
