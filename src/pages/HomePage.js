import React from 'react'
import { Hero, Guarantee, Contact } from '../components'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Guarantee />
      <Categories />
      <FeaturedProducts />
      <Contact />
    </main>
  )
}

export default HomePage
