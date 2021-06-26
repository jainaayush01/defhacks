import React from 'react'

const Donate = (props) => {
  return (
    <div>
      {/* Donate */}
      Email: {props.payload.identifier}
      {console.log(props)}
    </div>
  )
}

export default Donate
