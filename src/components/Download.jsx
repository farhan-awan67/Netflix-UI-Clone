import React from "react";
import downImg from "../assets/mobile.jpg";
import boxShot from "../assets/boxshot.png";

const Download = () => {
  return (
    <div className="text-[#000000] py-[72px]">
      <div className="download-sec flex items-center flex-col-reverse text-center lg:text-left lg:flex-row  mx-[10%]">
        <div className="tv lg:basis-[45%] relative">
          <img className="w-full" src={downImg} />
          <div className="down-show absolute w-[60%] min-w-[15rem] flex items-center bottom-[8%] left-[50%] translate-x-[-50%] bg-black border-2 border-[rgba(128, 128, 128, 0.7)] rounded-[0.75em] py-[0.25rem] px-[0.65rem]">
            <div className="mr-[1rem] h-[3rem] custom-min:h-[4rem]">
              <img
                className="w-[4rem] h-[3rem] custom-min:w-[5rem] custom-min:h-[4rem]"
                src={boxShot}
              />
            </div>
            <div className="my-[0.3rem] w-full text-left">
              <div className="texts sm:text-[1rem] md:text-[1rem] lg:[1rem] text-white font-[500] block">
                Stranger Things
              </div>
              <div className="down-text text-[0.75rem] custom-min:text-[0.875rem] font-[400] text-[#0071eb] block">
                Downloading
              </div>
            </div>
            <div className="down-img w-[3rem] h-[3rem] block"></div>
          </div>
        </div>

        <div className="content basis-[55%]">
          <h2 className="text-white text-[32px] lg:text-[48px] leading-[1.1em] font-extrabold">
            Download your shows to watch offline
          </h2>
          <p className="text-white text-[18px] lg:text-[24px] w-full">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Download;
