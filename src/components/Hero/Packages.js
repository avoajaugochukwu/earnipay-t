import React from "react";

import free_img from "../../assets/img/Free.svg";
import standard_img from "../../assets/img/Standard.svg";
import premium_img from "../../assets/img/Premium.svg";
import check_mark from "../../assets/img/check_mark.svg";
import Button from "../../common/Button";

const Packages = () => {
  return (
    <div className="bg-gray-50 py-10 mt-20">
      <div className="flex justify-between mt-20 lg:mx-[8.5rem] md:mx-8 md:mt-6 lg:gap-x-8 md:gap-x-4">
        <div className="w-1/3 lg:px-10 md:px-2 cursor-pointer border-2 border-gray-300 rounded-xl">
          <img className="mx-auto lg:mt-20 md:mt-10" src={free_img} alt="free" />
          <p className="text-center lg:mt-10 md:mt-5 font-black text-lg">Free Plan</p>
          <div className="w-4/5 mx-auto lg:mt-10 md:mt-5 lg:h-72 md:h-80">
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
          {/* +++++++++++++++++++++++++++++++++++++++++++++++++++ */}
          <div className="text-center mb-12">
            <h3 className="font-black text-2xl mb-6">Free</h3>
            <Button
              label="&nbsp;&nbsp;&nbsp;Select&nbsp;&nbsp;&nbsp;"
              border="thick"
              type="round"
            />
          </div>
        </div>
        <div className="w-1/3 lg:px-10 md:px-2 cursor-pointer border-2 border-gray-300 rounded-xl">
          <img className="mx-auto lg:mt-20 md:mt-10" src={standard_img} alt="free" />
          <p className="text-center lg:mt-10 md:mt-5 font-black text-lg">Standard Plan</p>
          <div className="w-4/5 mx-auto lg:mt-10 md:mt-5 lg:h-72 md:h-80">
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
          {/* +++++++++++++++++++++++++++++++++++++++++++++++++++ */}
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
        <div
          className="w-1/3 lg:px-10 md:px-2 cursor-pointer rounded-xl"
          style={{ border: "2px solid #F53838" }}
        >
          <img className="mx-auto lg:mt-20 md:mt-10" src={premium_img} alt="free" />
          <p className="text-center lg:mt-10 md:mt-5 font-black text-lg">Free Plan</p>
          <div className="w-4/5 mx-auto lg:mt-10 md:mt-5 lg:h-72 md:h-80">
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
          {/* +++++++++++++++++++++++++++++++++++++++++++++++++++ */}
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
