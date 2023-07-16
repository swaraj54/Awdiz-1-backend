import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" })
  const router = useNavigate();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (userData.email && userData.password) {
      const response = await axios.post("http://localhost:8000/login", {
        email: userData.email,
        password: userData.password
      })
      console.log(response.data, "response")
      if (response.data.status == 200) {
        console.log(response.data.data);

        localStorage.setItem("accessToken", JSON.stringify(response.data.data));
        alert(response.data.message)
        router('/');
        setUserData({ email: "", password: "" })
      } else {
        alert("Error please try again..")
      }
    } else {
      alert("Please fill the all fields..")
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} >
        <label>Email</label><br />
        <input value={userData.email} onChange={handleChange} type='email' name="email" /><br />
        <label>Password</label><br />
        <input value={userData.password} onChange={handleChange} type='password' name="password" /><br />
        <input type='submit' value="Login" /><br />
      </form>
    </div>
  )
}

export default Login