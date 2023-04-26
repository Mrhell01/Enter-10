import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import SignIn from './Pages/Login';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
const PrivateRoute = () => {

  return (
    <>
    <div className="opacity-75" style={{color: "black",
    backgroundColor: "white",
    padding: "10px",
        fontFamily: "Sans-Serif",
        textAlign: "center"
      }}>
      Private Router
      </div>
    
    </>
    
  )
}

export default PrivateRoute
