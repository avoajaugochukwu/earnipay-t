import React, { useContext, useEffect, useState } from "react";

import MobileHeader from "./MobileHeader";
import AuthModal from "../AuthModal";
import SignInModal from "../Auth/SignInModal";
import DesktopHeader from "./DesktopHeader";
import useAuth from "../../hooks/useAuth";
import { AuthContext } from "../../store/context/AuthContextProvider";

const Header = () => {
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);
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

  useEffect(() => {
    if (showModal || showSignInModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showModal, showSignInModal]);

  useEffect(() => {
    auth.setUsername(data);
  }, [auth, data]);

  return (
    <>
      <DesktopHeader
        setShowSignInModal={setShowSignInModal}
        setShowModal={setShowModal}
        sendSignOutRequest={sendSignOutRequest}
      />

      <MobileHeader
        username={username}
        setUsername={setUsername}
        showModal={showModal}
        setShowModal={setShowModal}
        setShowSignInModal={setShowSignInModal}
      />
      <AuthModal
        showModal={showModal}
        setShowModal={setShowModal}
        setUsername={setUsername}
      />

      <SignInModal
        sendSignInRequest={sendSignInRequest}
        loading={loading}
        passwordError={passwordError}
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    </>
  );
};

export default Header;
