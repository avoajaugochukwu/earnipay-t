import React from "react";
import logo_white_bg from "../../assets/img/logo.svg";
import Facebook from "../../assets/img/Facebook.svg";
import Twitter from "../../assets/img/Twitter.svg";
import Instagram from "../../assets/img/Instagram.svg";

const Footer = () => {
  return (
    <div>
      <div className="md:flex lg:mx-[8.5rem] md:mx-8 md:mt-6 pt-10 m-4">
        <div className="w-full md:w-1/2 md:pr-48 ">
          <img src={logo_white_bg} alt="logo" />
          <p className="mt-4">
            <strong>LaslesVPN</strong> is a private virtual network that has
            unique features and has high security.
          </p>
          <div className="flex mt-5">
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
          </div>
          <p className="text-gray-400">©2020LaslesVPN</p>
        </div>
        {/*  */}
        <div className="md:flex md:w-1/2 w-full mt-10">
          <div className="md:flex md:w-1/3 w-full mb-10">
            <p className="text-lg font-black">Product</p>
            <p className="mt-4 font-extralight">Download </p>
            <p className="mt-4 font-extralight">Pricing</p>
            <p className="mt-4 font-extralight">Locations</p>
            <p className="mt-4 font-extralight">Server</p>
            <p className="mt-4 font-extralight">Countries</p>
            <p className="mt-4 font-extralight">Blog</p>
          </div>
          {/*  */}
          <div className="md:flex md:w-1/3 w-full mb-10">
            <p className="text-lg font-black">Engage</p>
            <p className="mt-4 font-extralight">LaslesVPN ? </p>
            <p className="mt-4 font-extralight">FAQ</p>
            <p className="mt-4 font-extralight">Tutorials</p>
            <p className="mt-4 font-extralight">About Us</p>
            <p className="mt-4 font-extralight">Privacy Policy</p>
            <p className="mt-4 font-extralight">Terms of Service</p>
          </div>
          {/*  */}
          <div className="md:flex md:w-1/3 w-full mb-10">
            <p className="text-lg font-black">Earn Money</p>
            <p className="mt-4 font-extralight">Affiliate</p>
            <p className="mt-4 font-extralight">Become Partner</p>
          </div>
        </div>
      </div>

      <div className="mt-60"></div>
      <div className="mb-60"></div>
      <div className="mt-60"></div>
      <div className="mt-60"></div>
      <div className="mt-60"></div>
      <div className="mt-60"></div>
    </div>
  );
};

export default Footer;
