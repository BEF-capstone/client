import React, { useState } from "react";

const RegistrationForm = ({ onRegister }) => {
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [FirstName, setFirstname] = useState("");
  const [LastName, setLastname] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("password: ", Password)

    onRegister(FirstName, LastName, Username, Email, Password);
  };

  return (
    <>
      <div className="registration-form">
        <h2>Sign Up</h2>

          <form onSubmit={handleSubmit}>

          <label>Email: </label>
          <input className="form-input"
            name = "email"
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Username: </label>
          <input className="form-input"
            name = "text"
            type="text"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>FirstName: </label>
          <input className="form-input"
            name= "FirstName"
            type="text"
            value={FirstName}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />

          <label>LastName: </label>
          <input className="form-input"
            name = "LastName"
            type="text"
            value={LastName}
            onChange={(e) => setLastname(e.target.value)}
            required
          />

          <label>Password: </label>
          <input className="form-input"
            name = 'password'
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>PasswordConfirm: </label>
          <input className="form-input"
            name = "Password Confirm"
            type="password"
            value={PasswordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;