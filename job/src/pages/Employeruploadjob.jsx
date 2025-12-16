import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './employeruploadjob.css'


function Employeruploadjob() {


   const token=useSelector((s)=>s.job.info)
    

    const [state,setState]=useState({
        title:String,
        company:String,
        salary:String,
        description:String
    })


    function handlechange(e){
        const {name,value}=e.target
        setState({...state,[name]:value})
    }

    function adding(){

   
    console.log('value of token',token);
        axios.post("http://localhost:3000/job/jobup",
            state,
            {headers:{authorization:token}}
        ).then((result)=>{
            setState({
                title: "",
                company: "",
                salary: "",
                description: ""
            })
        })
    }

return (
  <div className="employer-upload">
    <div className="upload-card">
      <h2>Post a New Job</h2>

      <input
        type="text"
        name="title"
        placeholder="Job Title"
        onChange={handlechange}
        value={state.title}
      />

      <input
        type="text"
        name="company"
        placeholder="Company Name"
        onChange={handlechange}
        value={state.company}
      />

      <input
        type="text"
        name="salary"
        placeholder="Salary"
        onChange={handlechange}
        value={state.salary}
      />

      <input
        type="text"
        name="description"
        placeholder="Job Description"
        onChange={handlechange}
        value={state.description}
      />

      <button onClick={adding}>Add Job</button>
    </div>
  </div>
)

}

export default Employeruploadjob