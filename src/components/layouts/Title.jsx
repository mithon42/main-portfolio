import React from "react";

function Title({ title, subTitle }) {
  return (
    <div className="flex flex-col gap-4 font-titleFont mb-14">
      <h3 className="text-sm font-light uppercase text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-5xl text-gray-300 font-bold capitalize">
        {subTitle}
      </h1>
    </div>
  );
}

export default Title;