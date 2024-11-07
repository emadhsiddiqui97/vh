import Image from "next/image";
import React from "react";
import logo from "../../logo.webp";

const Header = () => {
  return (
    <div className="flex justify-between items-center align-center self-center m-4 my-8 p-2 px-10 headerStyle w-[80vw]">
      <div className="flex">
        <Image src={logo} alt="" height={50} />
      </div>
      {/* <div className="flex basis-1/5"></div> */}
      <div className="flex">
        <ul className="md:flex gap-8 justify-center">
          <li className="font-bold text-xl hover:text-[#06A9EF] hover:underline hover:underline-offset-4 transition-all ease-in-out">
            Home
          </li>
          <li className="font-bold text-xl hover:text-[#06A9EF] hover:underline hover:underline-offset-4 transition-all ease-in-out">
            Tools
          </li>
          <li className="font-bold text-xl text-nowrap hover:text-[#06A9EF] hover:underline hover:underline-offset-4 transition-all ease-in-out">
            About Us
          </li>
          <li className="font-bold text-xl hover:text-[#06A9EF] hover:underline hover:underline-offset-4 transition-all ease-in-out">
            Services
          </li>
          <li className="font-bold text-xl hover:text-[#06A9EF] hover:underline hover:underline-offset-4 transition-all ease-in-out">
            Support
          </li>
        </ul>
      </div>
      {/* <div className="flex basis-1/5"></div> */}
    </div>
  );
};

export default Header;
