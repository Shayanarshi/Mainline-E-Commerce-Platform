import React, { useState } from 'react'
const Register = () => {
        let initialData ={
            username : "",
            email : "",
            password : "",
            c_password : "",
        }

        let [userData , setUserData] = useState(initialData)

        let {username,email,password,c_password} = userData


        let handleChange = (event)=>{
            let{name,value} = event.target 
            setUserData({ ...userData,[name]:value})
        }

        let handleSubmit =(event)=>{
            event.preventDefault()
            console.log(userData)
             // ! store the user data in the localStorage
            localStorage.setItem("UserDetails",JSON.stringify(userData))
            setUserData (initialData)
        }


  return (
    <section className='w-full pt-20 h-screen flex flex-col  items-center gap-8'>
        <h2 className='text-4xl'>Create a New Account </h2>

        <form onSubmit={handleSubmit}
         className='border px-8 py-14  rounded-2xl
          flex flex-col gap-6 font-mono text-3xl
          bg-slate-800 text-white'>

            <section className='flex gap-6 justify-between'>
                <label htmlFor="username">username</label>
                
                <input onChange={handleChange} value={username}
                 type="text" name="username" id="username" 
                className='border py-2 pl-4 rounded-lg'
                />
            </section>



            <section className='flex gap-6 justify-between'>
                <label htmlFor="email">email</label>
                <input onChange={handleChange}  value = {email}
                className='border py-2 pl-4 rounded-lg'
                type="email" name="email" id="email" />
            </section>



            <section className='flex gap-6 justify-between'>
                <label htmlFor="password">password</label>
                <input onChange={handleChange} value = {password}
                className='border py-2 pl-4 rounded-lg'
                 type="password" name="password" id="password" />
            </section>


            <section className='flex gap-6 justify-between'>
                <label htmlFor="c_password">Confirm Password</label>
                <input onChange={handleChange} value = {c_password}
                className='border py-2 pl-4 rounded-lg'
                 type="password" name="c_password" id="c_password" />
            </section>

            <section className='flex justify-center'>
               <button className='border px-20 py-2 rounded-lg mt-7 cursor-pointer'>
                Register
               </button>
            </section>
        </form>
    </section>
  )
}

export default Register
