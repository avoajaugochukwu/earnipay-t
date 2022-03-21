import React from "react";

import free_img from "../../assets/img/Free.svg";
import standard_img from "../../assets/img/Standard.svg";
import premium_img from "../../assets/img/Premium.svg";
import check_mark from "../../assets/img/check_mark.svg";
import Button from "../../common/Button";

const Packages = () => {
  return (
    <div className="bg-gray-50 py-5 lg:py-10 lg:mt-16">
      <div className="text-center">
      <h3 className="lg:text-4xl md:text-3xl font-black md:pt-12 pt-8 lg:leading-for-world">
        Choose Your Plan
      </h3>
      <p className="lg:mt-8 md:mt-4 mt-4 px-3">
        Let's choose the package that is best for you and explore it happily and cheerfully.
      </p>
      </div>
      
      <div className="md:flex justify-between mt-10 lg:mt-12 lg:mx-[8.5rem] md:mx-8 md:mt-6 md:gap-x-1">
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div className="w-11/12 m-4 md:w-1/3 lg:px-10 md:px-2 cursor-pointer border-2 border-gray-300 rounded-xl">
          <img className="mx-auto mt-5 lg:mt-20 md:mt-10" src={free_img} alt="free" />
          <p className="text-center lg:mt-10 md:mt-5 font-black text-lg my-4">Free Plan</p>
          <div className="w-4/5 mx-auto lg:mt-10 md:mt-5 lg:h-72 md:h-80 h-64">
            <p className="flex">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">Unlimited Bandwitch</span>
            </p>
            <p className="flex mt-4">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">Encrypted Connection</span>
            </p>
            <p className="flex mt-4">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">No Traffic Logs</span>
            </p>
            <p className="flex mt-4">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">Works on All Devices</span>
            </p>
          </div>
          <div className="text-center mb-12">
            <h3 className="font-black text-2xl mb-6">Free</h3>
            <Button
              label="&nbsp;&nbsp;&nbsp;Select&nbsp;&nbsp;&nbsp;"
              border="thick"
              type="round"
            />
          </div>
        </div>
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div className="w-11/12 m-4 md:w-1/3 lg:px-10 md:px-2 cursor-pointer border-2 border-gray-300 rounded-xl">
          <img className="mx-auto mt-5 lg:mt-20 md:mt-10" src={standard_img} alt="free" />
          <p className="text-center lg:mt-10 md:mt-5 font-black text-lg my-4">Standard Plan</p>
          <div className="w-4/5 mx-auto lg:mt-10 md:mt-5 lg:h-72 md:h-80 h-64">
            <p className="flex">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">Unlimited Bandwitch</span>
            </p>
            <p className="flex mt-4">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">Encrypted Connection</span>
            </p>
            <p className="flex mt-4">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">No Traffic Logs</span>
            </p>
            <p className="flex mt-4">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">Works on All Devices</span>
            </p>
            <p className="flex mt-4">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">Connect Anyware</span>
            </p>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl mb-6">
              <span className="font-black">$9</span> / mo
            </h3>
            <Button
              label="&nbsp;&nbsp;&nbsp;Select&nbsp;&nbsp;&nbsp;"
              border="thick"
              type="round"
            />
          </div>
        </div>
        {/* +++++++++++++++++++++++++++++++++++++++++++++++++++ */}
        <div
          className="w-11/12 m-4 md:w-1/3 lg:px-10 md:px-2 cursor-pointer rounded-xl"
          style={{ border: "2px solid #F53838" }}
        >
          <img className="mx-auto mt-5 lg:mt-20 md:mt-10" src={premium_img} alt="free" />
          <p className="text-center lg:mt-10 md:mt-5 font-black text-lg my-4">Free Plan</p>
          <div className="w-4/5 mx-auto lg:mt-10 md:mt-5 lg:h-72 md:h-80 h-64">
            <p className="flex">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">Unlimited Bandwitch</span>
            </p>
            <p className="flex mt-4">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">Encrypted Connection</span>
            </p>
            <p className="flex mt-4">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">No Traffic Logs</span>
            </p>
            <p className="flex mt-4">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">Works on All Devices</span>
            </p>
            <p className="flex mt-4">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">Connect Anyware</span>
            </p>
            <p className="flex mt-4">
              <img src={check_mark} alt="check_mark" />
              <span className="ml-4">Get New Features</span>
            </p>
          </div>
          <div className="text-center mb-12">
            <h3 className="text-2xl mb-6">
              <span className="font-black">$12</span> / mo
            </h3>
            <Button
              label="&nbsp;&nbsp;&nbsp;Select&nbsp;&nbsp;&nbsp;"
              border="none"
              type="round"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
