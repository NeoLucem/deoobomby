import React from 'react'
import './Button2.css'
const Button2 = (props) => {
  return (
    <div>
      <div class="Btn2" style={props}>{props.name}</div>
    </div>
  )
}

export default Button2