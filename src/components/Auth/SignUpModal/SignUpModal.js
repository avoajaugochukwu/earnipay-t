import React, { useEffect, useState } from "react";
import close_icon from "../../../assets/img/211652_close_icon.svg";
import useAuth from "../../../hooks/useAuth";
import { isFormValid } from "./auth.helpers";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import { Email, Password, SignUp, FormHeader } from ".";
import "./authmodal.css";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

const SignUpModal = ({
  loading,
  passwordError,
  sendSignInRequest,
  showSignUpModal,
  setShowSignUpModal,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const [validation, setValidation] = useState({
    email: undefined,
    password: undefined,
    password2: undefined,
  });

  const validateForm = () => {
    const mailRe =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const passwordRe =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,10}$/;

    const nextValidation = { ...validation };

    nextValidation.email = mailRe.test(form.email);
    nextValidation.password = passwordRe.test(form.password);

    nextValidation.password2 =
      form.password.length > 0
        ? form.password === form.password2 && !!passwordRe.test(form.password2)
        : true;

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

    sendSignInRequest({
      email: form.email,
      password: form.password,
      callBack: closeModal,
    });
  };

  const closeModal = (showToast = true) => {
    if (showToast) {
      toast.success("Successfully logged in", {
        transition: bounce,
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }

    setShowSignUpModal(false);
    setSubmitted(false);
    setForm({ email: "", password: "", password2: "" });
  };

  return (
    <>
      <ToastContainer position="top-right" transition={bounce} />
      <div className={`auth-modal-wrapper ${showSignUpModal ? "open" : ""}`} />
      <div
        className={`auth-form ${
          showSignUpModal ? "open" : ""
        } bg-white lg:w-2/3 mx-auto mt-20 md:mt-auto`}
      >
        <div className="flex absolute w-full justify-end -top-5 md:-right-5">
          <img
            onClick={() => closeModal(false)}
            className=" inline cursor-pointer "
            src={close_icon}
            alt="close icon"
          />
        </div>
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
            <div className="flex-1 my-12">
              <FormHeader />

              <Email isFieldInvalid={isFieldInvalid} setForm={setForm} />
              <Password
                validation={validation}
                submitted={submitted}
                form={form}
                isFieldInvalid={isFieldInvalid}
                setForm={setForm}
                passwordError={passwordError}
              />
              <SignUp loading={loading} onSubmitForm={onSubmitForm} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpModal;
