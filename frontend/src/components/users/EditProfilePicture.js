import React from 'react'

import { uploadClothesImage } from '../../lib/ext_api'
import ImageUpload from '../common/ImageUpload'

const EditProfile = ({ onChange, onSubmit, toggleModal, modalOpen }) => {

  return (
    <div
      className={modalOpen ? "Modal Modal-inactive" : "Modal"}
    >
      <div className="Edit-profile-pic-form">
        <form
          className=""
          onSubmit={onSubmit}
        >
          <div className="Modal-content">

            <div className="Field">
              <div className="image is128x128">
                <ImageUpload
                  onChange={onChange}
                  preset={uploadClothesImage}
                  name="profilePic"
                  labelText="Or Upload Picture"
                />
              </div>
            </div>
            <div className="Submit">
              <button type="Submit"
                className="Modal-submit-btn">
                Update My Picture
          </button>
            </div>
          </div >
        </form >
        <button
          className="Modal-close"
          onClick={toggleModal}
          aria-label="close">close</button>
      </div>
    </div>
  )
}


export default EditProfile