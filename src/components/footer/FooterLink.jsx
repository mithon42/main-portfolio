import React from "react";

function FooterLink(props) {
  return (
    <div className="w-full h-full flex flex-col gap-7">
      <h2 className="uppercase text-designColor tracking-wider text-xl">
        {props.title}
      </h2>
      <ul className="flex flex-col gap-4 py-1 capitalize font-titleFont overflow-hidden">
        <li>
          <span className="w-full text-md hover:text-designColor duration-300 cursor-pointer relative group">
            {props.link1}
            <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform"></span>
          </span>
        </li>
        <li>
          <span className="w-full text-md hover:text-designColor duration-300 cursor-pointer relative group">
            {props.link2}
            <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform"></span>
          </span>
        </li>
        <li>
          <span className="w-full text-md hover:text-designColor duration-300 cursor-pointer relative group">
            {props.link3}
            <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform"></span>
          </span>
        </li>
        <li>
          <span className="w-full text-md hover:text-designColor duration-300 cursor-pointer relative group">
            {props.link4}
            <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform"></span>
          </span>
        </li>
        <li>
          <span className="w-full text-md hover:text-designColor duration-300 cursor-pointer relative group">
            {props.link5}
            <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 duration-300 transition-transform"></span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default FooterLink;
