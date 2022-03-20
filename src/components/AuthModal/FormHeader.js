import React from "react";
import logo_white_bg from "../../assets/img/logo_white_bg.png";

const FormHeader = () => {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-center text-gray-700 mb-10">
        <img
          className="mx-auto"
          style={{ width: "30%" }}
          src={logo_white_bg}
          alt="logo"
        />
      </h2>
      <p className="mt-3 text-gray-500 ">Sign in to access your account</p>
    </div>
  );
};

export default FormHeader;
