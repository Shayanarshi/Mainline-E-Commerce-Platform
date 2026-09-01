import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { MainDataContext } from '../Contexts/MainContext';

const PrivateRoute = () => {
     let { loginUserData } = useContext(MainDataContext);
    
        if (loginUserData?.isLogin) {
            return <Navigate to="/auth/profile" replace />;
        }
    
  return <Outlet />;
  
}

export default PrivateRoute
