import React from "react";
import { FaStar } from "react-icons/fa";

function TestimonialItem(props) {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between">
        <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col justify-end gap-7">
          <img
            src={props.image}
            alt="testimonial images One"
            className="rounded-lg object-cover"
          />
          <div className="flex flex-col justify-end">
            <p className="text-designColor mb-2 text-xs tracking-wide uppercase">
              bound - trolola
            </p>
            <h2 className="capitalize text-2xl font-bold">jone buond joe</h2>
            <p className="capitalize tracking-wide text-base text-gray-500">
              operation officer
            </p>
          </div>
        </div>
        <div className="w-[60%] h-full">
          <img src={props.quote} alt="quote images" className="w-[20%]" />
          <div className="w-full p-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne flex flex-col justify-center gap-8">
            <div className="flex justify-between items-center py-6 border-gray-900 border-b-2">
              <div className="">
                <h3 className="text-2xl font-medium tracking-wide capitalize">
                  travel mobile app design.
                </h3>
                <p className="text-base text-gray-400 mt-2 capitalize">
                  via upwork - mar 2, 2021 - aug 23, 2023 test
                </p>
              </div>
              <div className="flex gap-1 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              dolorum, eos natus ipsum numquam veniam officia necessitatibus
              ratione quos debitis exercitationem repudiandae facilis id neque
              nihil accusantium perspiciatis repellat? Iste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;
