import React from 'react'
import Tilt from 'react-tilt'
import './logo.css'
import brain from './logo.png'

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 120, width: 120 }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: '10px' }} src={brain} alt="" />{' '}
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
