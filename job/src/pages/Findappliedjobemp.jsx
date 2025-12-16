import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import './findappliedjobemp.css'


function Findappliedjobemp() {

    const [state,setState]=useState()

    const token=useSelector((a)=>a.job.info)
    const navigate=useNavigate()


    useEffect(()=>{

        axios.get("http://localhost:3000/job/getjobs",
        {headers:{authorization:token}}
       ).then((result)=>setState(result.data))
       .catch((err)=>{
        console.log(err.message)
        
       })
       console.log("state value",state);
       


    },[])


 return (
  <div className="find-jobs-page">
    {state?.map((li) => (
      <div className="job-card" key={li._id}>
        <div className="job-info">
          <h3>{li.title}</h3>
          <p>{li.company}</p>
        </div>

        <button onClick={() => navigate(`/applicants/${li._id}`)}>
          View Applicants
        </button>
      </div>
    ))}
  </div>
)

}

export default Findappliedjobemp