import React, { useState } from "react";
import eye from "../../../assets/img/eye.svg";
import eye_slash from "../../../assets/img/eye-slash.svg";

const Password = ({ form, isFieldInvalid, setForm, passwordError }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-8">
      {/* <input
        value={form.password}
        type={showPassword ? "text" : "password"}
        placeholder="Your Password"
        onChange={({ target: { value } }) =>
          setForm((form) => ({ ...form, password: value }))
        }
        className={`${
          passwordError || isFieldInvalid("password")
            ? "border-red-400 "
            : "border-gray-200"
        } block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white rounded-md`}
      />
      <label
        onClick={() => setShowPassword(!showPassword)}
        class="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer "
        for="toggle"
      >
        {showPassword ? "hide" : "show"}
      </label> */}
      {/* -+++++++++++++++++++++++++++++++++++++++++++ */}
      <div className="block relative">
        <div className="flex justify-between mb-2">
          <label
            htmlFor="password"
            className={`text-sm text-gray-600 ${
              passwordError || isFieldInvalid("password") ? "text-red-400" : ""
            } `}
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
        <div className="eye_div">
          <input
            // className="input block border-2 border-gray-300 focus:border-pitch-black  py-3 px-3 w-full focus:outline-none "
            className={`${
              passwordError || isFieldInvalid("password")
                ? "border-red-400 "
                : "border-gray-200"
            } block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white rounded-md`}
            type={showPassword ? "text" : "password"}
            onChange={({ target: { value } }) =>
              setForm((form) => ({ ...form, password: value }))
            }
            value={form.password}
          />
          <div
            className="icon_button absolute right-4 top-9 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <img className="w-8 h-8" src={eye} alt="show" />
            ) : (
              <img className="w-8 h-8" src={eye_slash} alt="hide" />
            )}
          </div>
        </div>
      </div>

      {isFieldInvalid("password") && (
        <p className="text-xs text-red-400 mt-2">
          Password must contain at least eight characters, at least one uppercase
          letter, one lowercase letter, one number and one special character:
        </p>
      )}
      {passwordError && (
        <p className="text-xs text-red-400 mt-2">
          Your password does not contain the phrase "pass"
        </p>
      )}
    </div>
  );
};

export default Password;

// if pass word does not contain the phrase 'pass' it fails
// and this is a server response that wont go away until the page reloads
