import React from "react";
import kidimg from "../assets/Kids.png";

const Kids = () => {
  return (
    <div className="text-[#000000] py-[72px]">
      <div className="download-sec flex items-center flex-col-reverse text-center lg:text-left lg:flex-row  mx-[10%]">
        <div className="tv lg:basis-[50%]">
          <img className="w-full" src={kidimg} />
        </div>

        <div className="content basis-[50%]">
          <h2 className="text-white w-full custom-min:w-[80%] text-[32px] lg:text-[48px] leading-[1.1em] font-extrabold">
            Create profiles for kids
          </h2>
          <p className="text-white text-[18px] lg:text-[24px] w-full">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Kids;
