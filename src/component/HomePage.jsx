import React from 'react'
import Carousel from './Carousel'
import HomePageCard from './HomePageCard'
import CarouselCategory from './CarouselCategory'
import CarouselProduct from './CarouselProduct'

const HomePage = () => {
  return (
    <div className='bg-amazonclone-background'>
      
      <Carousel/>
      <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
        <HomePageCard title={"module"} img={'../images/home_grid_1.jpg'}
        link={"see terms"}/>
        <HomePageCard title={"module"} img={'../images/home_grid_2.jpg'}
        link={"see terms"}/>
        <HomePageCard title={"module"} img={'../images/home_grid_3.jpg'}
        link={"see terms"}/>
        <HomePageCard title={"module"} img={'../images/home_grid_4.jpg'}
        link={"see terms"}/>
        <HomePageCard title={"module"} img={'../images/home_grid_5.jpg'}
        link={"see terms"}/>
        <HomePageCard title={"module"} img={'../images/home_grid_6.jpg'}
        link={"see terms"}/>
        <HomePageCard title={"module"} img={'../images/home_grid_7.jpg'}
        link={"see terms"}/>
        <HomePageCard title={"module"} img={'../images/home_grid_8.jpg'}
        link={"see terms"}/>
      
      <div className='m-3 pt-3'>
      <img className='xl:hidden' src='../images/banner_image_2.jpg'/>
      </div>
    </div>
    <CarouselProduct/>
    <CarouselCategory/>
    </div>
  )
}

export default HomePage
