import React from "react";

export default function InputField(props) {
  return (
    <div className="w-full flex flex-col gap-[1px]">
      <label htmlFor={props.name} className="w-max text-md text-gray-400">{props.label}</label>
      <input
        type={props.type}
        id={props.name}
        placeholder={props.placeholder}
        className="w-full h-10 text-md text-white rounded-md text-md py-1 px-2 border-2 border-designColor border-opacity-50 outline-none focus:border-blue-500 focus:text-white bg-gray-900"
      />
    </div>
  );
}
