import React, { useContext } from 'react'
import { MainDataContext } from '../Contexts/MainContext'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
  let {loginUserData} = useContext(MainDataContext);

  if(!loginUserData?.isLogin){
    return <Navigate to = "/auth/login" replace />;
  }
  return <Outlet />
}

export default ProtectedRoutes
