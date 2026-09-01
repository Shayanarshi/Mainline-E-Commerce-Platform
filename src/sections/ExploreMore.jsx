import React from 'react'
import banner from "/assets/home-page/super-sale.jpeg"
import { NavLink } from 'react-router-dom'

const ExploreMore = () => {
  return (
    <section className='w-full h-[40vh] flex flex-col justify-center 
    items-center text-white relative gap-2 '>
      <p>Super Sale</p>
      <h2 className='py-2 font-extrabold text-3xl'>
        Up to
        <span className='text-[#ef3636]'>70% off </span>
          All t-shirt & Accessories
      </h2>


      <button className='px-4 py-2 bg-white text-black font-bold text-2xl
      rounded-md'>
        <NavLink to ={"/auth/shop"}>Explore More</NavLink>
      </button>


      <img src={banner} alt="banner image of explore more section"
      className='w-full h-full absolute inset-0 -z-10' />
    </section>
  )
}

export default ExploreMore;
