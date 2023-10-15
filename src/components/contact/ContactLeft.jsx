import React from "react";
import { contactImg } from "../../assets";

function ContactLeft() {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-7 rounded-lg flex flex-col gap-8">
      <img
        src={contactImg}
        alt="contact images"
        className="rounded-lg object-cover"
      />

      <div className="flex flex-col gap-3">
        <h2 className="capitalize text-3xl font-bold text-white">md. mithon ali</h2>
        <h4 className="capitalize text-lg font-normal text-gray-400">react JS develpoer</h4>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p>
        <p className="flex gap-2 items-center text-base text-gray-400">
          <span>Phone:</span>
          <span className="text-lightText">+8801818085003</span>
        </p>
        <p className="flex gap-2 items-center text-base text-gray-400">
          <span>Email:</span>
          <span className="text-lightText">mithonphilip@gmail.com</span>
        </p>
      </div>
    </div>
  );
}

export default ContactLeft;
