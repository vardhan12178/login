import React, { useState } from 'react'
import './login.css'
const Login = () => {
const[data,setData]=useState({mail:'',password:''})

const handleSubmit=()=>{
    console.log(data)
    if(data.mail==="test@test.com" && data.password==="1234"){
        alert("Sucessfully Logged In")
    }else{
        alert("Login failed")
    }
}

    const handleEmail=(event)=>{
        const mail=event.target.value;
        setData({...data,mail:mail})
        
    }
    const handlePassword=(event)=>{
        const password=event.target.value
      
        setData({...data,password:password})
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor='mail'>Email:</label>
        <input id="mail" type="email" onChange={handleEmail}/>
        <label htmlFor='password'>Password :</label>
        <input id="password" type="password" onChange={handlePassword}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
