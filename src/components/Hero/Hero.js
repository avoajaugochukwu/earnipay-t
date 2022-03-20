import React from "react";

import Packages from "./Packages";

import hero_img from "../../assets/img/hero.svg";
import user_img from "../../assets/img/user.svg";
import location_img from "../../assets/img/location.svg";
import server from "../../assets/img/server.svg";
import hero_2_img from "../../assets/img/hero_2.svg";
import green_check_mark from "../../assets/img/green_check_mark.svg";
import Button from "../../common/Button";
import World from "./World";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between mt-16 mx-[8.5rem]">
        <div className="w-1/2 p-10">
          <h1 className="text-5xl leading-for-hero">
            Want anything to be easy with <strong>LaslesVPN.</strong>
          </h1>
          <p className="mt-7 mb-14">
            Provide a network for all your needs with ease and fun using{" "}
            <strong>LaslesVPN</strong> discover interesting features from us.
          </p>
          <Button primary label="Get Started" type="square" />
        </div>
        <div className="w-1/2">
          <img src={hero_img} alt="hero" />
        </div>
      </div>
      {/* ******************************************************************* */}
      <div className=" mt-16 hero-box--shadow mx-[8.5rem] rounded-3xl">
        <div className="flex justify-between py-8">
          <div className="w-1/3 h-32 border-r-2 border-gray-200">
            <div className="flex py-8 w-1/3 mx-auto">
              <img src={user_img} alt="user img" className="w-14 h-14" />
              <div className="ml-7">
                <h3 className="text-3xl font-black">90+</h3>
                <p className="text-gray-500">Users</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-32 border-r-2 border-gray-200">
            <div className="flex py-8 w-1/3 mx-auto">
              <img src={location_img} alt="user img" className="w-14 h-14" />
              <div className="ml-7">
                <h3 className="text-3xl font-black">30+</h3>
                <p className="text-gray-500">Locations</p>
              </div>
            </div>
          </div>
          <div className="w-1/3 h-32">
            <div className="flex py-8  w-1/3 mx-auto">
              <img src={server} alt="user img" className="w-14 h-14" />
              <div className="ml-7">
                <h3 className="text-3xl font-black">50+</h3>
                <p className="text-gray-500">Servers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ******************************************************************* */}
      <div className="flex justify-between mt-20 mx-[8.5rem]">
        <div className="w-1/2">
          <img src={hero_2_img} alt="hero" />
        </div>
        <div className="w-1/2 p-10">
          <h3 className="text-3xl font-black">
            We Provide Many <br />
            Features You Can Use
          </h3>
          <p className="mt-4 text-sm">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <p className="flex mt-8">
            <img src={green_check_mark} alt="check mark" />{" "}
            <span className="ml-4">Powerfull online protection.</span>
          </p>
          <p className="flex mt-5">
            <img src={green_check_mark} alt="check mark" />{" "}
            <span className="ml-4">Internet without borders.</span>
          </p>
          <p className="flex mt-5">
            <img src={green_check_mark} alt="check mark" />{" "}
            <span className="ml-4">Supercharged VPN.</span>
          </p>
          <p className="flex mt-5">
            <img src={green_check_mark} alt="check mark" />{" "}
            <span className="ml-4">No specific time limits.</span>
          </p>
        </div>
      </div>
      {/* ******************************************************************* */}
      <Packages />
      <World />
    </>
  );
};

export default Hero;
