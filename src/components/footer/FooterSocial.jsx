import React from "react";
import { logo } from "../../assets";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

function FooterSocial() {
  return (
    <div className="w-full h-full flex flex-col gap-7">
      <div>
        <img src={logo} alt="logo images" />
      </div>
      <div className="flex gap-4">
        <span className="bannerIcon group">
          <FaFacebookF className="group-hover:rotate-[360deg] duration-500" />
        </span>
        <span className="bannerIcon group">
          <FaLinkedinIn className="group-hover:rotate-[360deg] duration-500" />
        </span>
        <span className="bannerIcon group">
          <FaGithub className="group-hover:rotate-[360deg] duration-500" />
        </span>
      </div>
    </div>
  );
}

export default FooterSocial;
