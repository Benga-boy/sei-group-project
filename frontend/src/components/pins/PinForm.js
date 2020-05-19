import React from 'react'


const PinForm = ({ modalStatus, handleChange, handleSubmit, onClick, title, place, notes, errors }) => {

  return (
    <div
      className={modalStatus ? "modal is-active" : "modal"}
    >
      <div className="modal-background"></div>
      <div className="modal-content">
        <form
          onSubmit={handleSubmit}
          className="column is-3 is-pulled-left	"
        >

<<<<<<< HEAD:frontend/src/components/pins/PinForm.js
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input
            className={`input ${errors.title ? 'is-danger' : ''}`}
            type="text"
            placeholder="What was it you found here?"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
        <small className="help is-danger">Title is required</small>
      </div>

      <div className="field">
        <label className="label">Shop Name</label>
        <div className="control">
          <input
            className={`input ${errors.place ? 'is-danger' : ''}`}
            type="text"
            placeholder="Where?"
            name="place"
            value={place}
            onChange={handleChange}
          />
        </div>
        <small className="help is-danger">Location details are required</small>
      </div>

      <div className="field">
        <label className="label">Notes</label>
        <div className="control">
          <textarea
            className="textarea"
            rows="3"
            type="text"
            placeholder="Notes"
            name="notes"
            value={notes}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
              <button 
              type="submit" 
              className="button is-fullwidth is-primary"
              onClick={onClick}
              >Save Location</button>
              </div>
    </form>
    <button 
=======
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className={`input ${errors.title ? 'is-danger' : ''}`}
                type="text"
                placeholder="What was it you found here?"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </div>
            {errors.title && <small className="help is-danger">{errors.title}</small>}
          </div>

          <div className="field">
            <label className="label">Shop Name</label>
            <div className="control">
              <input
                className={`input ${errors.place ? 'is-danger' : ''}`}
                type="text"
                placeholder="Where?"
                name="place"
                value={place}
                onChange={handleChange}
              />
            </div>
            {errors.place && <small className="help is-danger">{errors.place}</small>}
          </div>
>>>>>>> development:frontend/src/components/users/PinForm.js

          <div className="field">
            <label className="label">Notes</label>
            <div className="control">
              <textarea
                className="textarea"
                rows="3"
                type="text"
                placeholder="Notes"
                name="notes"
                value={notes}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-fullwidth is-primary">Save Location</button>
          </div>
          </form>
          </div>
          </div>


  )
}

export default PinForm