import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({ imgUrl, box }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '25px'
      }}
    >
      <div className="relative mt5">
        <img id="inputImage" alt="" src={imgUrl} width="550px" heigh="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        />
      </div>
    </div>
  )
}

export default FaceRecognition
