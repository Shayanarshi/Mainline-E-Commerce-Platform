import React, { useContext } from 'react'
import { MainDataContext } from '../Contexts/MainContext'
import { NavLink } from 'react-router-dom'

const NewArrivalsData = () => {
  let {Products} = useContext(MainDataContext)
  return (
    <>
    {
        Products.filter(p=>p.id>8 && p.id<13).map((product, i)=>{
          return(
            <NavLink key={i} to ={`/${product.id}`} className='rounded-2xl border
             border-[#cce7d0] my-4 p-2'>
            <img src={product.img} alt={product.name} width={"283px"}
              className='rounded-2xl'/>

              <section className='relative font-bold mt-2 ' >
                <p>{product.name}</p>
                <p className='pt-2 font-extrabold'>{product.brandName}</p>
                <p>{product.rating}</p>
                <p className='pt-2 text-[#088178]'>{product.price}</p>
                <button className='absolute px-4 py-2 right-0 bottom-0 
                flex items-center bg-[#e3e6f3] rounded-full'>Add to Cart</button>
              </section>
            </NavLink>

      
          )
        })

    }
    </>
  )
}
export default NewArrivalsData
