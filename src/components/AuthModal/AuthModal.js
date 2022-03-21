import React, { useEffect, useState } from "react";
import close_icon from "../../assets/img/211652_close_icon.svg";
import useAuth from "../../hooks/useAuth";
import { isFormValid } from "./auth.helpers";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import { Email, Password, SignIn, FormHeader } from ".";
import './authmodal.css';

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const AuthModal = ({ active, setActive, setUsername }) => {
  const [{ data, loading, passwordError }, getAuth] = useAuth();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [validation, setValidation] = useState({
    email: undefined,
    password: undefined,
  });

  const validateForm = () => {
    const mailRe =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,10}$/;

    const nextValidation = { ...validation };

    nextValidation.email = mailRe.test(form.email);
    nextValidation.password = passwordRe.test(form.password);

    setValidation(nextValidation);
    return nextValidation;
  };

  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const isFieldInvalid = (field) => {
    return (
      submitted &&
      typeof validation[field] === "boolean" &&
      (validation[field] === false || validation[field] === "0")
    );
  };

  const onSubmitForm = () => {
    const current_validation = validateForm();

    setSubmitted(true);

    if (!isFormValid(current_validation)) {
      toast.error("Please complete the missing fields", {
        transition: bounce,
      });
      return;
    }

    getAuth(form.email, form.password, closeModal);
  };

  const closeModal = (showToast = true) => {
    if (showToast) {
      toast.success("Successfully logged in", {
        transition: bounce,
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }
    
    setActive(false);
    setSubmitted(false);
    setForm({ email: "", password: "" });
  };

  useEffect(() => {
    setUsername(data)
  }, [data, setUsername])

  return (
    <>
      <ToastContainer position="top-right" transition={bounce} />
      <div className={`auth-modal-wrapper ${active ? "open" : ""}`} />
      <div
        className={`auth-form ${
          active ? "open" : ""
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
              onClick={() => closeModal(false)}
              className=" inline cursor-pointer absolute -top-5 left-[90%] md:top-[-20px] md:right-[-40px]"
              src={close_icon}
              alt="close icon"
            />
            <div className="flex-1 my-20">
              <FormHeader />
              <div className="mt-8">
                <Email isFieldInvalid={isFieldInvalid} setForm={setForm} />
                <Password isFieldInvalid={isFieldInvalid} setForm={setForm} passwordError={passwordError} />
                <SignIn loading={loading} onSubmitForm={onSubmitForm} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
