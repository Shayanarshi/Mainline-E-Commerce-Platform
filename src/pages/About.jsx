import React from 'react'
import about from "/assets/About/about-banner.png"
import FeaturesDetails from '../sections/FeaturesDetails';
import PageHeader from '../sections/PageHeader';
import SetBg from '../sections/SetBg';
import video from "/assets/About/bg-video.mp4"
import aboutCard from "/assets/About/a1.jpg"

const About = () => {
    
  const headerData = [
           {
               heading: "#StayCool",
               desc: "Save more with coupons & up to 70% off!",
               img: about,
           },
       ];


  return (
    <article className='pt-[10vh]' >
                <PageHeader HData={headerData} />

                 <section className="about-content px-[80px] py-[40px] relative">
                                <div className="flex flex-wrap justify-between">
                                    <div className="relative about-content-01 w-[40%] h-auto">
                                        <SetBg bg={aboutCard} />
                
                
                                    </div>
                                    <div className="about-content-01 w-[50%] relative">
                                        <h2 className="font-extrabold text-[30px]">Who Are We ?</h2>
                                        <p className="about-content-01-p text-[#465b52] text-[1.2rem] font-semibold leading-[.9] mt-[15px] mb-[20px]">
                                            We are a clothing brand that epitomizes style, quality, and
                                            self-expression. Rooted in our passion for fashion, we strive to
                                            create garments that empower individuals to embrace their unique
                                            identities and make a bold statement. Our brand is built on the
                                            belief that clothing is not just about covering the body, but also
                                            a means of self-discovery and creative expression. But we are more
                                            than just a clothing brand. We are a community of fashion
                                            enthusiasts, dreamers, and trendsetters who come together to
                                            inspire and be inspired. Through our platforms and collaborations,
                                            we foster a space where individuals can connect, share ideas, and
                                            celebrate their love for fashion. At our core, we are committed to
                                            delivering exceptional craftsmanship and attention to detail in
                                            every piece we create. From the sourcing of premium materials to
                                            the meticulous design process, we ensure that our garments meet
                                            the highest standards of quality and durability. We believe that
                                            fashion should be timeless, yet innovative, blending classic
                                            aesthetics with contemporary flair.
                                        </p>
                                        <p className="font-bold border-black inline border border-dashed ">
                                            Come Celebrate Fashion With Us!!
                                        </p>
                                        <div className=" bg-gray-100 border mt-[1rem]">
                                            <p className="sliding-text w-[100%]">
                                                Explore Our New Spring Collection , Head Over To Our Shop
                                                Section Now !{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* CONTENT SECTION END    */}
                
                            {/*  VIDEO SECTION START */}
                            <section className="relative w-[100%] flex flex-col items-center h-auto">
                                <h2 className="about-video-h2 font-bold text-[3rem] pb-[20px]">
                                    Download Our{" "}
                                    <a href="#" className="text-blue-700 underline">
                                        App
                                    </a>
                                </h2>
                                <div className="about-video w-[63%] h-[100vh]  ">
                                    <video autoPlay loop className="rounded-3xl">
                                        <source src={video} type="video/mp4" />
                                    </video>
                                </div>
                            </section>
                            {/* VIDEO SECTION END  */}
                <FeaturesDetails />
            </article>
  )
}

export default About
