import React from "react";

const Password = ({
  validation,
  form,
  isFieldInvalid,
  setForm,
  passwordError,
}) => {
  return (
    <div className="mt-8">
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

      <input
        value={form.password}
        type="password"
        name="password"
        id="password"
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
      {isFieldInvalid("password") && (
        <p className="text-xs text-red-400 mt-2">
          Password must contain minimum eight and maximum 10 characters, at
          least one uppercase letter, one lowercase letter, one number and one
          special character:
        </p>
      )}
      {passwordError && (
        <p className="text-xs text-red-400 mt-2">
          Your pass word does not contain the phrase pass
        </p>
      )}
      {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
      <div className="mt-6">
        <label
          htmlFor="password"
          className={`text-sm text-gray-600 ${
            passwordError || isFieldInvalid("password2") ? "text-red-400" : ""
          } `}
        >
          Enter Password Again
        </label>
        <input
          value={form.password2}
          type="password"
          name="password2"
          id="password2"
          placeholder="Enter Password Again"
          onChange={({ target: { value } }) =>
            setForm((form) => ({ ...form, password2: value }))
          }
          className={`${
            passwordError || isFieldInvalid("password2")
              ? "border-red-400 outline-none focus:border-red-400"
              : "border-gray-200 focus:border-gray-200"
          } block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 border-2 bg-white rounded-md`}
        />
        {!validation.password2 && (
          <p className="text-xs text-red-400 mt-2">
            Passwords must be the same
          </p>
        )}
      </div>
    </div>
  );
};

export default Password;

// if pass word does not contain the phrase 'pass' it fails
// and this is a server response that wont go away until the page reloads
