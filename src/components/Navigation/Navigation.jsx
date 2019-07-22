import React from 'react'
import Logo from '../Logo/Logo'

const Navigation = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '25px'
      }}
    >
      <Logo />
      <p className="f3 link dim black pa3 pointer">Sign Out</p>
    </nav>
  )
}

export default Navigation
