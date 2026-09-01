import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='w-full h-[110vh] relative'>
        <img src="https://carafashionhubbygaganbaghel.vercel.app/assets/home-page/Hero/hero-desktop.png" alt="hero section bg image"
        className=' absolute inset-0  w-full h-full' 
        />

        <section className=' absolute inset-0 bg-black/10 z-20' ></section>

        <img src="https://carafashionhubbygaganbaghel.vercel.app/assets/home-page/Hero/blob.png" alt="hero-section blob image" 
            className='opacity-75 w-[40%] z-30 absolute top-48 left-8'
            />


            <section className='relative z-40 top-78 left-22  flex flex-col gap-2'>
                <p className='text-2xl font-extrabold'>Trade-in-offer</p>
                <h2 
                className='font-bold text-[55px] '>
                    Super value deals <br />
                    <span className='text-[#198880]'>
                        On all products
                    </span>
                </h2>
                <p  className='text-xl'>
                    Save more with coupans & upto 70% off!</p>
                <section className=' relative pt-3'>
                    <img src="https://carafashionhubbygaganbaghel.vercel.app/assets/home-page/Hero/hero-bg-print.png" 
                    alt="Shop Now" width={'300px'} />
                    <NavLink to={"/auth/shop"}
                    className={"absolute inset-0 top-6 left-22 text-xl font-semibold text-[#088178]"}>Shop Now</NavLink>

                </section>
            </section>


    </section>

    
  )
}

export default Hero
