import React from "react";

const Email = ({ isFieldInvalid, setForm }) => {
  return (
    <div className="mt-8">
      <label
        htmlFor="email"
        className={`block mb-2 text-sm text-gray-600 ${
          isFieldInvalid("email") ? "text-red-400" : ""
        }`}
      >
        Email Address
      </label>
      <input
        defaultValue=''
        type="email"
        placeholder="example@example.com"
        onChange={({ target: { value } }) =>
          setForm((form) => ({ ...form, email: value }))
        }
        className={` ${
          isFieldInvalid("email") ? "border-red-400 " : "border-gray-200"
        } block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border-2 rounded-md`}
      />
    </div>
  );
};

export default Email;
