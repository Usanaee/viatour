import React from 'react'

function PageHeading({ pageName, tagLine}) {
  return (
    <div className="mt-10 flex-col space-y-2" >
        <h1 className="text-4xl text-[#05073c] font-semibold" > {pageName} </h1>
        {tagLine ? <p className="pl-0.5" > {tagLine} </p> : ""  }
         
    </div>
  )
}

export default PageHeading