import React from "react";
import LeftBanner from "./BannerLeft";
import RightBanner from "./BannerRight";

function Banner() {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-5 flex gap-8 border-b-[1px] border-black"
    >
      <LeftBanner />
      <RightBanner/>
    </section>
  );
}

export default Banner;
