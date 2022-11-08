import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize }) => {
  return (
    <button 
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button