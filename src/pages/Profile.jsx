import React, { useContext } from 'react'
import { MainDataContext } from '../Contexts/MainContext'
import user from "/assets/user.png"

const Profile = () => {

  let { loginUserData } = useContext(MainDataContext)

  let { firstName, lastName, email, mobile, dob } = loginUserData || {}

  let fullName = `${firstName || ""} ${lastName || ""}`.trim()

  return (
    <section className="min-h-[80vh] flex justify-center items-center px-6 pt-28 pb-10">

      <div className="w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome back, {firstName.toUpperCase()}!
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Here are your account details
        </p>

        <div className="border rounded-2xl p-8 shadow-sm flex flex-col md:flex-row items-center gap-8">

          <img
            src={user}
            alt={fullName}
            className="w-32 h-32 rounded-full border object-cover"
          />

          <div className="w-full flex flex-col gap-4">

            <div>
              <p className="text-sm text-gray-500">Full Name</p>
              <p className="font-medium">{fullName}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{email}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <div>
                <p className="text-sm text-gray-500">Mobile</p>
                <p className="font-medium">{mobile}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Date of Birth</p>
                <p className="font-medium">{dob}</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Profile