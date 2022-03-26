import React from "react";
import Loading from "../../../common/Loading/Loading";

const SignUp = ({ onSubmitForm, loading }) => {
  return (
    <>
      <div className="mt-8">
        <button
          className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md focus:outline-none "
          onClick={() => onSubmitForm()}
        >
          {loading ? <Loading /> : "Sign in"}
        </button>
      </div>
      <p className="mt-6 text-sm text-center text-gray-400">
        Have an account?{" "}
        <a
          href="."
          className="text-red-500 focus:outline-none focus:underline hover:underline"
        >
          Sign in
        </a>
        .
      </p>
    </>
  );
};

export default SignUp;
