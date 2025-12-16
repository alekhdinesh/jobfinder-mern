import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/Loginslice'

function Navbar() {
  const token = useSelector((s) => s.job.info)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (!token) return null  

  function handleLogout() {
    dispatch(logout())
    navigate('/')
  }

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>JobFinder</h2>

      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <button onClick={handleLogout} style={styles.btn}>Logout</button>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 20px',
    background: '#1f2937',
    color: '#fff'
  },
  logo: {
    margin: 0
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '15px'
  },
  btn: {
    background: '#ef4444',
    border: 'none',
    padding: '6px 12px',
    color: '#fff',
    cursor: 'pointer',
    borderRadius: '4px'
  }
}

export default Navbar
