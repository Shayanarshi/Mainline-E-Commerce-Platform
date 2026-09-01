import React, { useContext } from 'react'
import { CartContext } from '../Contexts/CartContext'
import { NavLink } from 'react-router-dom'

const CartPage = () => {
  let { cart, removeFromCart } = useContext(CartContext)
  console.log(cart)

  let totalAmount = cart.reduce((acc, pro) => {
    let price = +(pro.price.slice(1))
    return acc = acc + price
  }, 0)

  console.log(totalAmount)

  return (
    <article className='w-full min-h-[60vh] bg-[#FFFFFF] flex pt-[12vh] '>
      {
        cart.length > 0 ?
          <>
            <section className='flex gap-10 w-[70%] p-6 flex-wrap ' >
              {
                cart.map(product => {
                  return (

                    <section key={product.id}
                      className="rounded-2xl border border-[#CCE7D0] my-[15px] py-[10px] px-[12px] relative">
                      <img
                        src={product.img}
                        alt=""
                        width="283px"
                        className="rounded-2xl"
                      />
                      <div className="relative font-bold mt-2">
                        <p className="">{product.name}</p>
                        <h3 className="pt-[7px] font-extrabold">{product.brandName}</h3>
                        <div className="">{product.rating}</div>
                        <p className="pt-[7px] text-[#088178] font-bold">
                          {product.price}
                        </p>
                      </div>
                      <button onClick={() => removeFromCart(product.id)}
                        className="bg-red-600 text-white cursor-pointer rounded-full absolute px-4 py-2 right-2 bottom-2 font-bold flex items-center"
                      >
                        remove
                      </button>
                    </section>

                  )
                })

              }
            </section>
            <section className='w-[30%] border-l p-3 text-2xl flex flex-col gap-6 font-mono'>
              <p>Total Number of products : {cart.length} </p>
              <p>Total Amount : ${totalAmount} </p>
            </section>
          </>
          :
          <section className='flex flex-col gap-10 justify-center items-center w-full text-2xl font-serif'>
            <p>Cart is Empty !! </p>
            <p>Add the items </p>
            <NavLink to={"/auth/shop"}
              className={"border rounded-2xl px-10 py-2 font-semibold bg-[#088178] text-white  hover:scale-95 hover:shadow-2xl "}

            >Shop Now</NavLink>
          </section>
      }
    </article>
  )
}

export default CartPage