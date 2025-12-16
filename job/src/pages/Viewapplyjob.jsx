import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './Viewapplyjob.css'   // <-- Add this

function Viewapplyjob() {

    const [state,setState]=useState([])
    const token = useSelector((s)=>s.job.info)

    useEffect(()=>{
        axios.get("http://localhost:3000/jobapply/myapp",
            {headers:{authorization:token}}
        )
        .then((result)=>setState(result.data))
        .catch((err)=>console.log(err))
    },[])

  return (
   <div className="jobs-container">

    {state?.map((li)=>(
        <div className="job-card">
            <h2>{li.jobid?.title}</h2>
            <p><strong>Company:</strong> {li.jobid?.company}</p>
            <p><strong>Salary:</strong> {li.jobid?.salary}</p>
            <p><strong>Description:</strong> {li.jobid?.description}</p>

            <p><strong>Resume:</strong> {li.resume}</p>

            <span className={
              `status ${
                li.status === "Accepted" ? "accepted" :
                li.status === "Rejected" ? "rejected" :
                "viewed"
              }`
            }>
              {li.status}
            </span>

        </div>
    ))}

   </div>
  )
}

export default Viewapplyjob
