import React from "react";
import tv from "../assets/tv.png";
import Video from "../assets/video-tv.mp4";

const Yourtv = () => {
  return (
    <div className="bg-[#000000] mx-[40px] py-[85px]">
      <div className="tv-sec flex items-center flex-col text-center lg:text-left lg:flex-row  mx-[10%]">
        <div className="content basis-[50%]">
          <h2 className="text-white text-[32px] md:text-[48px] font-extrabold">
            Enjoy on your TV
          </h2>
          <p className="text-white text-[18px] md:text-[24px] w-full lg:w-[70%]">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="tv lg:basis-[50%] relative z-[1]">
          <img className="w-full" src={tv} />
          <div className="video top-0 left-0">
            <video src={Video} autoPlay muted loop></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yourtv;
