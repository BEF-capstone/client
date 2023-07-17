import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';


const AuthPage = ({onRegister} , { handleLogin } ) => {
  return ( 
    <div className= "AuthPage">


 
        <RegistrationForm onRegister= {onRegister}/>
        <LoginForm handleLogin={handleLogin}/>


    </div>
  )
}

export default AuthPage



