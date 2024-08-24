import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import accordian from "../assets/faqs"; // Make sure this path is correct

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black mx-[40px] py-[85px]">
      <div className="faq-sec flex flex-col">
        <div className="title">
          <h2 className="text-white text-center text-[32px] custom-min:text-[48px] font-extrabold">
            Frequently Asked Questions
          </h2>
        </div>
        <ul className="faqs">
          {accordian.map((faq, index) => (
            <li
              key={index}
              className="cursor-pointer mb-[0.5rem]"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-[18px] p-[24px] bg-[#414141] hover:bg-[#6e6d6d] mb-[0.0625rem] custom-min:text-[24px]">
                <button className="text-white w-full flex justify-between items-center text-[18px] custom-min:text-[24px]">
                  <span>{faq.question}</span>
                  {activeIndex === index ? (
                    <IoIosClose className="text-white text-[18px] custom-min:text-[24px]" />
                  ) : (
                    <IoMdAdd className="text-white text-[18px] custom-min:text-[24px]" />
                  )}
                </button>
              </h3>
              {activeIndex === index && (
                <div className="answer bg-[#414141] p-[24px]">
                  <span className="text-white text-[18px] custom-min:text-[24px]">
                    {faq.answer}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="membership mt-[35px]">
          <p className="text-[18px] mb-[10px] text-white md:text-[20px] text-center md:mb-[7px]">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="email-add m-auto max-w-[25.625rem] sm:max-w-[36.625rem] md:max-w-[36.625rem] flex justify-center items-center flex-wrap gap-[10px] flex-col sm:flex-row md:flex-row">
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
    </div>
  );
};

export default Faqs;
