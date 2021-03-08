import React from 'react'
import { Hero, Guarantee, Contact } from '../components'
import FeaturedProducts from '../components/FeaturedProducts'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Guarantee />
      <FeaturedProducts />
      <Contact />
    </main>
  )
}

export default HomePage
