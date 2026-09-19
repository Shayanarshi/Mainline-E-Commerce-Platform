import React, { useContext, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { MainDataContext } from '../Contexts/MainContext'

const Login = () => {

  let initialData = {
    email: "",
    password: ""
  }

  let [userData, setUserData] = useState(initialData)
  let [error, setError] = useState("")
  let [showPassword, setShowPassword] = useState(false)

  let { email, password } = userData

  let navigate = useNavigate()

  let { setLoginUserData } = useContext(MainDataContext)


  let handleChange = (event) => {

    let { name, value } = event.target

    setUserData({
      ...userData,
      [name]: value
    })

    setError("")
  }


  let handleSubmit = (event) => {

    event.preventDefault()

    if (!email || !password) {
      setError("Please fill in both fields.")
      return
    }

    let data = JSON.parse(
      localStorage.getItem("UserDetails")
    )

    if (!data) {
      setError("No account found. Please register first.")
      return
    }

    if (
      data.email.toLowerCase() === email.trim().toLowerCase() &&
      data.password === password
    ) {

      let finalData = {
        ...data,
        isLogin: Date.now()
      }

      setLoginUserData(finalData)

      localStorage.setItem(
        "UserDetails",
        JSON.stringify(finalData)
      )

      navigate("/auth/profile")

    } else {

      setError("Invalid email or password.")

    }
  }


  return (

    <section className="min-h-[80vh] flex justify-center items-center px-6 py-10">

      <div className="w-full max-w-md">

        {/* Heading */}

        <div className="mb-5">

          <h1 className="text-xl font-bold ">
            Welcome Back
          </h1>

          <p className="text-gray-500  text-sm mt-1">
            Login to your account.
          </p>

        </div>


        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-6 sm:p-8 space-y-5"
        >

          {/* Email */}

          <div>

            <label className="font-bold text-sm block mb-2">
              Email address
            </label>

            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none"
            />

          </div>


          {/* Password */}

          <div>

            <label className="font-bold text-sm block mb-2">
              Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 text-sm outline-none"
              />

              <button
                type="button"
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
                onMouseLeave={() => setShowPassword(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                👁️
              </button>

            </div>

          </div>


          {/* Error */}

          {error && (
            <p className="text-red-600 text-sm">
              {error}
            </p>
          )}


          {/* Login Button */}

          <button
            type="submit"
            className="w-full bg-black text-white font-bold py-3 rounded-full"
          >
            Login
          </button>


          {/* Register Link */}

          <p className="text-sm text-gray-500 text-center">

            Don't have an account?{" "}

            <Link
              to="/auth/register"
              className="underline font-medium"
            >
              Create account
            </Link>

          </p>

        </form>

      </div>

    </section>
  )
}

export default Login