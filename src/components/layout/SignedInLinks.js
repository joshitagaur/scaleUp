import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/users'>Users</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
      </ul>
    </div>
  )
}

export default SignedInLinks
