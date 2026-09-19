import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import InfoTooltip from '../components/InfoTooltip'

const Register = () => {

  let initialData = {
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    mobile: "",
    password: "",
    c_password: ""
  }

  let [userData, setUserData] = useState(initialData)
  let [error, setError] = useState("")
  let [success, setSuccess] = useState("")

  let navigate = useNavigate()

  let {
    firstName,
    lastName,
    dob,
    gender,
    email,
    mobile,
    password,
    c_password
  } = userData


  let handleChange = (event) => {

    let { name, value } = event.target

    setUserData({
      ...userData,
      [name]: value
    })

    setError("")
    setSuccess("")
  }


  let handleSubmit = (event) => {

    event.preventDefault()

    if (
      !firstName ||
      !lastName ||
      !dob ||
      !gender ||
      !email ||
      !mobile ||
      !password ||
      !c_password
    ) {
      setError("Please fill in all fields.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email.")
      return
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Please enter a valid mobile number.")
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.")
      return
    }

    if (password !== c_password) {
      setError("Passwords do not match.")
      return
    }


    let finalData = {
      firstName,
      lastName,
      dob,
      gender,
      email: email.trim().toLowerCase(),
      mobile,
      password,
      isLogin: false
    }


    localStorage.setItem(
      "UserDetails",
      JSON.stringify(finalData)
    )


    setError("")
    setSuccess("Account created successfully!")

    setUserData(initialData)


    setTimeout(() => {
      navigate("/auth/login")
    }, 1500)
  }


  return (

<section className="min-h-screen flex justify-center items-start px-6 pt-[12vh] pb-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow p-6 sm:p-8 space-y-5"
      >

        {/* Heading */}

        <div>

          <h1 className="text-2xl font-bold">
            Create a new account
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Create your account — it's quick and easy.
          </p>

        </div>


        {/* Name */}

        <fieldset>

          <legend className="font-bold text-sm mb-2">
            Name
          </legend>

          <div className="flex gap-3">

            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={firstName}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm"
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={lastName}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm"
            />

          </div>

        </fieldset>


        {/* Date of Birth */}

        <fieldset>

          <legend className="font-bold text-sm mb-2 flex items-center gap-2">

            Date of birth

            <InfoTooltip text="Your birthday won't be shared with anyone unless you choose to." />

          </legend>

          <input
            type="date"
            name="dob"
            value={dob}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />

        </fieldset>


        {/* Gender */}

        <fieldset>

          <legend className="font-bold text-sm mb-2 flex items-center gap-2">

            Gender

            <InfoTooltip text="This helps us personalize your experience." />

          </legend>

          <select
            name="gender"
            value={gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
          >

            <option value="">
              Select your gender
            </option>

            <option value="female">
              Female
            </option>

            <option value="male">
              Male
            </option>

            <option value="others">
              Others
            </option>

          </select>

        </fieldset>


        {/* Email */}

        <div>

          <label className="font-bold text-sm block mb-2">
            Email address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />

        </div>


        {/* Mobile */}

        <div>

          <label className="font-bold text-sm block mb-2">
            Mobile number
          </label>

          <input
            type="text"
            name="mobile"
            placeholder="Mobile number"
            value={mobile}
            onChange={handleChange}
            maxLength="10"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />

        </div>


        {/* Password */}

        <div>

          <label className="font-bold text-sm block mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />

        </div>


        {/* Confirm Password */}

        <div>

          <label className="font-bold text-sm block mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            name="c_password"
            placeholder="Confirm password"
            value={c_password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />

        </div>


        {/* Error */}

        {error && (
          <p className="text-red-600 text-sm">
            {error}
          </p>
        )}


        {/* Success */}

        {success && (
          <p className="text-green-600 text-sm">
            {success}
          </p>
        )}


        {/* Create Account */}

        <button
          type="submit"
          className="w-full bg-black text-white font-bold py-3 rounded-full"
        >
          Create account
        </button>


        {/* Login Link */}

        <p className="text-sm text-gray-500 text-center">

          Already have an account?{" "}

          <Link
            to="/auth/login"
            className="underline font-medium"
          >
            Log in
          </Link>

        </p>

      </form>

    </section>
  )
}

export default Register