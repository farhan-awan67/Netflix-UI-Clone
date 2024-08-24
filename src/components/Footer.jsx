import React from "react";

const Footer = () => {
  return (
    <div className="py-[72px]">
      <div className="grid grid-cols-2 sm:grid-cols-4 place-items-center gap-4 text-white mx-[10%]">
        <ul className="text-[14px] underline">
          <li>
            <a href="">Questions? Contact us.</a>
          </li>
          <li className="mt-4">
            <a href="">FAQ</a>
          </li>
          <li className="mt-4">
            <a href="">Invester Relations</a>
          </li>
          <li className="mt-4">
            <a href="">Privacy</a>
          </li>
          <li className="mt-4">
            <a href="">Speed Test</a>
          </li>
          <li className="mt-4">Netflix Pakistan</li>
        </ul>

        <ul className="text-[14px] underline">
          <li className="mt-4">
            <a href="">Help Center</a>
          </li>
          <li className="mt-4">
            <a href="">Jobs</a>
          </li>
          <li className="mt-4">
            <a href="">Cookie Preferences</a>
          </li>
          <li className="mt-4">
            <a href="">Legal Notices</a>
          </li>
        </ul>

        <ul className="text-[14px] underline">
          <li className="mt-4">
            <a href="">Account</a>
          </li>
          <li className="mt-4">
            <a href="">Ways to Watch</a>
          </li>
          <li className="mt-4">
            <a href="">Corporate Information</a>
          </li>
          <li className="mt-4">
            <a href="">Only on Netflix</a>
          </li>
        </ul>

        <ul className="text-[14px] underline">
          <li className="mt-4">
            <a href="">Media Center</a>
          </li>
          <li className="mt-4">
            <a href="">Terms of Use</a>
          </li>
          <li className="mt-4">
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
