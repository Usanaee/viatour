import React from 'react'

function Checkbox( {label,id,forlabel} ) {
  return (
    <div className='flex items-center gap-5' >
        <input type="checkbox" id={id} name="checkbox" className='h-5 w-5 cursor-pointer border border-gray-300 rounded ' />
        <label htmlFor={forlabel} className='cursor-pointer' >{label}</label>
    </div>
  )
}

export default Checkbox