import React, { useContext, useEffect, useState } from "react";

import MobileHeader from "./MobileHeader";
import SignUpModal from "../Auth/SignUpModal";
import SignInModal from "../Auth/SignInModal";
import DesktopHeader from "./DesktopHeader";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../../store/context/AuthContextProvider";

const Header = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [{ data, loading, passwordError }, getAuth] = useAuth();
  const auth = useContext(AuthContext);

  const [showSignInModal, setShowSignInModal] = useState(false);

  const sendSignInRequest = ({ email, password, callBack }) => {
    getAuth({
      email: email,
      password: password,
      callBack: callBack,
    });
  };

  const sendSignOutRequest = () => {
    getAuth({ logout: true });
    auth.setUsername("");
  };

  const clearPasswordError = () => {
    getAuth({ clearError: true });
  }

  useEffect(() => {
    if (showSignUpModal || showSignInModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showSignUpModal, showSignInModal]);

  useEffect(() => {
    auth.setUsername(data);
  }, [auth, data]);

  return (
    <>
      <DesktopHeader
        setShowSignInModal={setShowSignInModal}
        setShowSignUpModal={setShowSignUpModal}
        sendSignOutRequest={sendSignOutRequest}
      />

      <MobileHeader
        setShowSignUpModal={setShowSignUpModal}
        setShowSignInModal={setShowSignInModal}
        sendSignOutRequest={sendSignOutRequest}
      />
      <SignUpModal
        sendSignInRequest={sendSignInRequest}
        loading={loading}
        passwordError={passwordError}
        showSignUpModal={showSignUpModal}
        setShowSignUpModal={setShowSignUpModal}
        clearPasswordError={clearPasswordError}
      />

      <SignInModal
        sendSignInRequest={sendSignInRequest}
        loading={loading}
        passwordError={passwordError}
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
        clearPasswordError={clearPasswordError}
        
      />
    </>
  );
};

export default Header;
