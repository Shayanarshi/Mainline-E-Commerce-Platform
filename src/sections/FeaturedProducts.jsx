import React from 'react'
import FProductData from './FProductData';

const FeaturedProducts = () => {
  return (
     <div className="relative w-full bg-white px-80px py-40px">
          <div className="FPdiv relative w-full bg-white px-80px py-40px">
            <h2 className=" text-[45px] text-center font-bold">Featured Products</h2>
            <p className="mt-15px mb-20px text-[16px] opacity-75 font-semibold text-center">
              Summer Collection New Modern Design
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
          <FProductData />
          </div>
        </div>
  );
};

export default FeaturedProducts;
