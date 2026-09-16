import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MainDataContext } from '../Contexts/MainContext'
import logo from "/assets/logo.svg"

const Header = () => {

  let { loginUserData, setLoginUserData } = useContext(MainDataContext)
  console.log(loginUserData)

  let logout  = ()=>{
    let updatedData = { ...loginUserData, isLogin: undefined }
    setLoginUserData(updatedData)
    localStorage.setItem("UserDetails", JSON.stringify(updatedData))
  }
  return ( 
    
      <header className='w-full  h-[10vh] bg-[#E3E6F3]  flex justify-between px-20 items-center  fixed top- z-50 '> 
        <img src={logo} alt="logo image" />
        
        <nav className='   flex justify-center gap-10 text-xl font-bold items-center '>
        <NavLink to = {'/'}>Home</NavLink>
        <NavLink to = {'/blogs'}>Blogs</NavLink>
        <NavLink to = {'/about'}>About</NavLink>
        {
          loginUserData?.isLogin !==undefined ?
          <>
          <NavLink to={"auth/shop"}>Shop</NavLink>
          <NavLink to={"auth/profile"}>Profile</NavLink>
           <NavLink to = {"/contact-us"}>Contact</NavLink>
           <NavLink to = {"/auth/cart"}>Cart</NavLink>
        <NavLink onClick={(logout)}
         to = {"/auth/login"}>Logout</NavLink>
          </>
          :<>
        <NavLink to = {"/auth/login"}>Login</NavLink>
        <NavLink to = {"/auth/register"}>Register</NavLink>
          </>
        }
      </nav>
      </header>
  )
}     
export default Header
