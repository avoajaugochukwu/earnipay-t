import React from "react";
import Button from "../../common/Button";

const Subscribe = () => {
  return (
    <div className="lg:pt-16 md:pt-6 bg-gray-50 m-3">
      <div className=" hero-box--shadow lg:mx-[8.5rem] md:mx-8 md:mt-6 rounded-3xl ">
        <div className="md:flex justify-between py-8 px-8">
          <div className="lg:w-1/2 md:w-1/2 ">
            <h3 className="text-2xl font-black">
              Subscribe Now for <br />
              Get Special Features!
            </h3>
            <p className="mt-1 md:mt-8">Let's subscribe with us and find the fun.</p>
          </div>
          <div className="mt-1 md:mt-8 lg:w-1/2 md:w-1/2 pt-3 md:pt-6 lg:pl-36 md:pl-12">
            <Button primary label="Subscribe Now" type="square" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
