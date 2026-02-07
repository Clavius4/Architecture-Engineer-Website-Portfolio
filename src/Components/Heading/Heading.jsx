import React from 'react'
import './Heading.css'
const Heading = ({ head , id}) => {
    return (
        <div className="heading" id={id}>
            <span></span>
            <h2>{head}</h2>
            <span></span>
      </div>
  )
}

export default Heading