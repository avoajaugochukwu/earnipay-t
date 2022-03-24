import React from "react";
import Loading from "../../common/Loading/Loading";

const SignIn = ({ onSubmitForm, loading }) => {
  return (
    <>
      <div className="mt-6">
        <button
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md focus:outline-none "
          onClick={() => onSubmitForm()}
        >
          {loading ? <Loading /> : "Sign in"}
        </button>
      </div>
    </>
  );
};

export default SignIn;
