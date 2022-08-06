import React from 'react'

function Scroll(props) {
  return (
    <div style={{ overflowY: 'scroll', height:'70vh' }}>
      {props.children}
    </div>
  )
}

export default Scroll