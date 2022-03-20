import React from "react";

const Email = ({ isFieldInvalid, setForm }) => {
  return (
    <div>
      <label
        htmlFor="email"
        className={`block mb-2 text-sm text-gray-600 ${
          isFieldInvalid("email") ? "text-red-400" : ""
        }`}
      >
        Email Address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="example@example.com"
        onChange={({ target: { value } }) =>
          setForm((form) => ({ ...form, email: value }))
        }
        className={` ${
          isFieldInvalid("email") ? "border-red-400 border-2" : ""
        } block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md`}
      />
    </div>
  );
};

export default Email;
