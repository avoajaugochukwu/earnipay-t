/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";

const ERROR_STATE = {
  noUserName: "Please enter your user name",
  noPassword: "Please enter your password",
  wrongPassword: "The password you entered is wrong",
};

export default () => {
  const [result, setResult] = useState({
    data: "",
    loading: false,
    errorMessage: null,
    error: null,
  });

  const getAuth = async (userName, password, callBack) => {
    setResult((prevState) => ({ ...prevState, loading: true }));

    setTimeout(() => {
      if (!userName) {
        setResult((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
          errorMessage: ERROR_STATE.noUserName,
        }));
        return;
      }
      if (!password) {
        setResult((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
          errorMessage: ERROR_STATE.noPassword,
        }));
        return;
      }

      const lowerCase = password.toLowerCase();
      
      if (lowerCase === "password") {
        setResult((prevState) => ({
          ...prevState,
          loading: false,
          data: userName,
        }));
        callBack()
      } else {
        setResult((prevState) => ({
          ...prevState,
          loading: false,
          error: true,
          errorMessage: ERROR_STATE.wrongPassword,
        }));
      }
    }, 3000);
  };

  return [result, getAuth];
};
