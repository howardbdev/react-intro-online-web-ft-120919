import React from 'react'

const Review = (props) => {

  return (
    props.review ?
      <div>
        <h3>{props.review.rating} Stars</h3>
        <p>{props.review.content}</p>
      </div> :
      <h5>Loading Reviews...</h5>
  )
}

export default Review
