import React, { createContext, useState } from 'react'

import fp1 from "/assets/home-page/Featured_Product/fp-1.jpeg";
import fp2 from "/assets/home-page/Featured_Product/fp-2.jpeg";
import fp3 from "/assets/home-page/Featured_Product/fp-3.jpeg";
import fp4 from "/assets/home-page/Featured_Product/fp-4.jpeg";
import fp5 from "/assets/home-page/Featured_Product/fp-5.jpeg";
import fp6 from "/assets/home-page/Featured_Product/fp-6.jpeg";
import fp7 from "/assets/home-page/Featured_Product/fp-7.jpeg";
import fp8 from "/assets/home-page/Featured_Product/fp-8.jpeg";
import na1 from "/assets/home-page/New_Arrivals/na-1.jpeg";
import na2 from "/assets/home-page/New_Arrivals/na-2.jpeg";
import na3 from "/assets/home-page/New_Arrivals/na-3.jpeg";
import na4 from "/assets/home-page/New_Arrivals/na-4.jpeg";
import na5 from "/assets/home-page/New_Arrivals/na-5.jpeg";
import na6 from "/assets/home-page/New_Arrivals/na-6.jpeg";
import na7 from "/assets/home-page/New_Arrivals/na-7.jpeg";
import na8 from "/assets/home-page/New_Arrivals/na-8.jpeg";






export let MainDataContext = createContext()

const MainContext = ({children}) => {
   let [loginUserData, setLoginUserData] = useState(() => JSON.parse(localStorage.getItem
    ("UserDetails"))
       )

const [Products, setProducts] = useState([
        {
            img: fp1,
            id: 1,
            name: "Modern Printed Shirt ",
            brandName: "Adidas",
            price: "$78",
            rating: 4,
        },
        {
            img: fp2,
            id: 2,
            name: "Flower Printed Shirt ",
            brandName: "Adidas",
            price: "$80",
            rating: 4,
        },
        {
            img: fp3,
            id: 3,
            name: "Red Flower Half Sleeves Classic Shirt",
            brandName: "Adidas",
            price: "$80",
            rating: 4,
        },
        {
            img: fp4,
            id: 4,
            name: "Minimal Print White Shirt",
            brandName: "Adidas",
            price: "$80",
            rating: 4,
        },
        {
            img: fp5,
            id: 5,
            name: "Classic Print Shirt ",
            brandName: "Adidas",
            price: "$78",
            rating: 4,
        },
        {
            img: fp6,
            id: 6,
            name: "Zen-G ,Overlay Classic Shirt ",
            brandName: "Adidas",
            price: "$100",
            rating: 4,
        },
        {
            img: fp7,
            id: 7,
            name: "aesthetic Old Money Edition ",
            brandName: "Adidas",
            price: "$68",
            rating: 4,
        },
        {
            img: fp8,
            id: 8,
            name: "Classic Print ---",
            brandName: "Adidas",
            price: "$60",
            rating: 4,
        },
        {
            img: na1,
            id: 9,
            name: "Plain Shirt",
            brandName: "Adidas",
            price: "$78",
            rating: 4,
        },

        {
            img: na2,
            id: 10,
            name: "Plain Texture Shirt",
            brandName: "Adidas",
            price: "$60",
            rating: 4,
        },

        {
            img: na3,
            id: 11,
            name: "White Cotton Shirt",
            brandName: "Adidas",
            price: "$60",
            rating: 4,
        },

        {
            img: na4,
            id: 12,
            name: " Half sleeves Printed Shirt",
            brandName: "Adidas",
            price: "$70",
            rating: 4,
        },

        {
            img: na5,
            id: 13,
            name: "Simple Denim Shirt",
            brandName: "Adidas",
            price: "$68",
            rating: 4,
        },

        {
            img: na6,
            id: 14,
            name: "Classic Short",
            brandName: "Adidas",
            price: "$45",
            rating: 4,
        },

        {
            img: na7,
            id: 15,
            name: "Modern Double Pocket Shirt ",
            brandName: "Adidas",
            price: "$80",
            rating: 4,
        },

        {
            img: na8,
            id: 16,
            name: "Half Sleeves Shirt",
            brandName: "Adidas",
            price: "$78",
            rating: 4,
        },
    ]);





  return (
    <MainDataContext.Provider value={{ loginUserData, setLoginUserData,Products, setProducts }} >
        {children}
    </MainDataContext.Provider>
  )
}

export default MainContext
