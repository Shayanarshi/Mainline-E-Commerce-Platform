import React from 'react'
import buy from "/assets/home-page/sales/Buy.jpeg";
import upcomingSeason from "/assets/home-page/sales/upcomingSeason.jpeg";
import SetBg from './SetBg';
import { NavLink } from 'react-router-dom';


const SalesCard = () => {
  const data = [
          {
              img: buy,
              heading: "Crazy Deals",
              information: "But 1 Get 1 Free",
              desc: " The Best Classic Dress in on Sale at Cara",
              btn: "Get Now",
          },
          {
              img: upcomingSeason,
              heading: "Spring Season",
              information: "Upcoming Season",
              desc: "The Best Traditional Dress in on Sale at Cara very soon ",
              btn: "Learn More",
          },
      ];
  return (
     <section className="w-[100%] h-auto relative bg-white sm:px-[80px] lg:py-[40px]  lg:pl-[15px] ">
                <div className="crazy-div p-[30px] text-white  lg:flex lg:flex-wrap gap-10 lg:justify-evenly px-[10px] ">
                    {data.map((info, i) => {
                        return (
                            <div
                                key={i}
                                className="relative overflow-hidden rounded-lg crazy p-[30px] w-[580px] h-[50vh]  flex-col justify-center items-start group cursor-pointer  mb-10"
                            >
                                <div className="z-20 relative gap">
                                    <p className="font-semibold text-[25px]">{info.heading}</p>
                                    <h3 className="text-[29px] font-extrabold">
                                        {info.information}
                                    </h3>
                                    <p className="text-[15px] font-extrabold pb-[15px]">
                                        {info.desc}
                                    </p>
                                    <button className="border px-[18px] py-[11px] font-extrabold group-hover:bg-[#088178] group-hover:border-[#088178]">
                                        <NavLink to="/Shop">{info.btn}</NavLink>
                                    </button>
                                </div>
                                <SetBg bg={info.img} />
                            </div>
                        );
                    })}
                </div>
            </section>
  )
}

export default SalesCard
