import React from 'react'

const UserDetails = ({user}) => {
  return (
    <li className="collection-item avatar">
      <img src={user.avatar} alt="" className="circle" />
      <span className="title">{user.first_name + ' ' +user.last_name}</span>
      <p>{
      	user.email
      }
      </p>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
  )
}

export default UserDetails;
