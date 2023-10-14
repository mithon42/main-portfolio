import React, { useState } from "react";
import Slider from "react-slick";
import Title from "../layouts/Title";
import { quote, testimonialOne, testimonialTwo } from "../../assets";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialItem from "./TestimonialItem";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-10 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-12 h-10 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" subTitle="testimonial" />
      </div>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* <div className="w-full">
            <div className="w-full flex justify-between">
              <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col justify-end gap-7">
                <img
                  src={testimonialOne}
                  alt="testimonial images One"
                  className="rounded-lg object-cover"
                />
                <div className="flex flex-col justify-end">
                  <p className="text-designColor mb-2 text-xs tracking-wide uppercase">
                    bound - trolola
                  </p>
                  <h2 className="capitalize text-2xl font-bold">
                    jone buond joe
                  </h2>
                  <p className="capitalize tracking-wide text-base text-gray-500">
                    operation officer
                  </p>
                </div>
              </div>
              <div className="w-[60%] h-full">
                <img src={quote} alt="quote images" className="w-[20%]" />
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
                    dolorum, eos natus ipsum numquam veniam officia
                    necessitatibus ratione quos debitis exercitationem
                    repudiandae facilis id neque nihil accusantium perspiciatis
                    repellat? Iste.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full flex justify-between">
              <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col justify-end gap-7">
                <img
                  src={testimonialTwo}
                  alt="testimonial images One"
                  className="rounded-lg object-cover"
                />
                <div className="flex flex-col justify-end">
                  <p className="text-designColor mb-2 text-xs tracking-wide uppercase">
                    bound - trolola
                  </p>
                  <h2 className="capitalize text-2xl font-bold">
                    jone buond joe
                  </h2>
                  <p className="capitalize tracking-wide text-base text-gray-500">
                    operation officer
                  </p>
                </div>
              </div>

              <div className="w-[60%] h-full">
                <img src={quote} alt="quote images" className="w-[20%]" />
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
                    dolorum, eos natus ipsum numquam veniam officia
                    necessitatibus ratione quos debitis exercitationem
                    repudiandae facilis id neque nihil accusantium perspiciatis
                    repellat? Iste.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full flex justify-between">
              <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne p-8 rounded-lg flex flex-col justify-end gap-7">
                <img
                  src={testimonialOne}
                  alt="testimonial images One"
                  className="rounded-lg object-cover"
                />
                <div className="flex flex-col justify-end">
                  <p className="text-designColor mb-2 text-xs tracking-wide uppercase">
                    bound - trolola
                  </p>
                  <h2 className="capitalize text-2xl font-bold">
                    jone buond joe
                  </h2>
                  <p className="capitalize tracking-wide text-base text-gray-500">
                    operation officer
                  </p>
                </div>
              </div>

              <div className="w-[60%] h-full">
                <img src={quote} alt="quote images" className="w-[20%]" />
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
                    dolorum, eos natus ipsum numquam veniam officia
                    necessitatibus ratione quos debitis exercitationem
                    repudiandae facilis id neque nihil accusantium perspiciatis
                    repellat? Iste.
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          <TestimonialItem image={testimonialOne} quote={quote} />
          <TestimonialItem image={testimonialTwo} quote={quote} />
          <TestimonialItem image={testimonialOne} quote={quote} />
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
