import React from "react";
import Button from "../../common/Button";

const Subscribe = () => {
  return (
    <div className="pt-16 bg-gray-50">
      <div className=" hero-box--shadow mx-[8.5rem] rounded-3xl ">
        <div className="flex justify-between py-8 px-8">
          <div className="w-3/4">
            <h3 className="text-2xl font-black">
              Subscribe Now for <br />
              Get Special Features!
            </h3>
            <p className="mt-8">Let's subscribe with us and find the fun.</p>
          </div>
          <div className="w-1/4 pt-6">
            <Button primary label="Subscribe Now" type="square" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
