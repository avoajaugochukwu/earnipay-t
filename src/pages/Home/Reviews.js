import React from "react";
import viezh from "../../assets/img/viezh.svg";
import yessica from "../../assets/img/yessica.svg";
import kimyoung from "../../assets/img/kimyoung.svg";
import star from "../../assets/img/star.svg";
import rdots1 from "../../assets/img/r-dots1.svg";
import rdots2 from "../../assets/img/r-dots2.svg";
import rdots3 from "../../assets/img/r-dots3.svg";
import rdots4 from "../../assets/img/r-dots4.svg";
import reviewright from "../../assets/img/reviewright.svg";
import reviewleft from "../../assets/img/reviewleft.svg";

const Reviews = () => {
  return (
    <div className=" bg-gray-50 pb-32">
      <div className="text-center">
        <h3 className="lg:text-4xl md:text-3xl font-black lg:pt-16 md:pt-12 pt-12 lg:leading-for-world">
          Trusted by Thousands of <br /> Happy Customer
        </h3>
        <p className="lg:mt-8 md:mt-4 mt-4">
          These are the stories of our customers who have joined us with great{" "}
          <br />
          pleasure when using this crazy feature.
        </p>
      </div>

      <div>
        <div className="md:flex justify-between mt-10 lg:mt-20 md:mt-10 px-5 md:px-0 md:ml-[8.5rem] lg:gap-x-8 md:gap-x-3 ">
          <div
            className="w-full md:w-1/3 p-4 my-3 lg:p-6 md:p-2 cursor-pointer  rounded-xl"
            style={{ border: "2px solid #F53838" }}
          >
            <div className="flex">
              <div className="flex w-4/5">
                <img className="" src={viezh} alt="viezh" />
                <div className="lg:ml-6 md:ml-3">
                  <p className="font-black">Viezh Robert</p>
                  <p className="font-extralight text-gray-500">
                    Warsaw, Poland
                  </p>
                </div>
              </div>
              <div className="flex w-1/5">
                <p>4.5</p>
                <p className="pt-1 pl-2">
                  <img src={star} alt="start" />
                </p>
              </div>
            </div>
            <p className="mt-4">
              “Wow... I am very happy to use this VPN, it turned out to be more
              than my expectations and so far there have been no problems.
              LaslesVPN always the best”.
            </p>
          </div>
          {/* --------------------------------------------- */}
          <div className="w-full md:w-1/3 p-4 my-3 lg:p-6 md:p-2 cursor-pointer border-2 border-gray-300 rounded-xl">
            <div className="flex">
              <div className="flex w-4/5">
                <img className="" src={yessica} alt="viezh" />
                <div className="lg:ml-6 md:ml-3">
                  <p className="font-black">Yessica Christy</p>
                  <p className="font-extralight text-gray-500">Shanxi, China</p>
                </div>
              </div>
              <div className="flex w-1/5">
                <p>4.5</p>
                <p className="pt-1 pl-2">
                  <img src={star} alt="start" />
                </p>
              </div>
            </div>
            <p className="mt-4">
              “I like it because I like to travel far and still can connect with
              high speed.”.
            </p>
          </div>
          {/* --------------------------------------------- */}
          <div className="w-full md:w-1/3 p-4 my-3 lg:p-6 md:p-2 cursor-pointer border-2 border-gray-300 rounded-xl">
            <div className="flex">
              <div className="flex w-4/5">
                <img className="" src={kimyoung} alt="viezh" />
                <div className="lg:ml-6 md:ml-3">
                  <p className="font-black">Kim Young Jou</p>
                  <p className="font-extralight text-gray-500">
                    Seoul, South Korea
                  </p>
                </div>
              </div>
              <div className="flex w-1/5">
                <p>4.5</p>
                <p className="pt-1 pl-2">
                  <img src={star} alt="start" />
                </p>
              </div>
            </div>
            <p className="mt-4">
              “This is very unusual for my business that currently requires a
              virtual private network that has high security.”.
            </p>
          </div>
        </div>
      </div>
      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div className="flex justify-between px-5 md:px-0 lg:mt-5 md:mt-2 lg:mx-[8.5rem] md:mx-8 ">
        <div className="flex lg:mt-5 md:mt-2">
          <div>
            <img className="lg:w-full md:11/12" src={rdots4} alt="rdots4" />
          </div>
          <div>
            <img className="lg:w-full md:11/12" src={rdots1} alt="rdots1" />
          </div>
          <div>
            <img className="lg:w-full md:11/12" src={rdots2} alt="rdots2" />
          </div>
          <div>
            <img className="lg:w-full md:11/12" src={rdots3} alt="rdots3" />
          </div>
        </div>
        <div className="flex">
          <div>
            <img className="w-6/12 lg:w-full md:w-8/12" src={reviewleft} alt="reviewleft" />
          </div>
          <div className="-ml-6 md:ml-3">
            <img className="w-6/12 lg:w-full md:w-8/12" src={reviewright} alt="reviewright" />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Reviews;
