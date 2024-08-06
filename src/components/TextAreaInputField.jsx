import React from "react";

function TextAreaInputField( {rows,id,name,type,placeholder,columns,w} ) {
  return (
    <div className={`relative mt-2 max-lg:w-full rounded-md ${ w === 100  ? "w-full" : `w-49`}  `}>
      <textarea
        rows={rows}
        columns={columns}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border-0 py-3 pl-7 placeholder:text-lg  pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-[#05073C] outline-none sm:text-sm sm:leading-6"
      />
    </div>
  );
}

export default TextAreaInputField;
