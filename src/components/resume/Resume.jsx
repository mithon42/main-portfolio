import React from "react";
import Title from "../layouts/Title";
import Education from "./Education";

function Resume() {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="7+ YEARS OF EXPERIENCEk" subTitle="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li className="resumeLi">education</li>
          <li className="resumeLi">professional skills</li>
          <li className="resumeLi">experience</li>
          <li className="resumeLi">achievements</li>
        </ul>
      </div>
      
      <Education/>
    </section>
  );
}
export default Resume;
