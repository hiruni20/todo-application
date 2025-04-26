import React from 'react'
import logo from '../assets/logo.png'

function User() {
  return (
    <div className='user'>
        <div className='logo'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='info'>
            <p>todo application</p>
            <a href='a'>Logout</a>
        </div>
    </div>
  )
}

export default User