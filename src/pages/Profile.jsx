import React, { useContext } from 'react'
import { MainDataContext } from '../Contexts/MainContext'
import user from "/assets/user.png"


const Profile = () => {
  let {loginUserData} = useContext(MainDataContext)
  console.log(loginUserData)
  return (
   <article className='w-full h-screen flex justify-center items-center' >
              <section className='py-14 px-16 bg-slate-800 text-white rounded-4xl ' >
                  <h2 className='text-4xl font-extrabold pb-15 text-center '>
                      Welcome back {loginUserData.username.toUpperCase()} !
                  </h2>
              <article className='w-full h-fit flex gap-6 border p-5 rounded-2xl ' >
                <img src={user} alt={loginUserData.username} className='w-[30%] rounded-full border' />
                      <section className='w-[60%]  font-bold text-2xl '>
                          <p>userame : {loginUserData.username} </p>
                          <p>email : {loginUserData.email} </p>
                      </section>
                  </article>
              </section>
          </article>
  )
}

export default Profile
