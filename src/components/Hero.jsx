import React from "react";
import logo from "../assets/logo.png";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="hero min-h-[36rem]">
      <nav className="flex justify-between items-center px-[26px] py-[24px] xl:px-[160px]">
        <img
          className="w-[5.85rem] h-[1.5rem] md:w-[9.25rem] md:h-[2.5rem]"
          src={logo}
        />
        <button className="login bg-red-600 text-white py-[.3em] px-[1em] md:py-[.4em] md:px-[1.2em] text-[15px] rounded-md font-[510]">
          Sign in
        </button>
      </nav>
      <div className="hero-content w-full flex flex-col items-center mt-[50px] sm:mt-[115px] md:mt-[180px] mx-auto px-[35px] gap-[10px]">
        <h1 className="text-[32px] sm:text-[32px] md:text-[48px] w-full text-center m-0 font-extrabold leading-8 md:leading-10">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-[18px] md:text-[24px] md:mb-[7px] mt-[10px] font-extralight">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-[18px] md:text-[20px] text-center md:mb-[7px]">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="email-add max-w-[25.625rem] sm:max-w-[36.625rem] md:max-w-[36.625rem] flex items-center flex-wrap gap-[10px] flex-col sm:flex-row md:flex-row">
          <input
            className="email text-white bg-[#161616B3] min-w-[16px] min-h-[16px] sm:flex-1 md:flex-1 py-[10px]  md:py-[14px] px-[16px]"
            type="email"
            placeholder="Email address"
          />
          <a
            className="get-started flex items-center text-white bg-red-600 text-[20px] font-semibold pl-[.9em] pr-[.6em] py-[.5em] md:py-[.5em] md:px-[1.1em] rounded-md"
            href="#"
          >
            Get Started
            <IoIosArrowForward className="ml-[5px] md:ml-[10px] text-[25px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
