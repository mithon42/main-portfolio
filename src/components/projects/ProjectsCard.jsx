import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";

function ProjectsCard(props) {
  return (
    <div className="p-4 md:p-7 h-auto w-full rounded-lg flex flex-col gap-5  shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-60	">
        <img src={props.imgSrc} alt={props.alt} className="rounded-xl w-full h-full object-cover group-hover:scale-110 duration-300"/>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="uppercase text-designColor text-lg">{props.title}</h3>
        <div className="flex gap-2">
          <FaGithub className="text-4xl bg-black p-2 rounded-full hover:text-designColor cursor-pointer duration-400"/>
          <FaGlobe className="text-4xl bg-black p-2 rounded-full hover:text-designColor cursor-pointer duration-400"/>
        </div>
      </div>
      <p className="text-sm tracking-wide hover:text-gray-100 duration-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, tempore.
        Facilis, ex officia perspiciatis ducimus aspernatur doloremque illum
        adipisci culpa.
      </p>
    </div>
  );
}

export default ProjectsCard;
