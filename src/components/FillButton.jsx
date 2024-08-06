import React from 'react'

function FillButton( {btnText} ) {
  return (
    <div>
      <button className=" bg-[#EB662B]  py-4 px-10 hover:bg-[#05073C] hover:border-[#05073C] text-white hover:duration-300 rounded-lg text-lg" >{btnText}</button>
    </div>
  )
}

export default FillButton