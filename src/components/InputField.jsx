import React from "react";

function InputField( {id,name,type,placeholder,w} ) {
  return (
    <div className={`relative ${ w === 100  ? "w-full" : `w-49`  }   max-lg:w-full mt-2 rounded-md`} >
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-lg focus:ring-2  focus:ring-[#05073C] outline-none sm:text-sm sm:leading-6"
      />
    </div>
  );
}

export default InputField;
