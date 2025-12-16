import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../redux/Loginslice'
import { Link } from 'react-router'
import './login.css'

function Login() {


    const [state,setState]=useState({
        email:String,
        password:String
    })

    const dispatch =useDispatch()

    function handlechange(e){
        const {name,value}=e.target
        setState({...state,[name]:value})
    }

    function display(e){
        e.preventDefault();
        try{
            axios.post("http://localhost:3000/login/loggedData",state)
            .then((result)=> dispatch(login(result.data.token)))
            .catch((err)=>console.log(err.message))

           

            console.log('______',localStorage.getItem("info"));
            
        }
        catch(err){
            console.log(err.message);
            
        }
    }

 return (
  <div className="login-page">
    <div className="login-card">
      <h2>Login to JobFinder</h2>

      <form>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          onChange={handlechange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handlechange}
        />

        <button onClick={display}>Login</button>
      </form>

      <div className="login-links">
        <Link to="/reg">Create an account</Link>
      </div>
    </div>
  </div>
)

}

export default Login