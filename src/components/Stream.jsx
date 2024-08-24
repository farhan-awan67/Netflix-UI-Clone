import React from "react";

const Stream = () => {
  return (
    <div className="text-[#000000] my-[20px] mx-[40px] py-[80px]">
      <div className="download-sec flex items-center flex-col-reverse text-center lg:text-left lg:flex-row  mx-[10%]">
        <div className="content basis-[50%]">
          <h2 className="text-white w-full custom-min:w-[50%] text-[32px] lg:text-[48px] leading-[1.1em] font-extrabold">
            Watch everywhere
          </h2>
          <p className="text-white w-full text-[18px] lg:text-[24px] custom-min:w-[75%] mt-[8px]">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>

        <div className="tv lg:basis-[45%]">
          {/* <img className="w-full" src={downImg} /> */}
        </div>
      </div>
    </div>
  );
};

export default Stream;
