import Image from "next/image";
import React from "react";
import logo from "../../logo_black.webp";
import Link from "next/link";
import Input from "./Input";

const links = {};

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 text-black">
      <div className="flex w-full mx-2 space-x-4">
        <div className="flex flex-col basis-1/3 space-y-4 justify-center items-center">
          <Image src={logo} alt="" />
          <span className="text-justify">
            We love car enthusiasts! Our passion for cars goes beyond just
            knowledge—we live and breathe them.
          </span>
          <div>socials</div>
        </div>
        <div className="flex flex-col basis-1/3 space-y-4">
          <h5 className="text-[#06A9EF] font-bold text-xl">Useful links</h5>
          <div className="flex justify-between">
            <div className="flex flex-col space-y-4 ">
              <Link href="/" className="font-thin text-md">
                Home
              </Link>
              <Link href="/" className="font-thin text-md">
                Vehical Search History
              </Link>
              <Link href="/" className="font-thin text-md">
                Lease Calculator
              </Link>
              <Link href="/" className="font-thin text-md">
                Car Loan Calculator
              </Link>
              <Link href="/" className="font-thin text-md">
                Vehicle Vin Decoder
              </Link>
            </div>
            <div className="flex flex-col space-y-4 ">
              <Link href="/" className="font-thin text-md">
                Vehicle Recall Lookup
              </Link>
              <Link href="/" className="font-thin text-md">
                About Us
              </Link>
              <Link href="/" className="font-thin text-md">
                Services
              </Link>
              <Link href="/" className="font-thin text-md">
                Terms Of Service
              </Link>
              <Link href="/" className="font-thin text-md">
                Support
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-1/3 justify-between p-4">
          <h5 className="text-[#06A9EF] font-bold text-xl">Subscribe Now</h5>
          <h5>Don’t miss our future updates! Get Subscribed Today!</h5>
          <Input
            placeholder="Your mail here"
            className="border border-blue-500 rounded-full"
          />
        </div>
      </div>
      <div className="bg-[#06A9EF] w-full p-4 flex justify-center font-bold py-8 text-white">
        2024. Get vin info. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
