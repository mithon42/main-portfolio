import React from "react";
import { BiSolidRightArrowAlt } from "react-icons/bi";

function Card({ title, des, icon }) {
  return (
    <div className="w-full px-12 py-8 h-80 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-b from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group:">
      <div className="h-72 overflow-y-hidden">
        <div className="flex flex-col gap-8 h-full translate-y-14 group-hover:translate-y-0 transition-translate duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            <span className="text-5xl text-designColor">{icon}</span>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-titleFont font-bold">{title}</h2>
            <p className="base">{des}</p>
            <span className="text-3xl text-designColor">
              <BiSolidRightArrowAlt />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
