import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './joblist.css'

function Joblist() {

    const [job,setJob]=useState([])

    const a=useSelector((state)=>state.job.info)
    console.log('data of a',a);
    


    useEffect(()=>{

        try{
            axios.get("http://localhost:3000/job/viewjobs")
            .then((result)=>{setJob(result.data)})
            .catch((err)=>{console.log(err)})
            console.log('view jobs.....',job);
            

        }
        catch(err){
            console.log(err.message);
            
        }
    },[])



    function apply(id){
        axios.post(`http://localhost:3000/jobapply/application/${id}`,
            {resume:"resume.pdf"},
            {headers:{authorization:a}}
        ).then((data)=>console.log(data))
        .catch((err)=>console.log(err)
        )
        
    }



 return (
  <div className="joblist-page">
    {job?.map((li) => (
      <div className="job-card" key={li._id}>
        <h1>{li.title}</h1>
        <h2><strong>Company:</strong> {li.company}</h2>
        <h2><strong>Salary:</strong> {li.salary}</h2>
        <h2><strong>Description:</strong> {li.description}</h2>

        <button onClick={() => apply(li._id)}>
          Apply
        </button>
      </div>
    ))}
  </div>
)

}

export default Joblist