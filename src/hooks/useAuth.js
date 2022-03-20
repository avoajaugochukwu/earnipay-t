/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";

const MESSAGES = {
  noEmail: "Please enter your user name",
  noPassword: "Please enter your password",
  wrongPassword: "The password you entered is wrong",
};

export default () => {
  const initialState = {
    data: "",
    loading: false,
    emailError: null,
    passwordError: null,
    error: null,
  }

  const [result, setResult] = useState({
    ...initialState
  });

  const getAuth = async (email, password, callBack) => {
    setResult(() => ({ ...initialState, loading: true }));

    setTimeout(() => {
      if (!email) {
        setResult((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
          emailError: MESSAGES.noEmail,
        }));
        return;
      }
      if (!password) {
        setResult((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
          passwordError: MESSAGES.noPassword,
        }));
        return;
      }

      const lowerCase = password.toLowerCase();

      if (lowerCase.includes('pass')) {
        setResult((prevState) => ({
          ...prevState,
          loading: false,
          data: email,
        }));
        callBack();
      } else {
        setResult((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
          passwordError: MESSAGES.wrongPassword,
        }));
        
      }
    }, 3000);
  };

  return [result, getAuth];
};
