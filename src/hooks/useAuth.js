/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";

const MESSAGES = {
  noUserName: "Please enter your user name",
  noPassword: "Please enter your password",
  wrongPassword: "The password you entered is wrong",
};

export default () => {
  const initialState = {
    data: "",
    loading: false,
    errorMessage: null,
    error: null,
  }

  const [result, setResult] = useState({
    ...initialState
  });

  const getAuth = async (userName, password, callBack) => {
    setResult((prevState) => ({ ...initialState, loading: true }));

    setTimeout(() => {
      if (!userName) {
        setResult((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
          errorMessage: MESSAGES.noUserName,
        }));
        callBack();
        return;
      }
      if (!password) {
        setResult((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
          errorMessage: MESSAGES.noPassword,
        }));
        callBack();
        return;
      }

      const lowerCase = password.toLowerCase();

      if (lowerCase === "password") {
        setResult((prevState) => ({
          ...prevState,
          loading: false,
          data: userName,
          errorMessage: MESSAGES.success
        }));
        callBack();
      } else {
        setResult((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
          errorMessage: MESSAGES.wrongPassword,
        }));
        callBack();
      }
    }, 3000);
  };

  return [result, getAuth];
};
