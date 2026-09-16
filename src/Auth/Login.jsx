import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MainDataContext } from '../Contexts/MainContext'

const Login = () => { 

  let initialData = {
        username: "",
        password: "",
    }

    let [userData, setUserData] = useState(initialData)
        let { username, password, } = userData
        let navigate = useNavigate()
    
        let handleChange = (event) => {
            let { name, value } = event.target
            setUserData({ ...userData, [name]: value })
        }

        let {setLoginUserData} = useContext(MainDataContext)
    
        let handleSubmit = (event) => {
            event.preventDefault()
            console.log(userData)
         
            let data = JSON.parse(localStorage.getItem("UserDetails"))
            console.log(data)

            if(data.username == username && data.password == password){
              let finalData = { ...data,isLogin: Date.now()}

              setLoginUserData(finalData)
              localStorage.setItem("UserDetails", JSON.stringify(finalData))
               navigate("/auth/profile")
               console.log("login Successfully ")
            }
            
            setUserData (initialData)
        }

  return (
     <section className='w-full pt-30 h-[80vh] flex flex-col pt-15vh items-center gap-8'>
        <h2 className='text-4xl'>Login with Username & password </h2>

        <form onSubmit={handleSubmit}
         className='border px-8 py-14  rounded-2xl
          flex flex-col gap-6 font-mono text-3xl
          bg-slate-800 text-white'>

            <section className='flex gap-6 justify-between required:'>
                <label htmlFor="username">Username</label>
                
                <input onChange={handleChange} value={username}
                 type="text" name="username" id="username" 
                className='border py-2 pl-4 rounded-lg'
                />
            </section>


            <section className='flex gap-6 justify-between'>
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} value = {password}
                className='border py-2 pl-4 rounded-lg'
                 type="password" name="password" id="password" />
            </section>


            <section className='flex justify-center'>
               <button className='border px-20 py-2 rounded-lg mt-7 cursor-pointer'>
                Login
               </button>
            </section>
        </form>
    </section>
  )
}

export default Login
