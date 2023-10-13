import React from "react";
import Title from "../layouts/Title";

function Testimonial() {
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" subTitle="testimonial" />
      </div>
    </section>
  );
}

export default Testimonial;
