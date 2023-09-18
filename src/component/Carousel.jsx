import { Autoplay, Navigation } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
const Carousel = () => {
  return (
    <div className='h-[600px] bg-white'>
      <Swiper
      loop={true}
      spaceBetween={0}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay:4000
      }}
      className='h-[50%]'
      >
        <SwiperSlide>
          <img src='../images/carousel_1.jpg' alt='image1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='../images/carousel_2.jpg' alt='image1'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src='../images/carousel_3.jpg' alt='image1'/>
        </SwiperSlide>
        <SwiperSlide>
          <video controls>
            <source src={'../images/carousel_vid.mp4'} type='video/mp4'/>
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src='../images/carousel_4.jpg' alt='image1'/>
        </SwiperSlide>
       

      </Swiper>
      <div className='h-[50%] bg-gradient-to-b from-stone-900'>

      </div>
      
    </div>
  )
}

export default Carousel
