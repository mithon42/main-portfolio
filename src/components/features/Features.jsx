import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { FaBars, FaGlobe, FaMobile } from "react-icons/fa";
import { SiAntdesign, SiProgress } from "react-icons/si";
import { AiFillAppstore } from "react-icons/ai";

function Features() {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-black">
      <Title title="features" subTitle="what i do" />

      <div className="grid grid-cols-3 gap-16">
        <Card
          title="Business Stratagy"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad quam similique sed libero commodi!"
          icon={<FaBars />}
        />
        <Card
          title="App Developement"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad quam similique sed libero commodi!"
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad quam similique sed libero commodi!"
          icon={<SiProgress/>}
        />
        <Card
          title="Mobile Develpment"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad quam similique sed libero commodi!"
          icon={<FaMobile/>}
        />
        <Card
          title="UI/UX Design"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad quam similique sed libero commodi!"
          icon={<SiAntdesign/>}
        />
        <Card
          title="Hosting Websites"
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ad quam similique sed libero commodi!"
          icon={<FaGlobe/>}
        />
      </div>
    </section>
  );
}

export default Features;
