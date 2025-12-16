import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import {jwtDecode} from 'jwt-decode'
import { logout } from '../redux/Loginslice'
import './home.css'

function Home() {
  const token = useSelector((s) => s.job.info)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let role = null

  if (token) {
    const decoded = jwtDecode(token)
    role = decoded.role
  }

  function handleLogout() {
    dispatch(logout())
    navigate('/')
  }

  return (
  <div className="home-page">
    <div className="dashboard-card">
      <h1>Welcome to JobFinder</h1>

      {/* EMPLOYER DASHBOARD */}
      {role === 'employer' && (
        <>
          <h2>Employer Dashboard</h2>

          <div className="dashboard-actions">
            <Link to="/uploadjob">
              <button>Upload Job</button>
            </Link>

            <Link to="/findappjob">
              <button>View My Jobs</button>
            </Link>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </>
      )}

      {/* USER DASHBOARD */}
      {role === 'user' && (
        <>
          <h2>User Dashboard</h2>

          <div className="dashboard-actions">
            <Link to="/joblist">
              <button>View Jobs</button>
            </Link>

            <Link to="/viewaj">
              <button>My Applications</button>
            </Link>

            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  </div>
)

}

export default Home
