import React from 'react'
import { Hero, Guarantee, Contact, CarouselHomeImages } from '../components'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Guarantee />
      <Categories />
      <CarouselHomeImages />
      <FeaturedProducts />
      <Contact />
    </main>
  );
}


export default HomePage
