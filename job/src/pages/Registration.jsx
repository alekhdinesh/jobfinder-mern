import axios from 'axios';
import React, { useState } from 'react'
import './registration.css'

function Registration() {
    const [state,setState]=useState({
        name:String,
        email:String,
        password:String
    })


    function handlechange(e){
        const {name,value}=e.target
        setState({...state,[name]:value})
    }



function register(e){
    e.preventDefault();
    try{
        axios.post("http://localhost:3000/reg/registerData",state)
        .then((result)=>console.log("data from backend",result))
        .catch((err)=>console.log(err.message))

    }
    catch(err){
        console.log(err.message);
        
    }

}


return (
  <div className="register-page">
    <div className="register-card">
      <h2>Create Account</h2>

      <form>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          onChange={handlechange}
        />

        <input
          type="text"
          placeholder="Enter email"
          name="email"
          onChange={handlechange}
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlechange}
        />

        <button onClick={register}>Sign Up</button>
      </form>

      <div className="register-links">
        <p>
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  </div>
)

}

export default Registration