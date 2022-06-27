import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <div>
      <div class="Btn">{props.name}</div>
    </div>
  )
}

export default Button