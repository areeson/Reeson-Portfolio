import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize }) => {
  return (
    <button 
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius, paddingTop, paddingBottom, paddingLeft, paddingRight, fontSize }}
      className={`text-${size} pt-4 pr-6 pb-4 pl-6 hover:drop-shadow-xl
      md:text-[1.5rem] md:pt-5 md:pr-8 md:pb-5 md:pl-8
      2xl:text-3xl 2xl:pt-5 2xl:pr-10 2xl:pb-5 2xl:pl-10
      `}>
      {text}
    </button>
  )
}

export default Button