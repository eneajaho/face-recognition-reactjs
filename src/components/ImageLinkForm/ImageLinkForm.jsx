import React from 'react'
import './ImageLinkForm.css'
import Rank from '../Rank/Rank'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="imglinkcontainer">
      <div className="formContainer">
        <Rank />

        <div className="header-text">Detect Faces On Photos</div>
        <div>
          <input
            placeholder="Your image link..."
            className="formStyle"
            type="text"
            onChange={onInputChange}
          />
          <button onClick={onButtonSubmit} type="button" className="btnStyle">
            Check
          </button>
        </div>
      </div>
    </div>
  )
}

export default ImageLinkForm
