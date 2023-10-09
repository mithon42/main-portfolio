import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaReact,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const BannerLeft = () => {
  const [text] = useTypewriter({
    words: [
      "professional coder.",
      "frontend developer.",
      "web designer.",
      "react developer.",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 1500,
  });

  return (
    <div className="w-1/2 flex mt-20 flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal uppercase">Welcome to my world</h4>
        <h1 className="text-6xl font-bold text-white capitalize">
          Hi, I'm
          <span className="text-designColor"> mithon</span>
        </h1>
        <h2 className="text-4xl font-bold text-white capitalize italic">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, debitis? Non, suscipit aliquam? Iure, sint eligendi! Similique magni itaque facere, deserunt nobis at dolore libero, modi iste accusantium, perspiciatis officia..
        </p>
      </div>

      <div className="flex justify-between">
        {/* fine me on */}
        <div>
          <h3 className="uppercase text-base font-titleFont mb-4">
            find me on
          </h3>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </div>
        </div>

        {/* best skills */}
        <div>
          <h3 className="uppercase text-base font-titleFont mb-4">
            best skill on
          </h3>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <IoLogoJavascript />
            </span>
            <span className="bannerIcon">
              <FaFigma />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BannerLeft;
