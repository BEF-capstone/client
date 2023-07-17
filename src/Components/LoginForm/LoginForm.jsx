import React, { useState } from 'react'
// import "./LoginForm.css"

const LoginForm = ({handleLogin}) => {
    const[Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Error, setError]= useState("")
    
    const handlePasswordChange = (e) => {
          e.preventDefault();
          setPassword(e.target.value)


    }
    const handleEmailChange = (e) => {
          e.preventDefault();
          setEmail(e.target.value)
    }

    const handleSubmit = (e)=>
    {
      e.preventDefault();
      handleLogin(Email, Password)
    }

  return (

    <div className = "login-form">

      <h2> Login In </h2>
      <form onSubmit={handleSubmit}>

      <label>Email:</label>
            <input
            className='form-input'
            name = "email"
            type = "email"
            value = {Email}
            onChange = {handleEmailChange}
            />

         <label>Password:</label>

            <input
            className='form-input'
            name = "Password"
            type = "text"
            value = {Password}
            onChange = {handlePasswordChange}
            />

    <button className='submit-login'> Login </button>
    
    </form>
    </div>

  )
}

export default LoginForm