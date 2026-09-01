import React from 'react'
import Hero from '../sections/Hero'
import FeaturesDetails from '../sections/FeaturesDetails'
import ExploreMore from '../sections/ExploreMore'
import NewArrivals from '../sections/NewArrivals'
import FeaturedProducts from '../sections/FeaturedProducts'
import SalesCard from '../sections/SalesCard'
import NewCollection from '../sections/NewCollection'
import Newsletter from '../sections/NewsLetter'
import Footer from '../sections/Footer'

const Home = () => {
  return (
   <main >

    <Hero />
    <FeaturesDetails />
    <FeaturedProducts/>
    <ExploreMore />
    <NewArrivals />
    <SalesCard/>
    <NewCollection/>

    
   </main>
  )
}

export default Home
