import React from 'react'

import { Link } from 'react-router-dom'

const PostCards = ({ photo, text, user, title, _id }) => {
  return (
    <div className="Card">
      <Link to={`/posts/${_id}`}>
        <div className="Title">
          <h2>{title}</h2>
        </div>
        <div className="Post-bottom">
          <div className="Post-image">
            <img src={photo} alt={title} loading="lazy" width="255" height="255" />
          </div>
          <div className="Text">
            <h4 className="Post-content">{text}</h4>
            <h5 className="Post-author">Posted by {user.username}</h5>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCards