import React from 'react'
import img1 from "/assets/home-page/NewCollection/newFootWear.jpeg";
import img2 from "/assets/home-page/NewCollection/seasonal-sale.jpeg";
import img3 from "/assets/home-page/NewCollection/t-shirt.jpeg";
import SetBg from './SetBg';


const NewCollection = () => {

  const data = [
          {
              heading: "Sessional Sale",
              desc: "Winter Collection - Up to 50% Off",
              bg: img1,
          },
          {
              heading: "New Footwear Collection ",
              desc: "Spring/Summer 2026",
              bg: img2,
          },
          { heading: "T-Shirt", desc: "New Trendy Prints", bg: img3 },   

      ];
  return (
    <section className="w-[100%] h-auto bg-white sm:px-[80px] px-[15px]">
          <div className="relative flex flex-wrap justify-between w-[100%] h-auto">
            {data.map((info, i) => {
              return (
                <div
                  key={i}
                  className="winter  rounded-lg overflow-hidden relative bg-red-400  p-[20px] mb-[20px] w-[30%] h-[30vh]"
                >
                  <div className="flex flex-col absolute justify-center items-start z-20">
                    <h3 className="font-bold text-[22px] leading-[3.5] text-white">
                      {info.heading}
                    </h3>
                    <p className="font-bold text-[15px]">{info.desc}</p>
                  </div>
                  <SetBg bg={info.bg} />
                </div>
              );
            })}
          </div>
        </section>
  )
}

export default NewCollection
