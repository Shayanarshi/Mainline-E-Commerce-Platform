import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MainDataContext } from "../Contexts/MainContext";
import { CartContext } from "../Contexts/CartContext";

const ProductDetails = () => {
  const { Products } = useContext(MainDataContext);
  const { addToCart } = useContext(CartContext)

  const { id } = useParams();

  const [val, setVal] = useState("1");
  const increment = () => {
    setVal(parseInt(val) + 1);
  };
  const decrement = () => {
    if (val > 1) {
      setVal(parseInt(val) - 1);
    }
  };

  return (
    <>
      {Products.filter((info) => info.id == id).map((value, i) => {
        return (
          <section
            key={i}
            className="shop-card w-full relative bg-white pt-[12vh]  px-[80px] "
          >
            <div className="shop-item w-[100%]  flex flex-wrap">
              <div className="shop-item-01 w-[41%] relative mr-[50px] ">
                <img src={value.img} alt="" className="w-[100%] " />
              </div>

              <div className="shop-item-01 w-[48%] pt-[20px] ">
                <p className="font-bold text-[12px]">Home/T-shirt</p>
                <h3 className="item-name font-bold text-[20px] pt-[40px] pb-[20px]">
                  {value.name}
                </h3>
                <h2 className="text-[26px] leading-[3.4rem] font-extrabold">
                  {value.price}
                </h2>
                <select className="border px-[10px] py-[5px] text-[13px] font-bold border-gray-400 rounded-md block  mb-[10px] bg-gray-300">
                  <option value="">Select Size</option>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                  <option value="">2XL</option>
                  <option value="">3XL</option>
                </select>

                <button
                  onClick={decrement}
                  className="bg-zinc-200 drop-shadow-lg h-[40px] w-10 "
                >
                  -
                </button>
                <input
                  type="text"
                  name="count"
                  id="count"
                  value={val}
                  class="card-table-item-quantity  w-[20px] h-[40px]  ml-2"
                />
                <button
                  onClick={increment}
                  className=" bg-zinc-200 drop-shadow-lg h-[40px] w-10 "
                >
                  +
                </button>

                <button
                  onClick={()=>addToCart(value)}
                  className=" rounded-lg  ml-10 font-bold text-white bg-[#088178] py-[12px] px-[30px] text-[1.2rem]"
                >
                  Add to cart
                </button>
                <p className="item-product text-[20px] font-bold pt-[40px] pb-[20px] text-[#222]">
                  Product Details
                </p>
                <span className="item-detail font-bold leading-[1.5rem] text-[15px]">
                  Introducing our latest fashion masterpiece, the "Vibrant
                  Spring" shirt! Embrace the captivating allure of nature's most
                  mesmerizing phenomenon with this truly enchanting garment. Let
                  it be a symbol of your adventurous spirit and your love for
                  the extraordinary. Dare to be different and illuminate every
                  room you enter with your unique sense of style. Crafted with
                  meticulous attention to detail, this shirt showcases an
                  exquisite blend of style and comfort. The fabric, a luxurious
                  blend of soft cotton and breathable polyester, drapes
                  effortlessly against your skin, providing a soothing touch and
                  ensuring all-day comfort.
                </span>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ProductDetails;