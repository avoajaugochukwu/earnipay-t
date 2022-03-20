import React from "react";

const Password = ({ isFieldInvalid, setForm }) => {
  return (
    <div className="mt-6">
      <div className="flex justify-between mb-2">
        <label
          htmlFor="password"
          className={`text-sm text-gray-600 ${
            isFieldInvalid("password") ? "text-red-400" : ""
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

      <input
        type="password"
        name="password"
        id="password"
        placeholder="Your Password"
        onChange={({ target: { value } }) =>
          setForm((form) => ({ ...form, password: value }))
        }
        className={`${
          isFieldInvalid("password") ? "border-red-400 border-2" : ""
        } block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md`}
      />
    </div>
  );
};

export default Password;
