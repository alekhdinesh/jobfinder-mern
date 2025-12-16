import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router'
import Joblist from './pages/Joblist'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Viewapplyjob from './pages/Viewapplyjob'
import Employeruploadjob from './pages/Employeruploadjob'
import Employerapplicant from './pages/Employerapplicant'
import Findappliedjobemp from './pages/Findappliedjobemp'
import Home from './pages/Home'
import { useSelector } from 'react-redux'
import Navbar from './layout/Navbar'

function App() {
   const token = useSelector((s)=>s.job.info)
   console.log('token',token);
   
  return (
    <BrowserRouter>
     {token && <Navbar />}  
    <Routes>
      <Route path='/' element={token?<Home/>:<Login/>}></Route>
      <Route path='/reg' element={<Registration/>}></Route>
      <Route path='/joblist' element={<Joblist/>} ></Route>
      <Route path='/viewaj' element={<Viewapplyjob/>}></Route>
      <Route path='/uploadjob' element={<Employeruploadjob/>}></Route>
      <Route path='/findappjob' element={<Findappliedjobemp/>}></Route>
      <Route path='/applicants/:jobid' element={<Employerapplicant/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App