import React from 'react'

const Header = ({category, title }) => {
  return (
    <div className='mb-5
    2xl:mb-5
    md:mb-2'>
      <p className='text-gray-400'>
        {category}
      </p>
      <p className='text-3xl font-extrabold tracking-tight text-slate-900 dark:text-gray-300
      2xl:text-3xl
      md:text-2xl'>
        {title}
      </p>
    </div>
  )
}

export default Header