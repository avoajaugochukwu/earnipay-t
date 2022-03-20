import React, { useState } from "react";
import logo_white_bg from "../../assets/img/logo_white_bg.png";
import close_icon from "../../assets/img/211652_close_icon.svg";
import Loading from "../../common/Loading/Loading";
import useAuth from "../../hooks/useAuth";

import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, cssTransition } from "react-toastify";


const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut"
});

// https://animista.net/
// source animation inside style.css
const swirl = cssTransition({
  enter: "swirl-in-fwd",
  exit: "swirl-out-bck"
});

const AuthModal = ({ active, setActive }) => {
  const [{ data, loading, errorMessage, error }, getAuth] = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (userName, password) => {
    getAuth(userName, password, closeModal);
  };

  const [validation, setValidation] = useState({
    
  })

  const closeModal = () => {
    setActive(!active);
    animateCss();
  };

  const animateCss = () => {
    toast("Item added to cart", {
      transition: bounce
    });
  }

  return (
    <>
      <ToastContainer position="top-right" transition={bounce} />
      <div className={`auth-modal-wrapper ${active ? "open" : undefined}`} />
      <div
        className={`auth-form ${
          active ? "open" : undefined
        } bg-white lg:w-2/3 mx-auto`}
      >
        <div className="flex justify-center h-3/4">
          <div
            className="hidden bg-cover lg:block lg:w-1/2"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
            }}
          >
            <div className="flex items-center h-full px-20 bg-red-900 bg-opacity-80"></div>
          </div>
          {/* -----------*******----------- */}
          <div className="relative items-center w-full max-w-md px-6 mx-auto lg:w-1/2">
            <img
              onClick={() => setActive(false)}
              className=" inline cursor-pointer absolute top-[-20px] right-[-40px]"
              src={close_icon}
              alt="close icon"
            />
            <div className="flex-1 my-20">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-center text-gray-700 mb-10">
                  <img
                    className="mx-auto"
                    style={{ width: "30%" }}
                    src={logo_white_bg}
                    alt="logo"
                  />
                </h2>
                <p className="mt-3 text-gray-500 ">
                  Sign in to access your account
                </p>
              </div>

              <div className="mt-8">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    onChange={({ target: { value } }) => setUsername(value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-red-400  focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="text-sm text-gray-600 "
                    >
                      Password
                    </label>
                    <a
                      href="./"
                      className="text-sm text-gray-400 focus:text-red-500 hover:text-red-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    onChange={({ target: { value } }) => setPassword(value)}
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md focus:outline-none "
                    onClick={() => handleSubmit(username, password)}
                  >
                    {loading ? <Loading /> : "Sign in"}
                  </button>
                </div>

                <p className="mt-6 text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <a
                    href="."
                    className="text-red-500 focus:outline-none focus:underline hover:underline"
                  >
                    Sign up
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
