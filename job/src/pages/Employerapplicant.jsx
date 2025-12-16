import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router'
import './employerapplicant.css'

function Employerapplicant() {

    const token=useSelector((a)=>a.job.info)

    const {jobid}=useParams()
    console.log('@@@@@@@@',{jobid});
    
    

    const [apps,setApps]=useState();
    useEffect(()=>{
        
        axios.get(`http://localhost:3000/jobapply/findappjob/${jobid}`,
            {headers:{authorization:token}}
        ).then((result)=>{console.log("######",result.data),setApps(result.data) })
        .catch((err)=>console.log(err.message)
        )

        console.log("//////",apps);
        
    },[jobid])


    function updatestatus(appid,status){
       

        axios.patch(`http://localhost:3000/jobapply/update/${appid}`,
            {status:status},
            {headers:{authorization:token}}
        )
        .then(()=>alert("status updated"))
        .catch((err)=>console.log(err.message))
        refresh()
        
    }

    function refresh(){
         

         axios.get(`http://localhost:3000/jobapply/findappjob/${jobid}`,
            {headers:{authorization:token}}
        ).then((result)=>setApps(result.data))
        .catch((err)=>console.log(err.message)
        )
    }


return (
  <div className="employer-applicants">
    {apps?.map((li) => (
      <div className="applicant-card" key={li._id}>
        <h3><span>Job:</span> {li.jobid.title}</h3>
        <h3><span>Company:</span> {li.jobid.company}</h3>
        <h3><span>Name:</span> {li.userid.name}</h3>
        <h3><span>Email:</span> {li.userid.email}</h3>

        <span className={`status ${li.status}`}>
          {li.status}
        </span>

        <div className="action-buttons">
          <button
            className="btn-accept"
            onClick={() => updatestatus(li._id, "Accepted")}
          >
            Accept
          </button>

          <button
            className="btn-reject"
            onClick={() => updatestatus(li._id, "Rejected")}
          >
            Reject
          </button>

          <button
            className="btn-viewed"
            onClick={() => updatestatus(li._id, "Viewed")}
          >
            Mark Viewed
          </button>
        </div>
      </div>
    ))}
  </div>
)

}

export default Employerapplicant