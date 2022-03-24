import React, { useEffect, useState } from "react";

import MobileHeader from "./MobileHeader";
import AuthModal from "../AuthModal";
import SignInModal from "../Auth/SignInModal";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [showSignInModal, setShowSignInModal] = useState(false);


  useEffect(() => {
    if (showModal || showSignInModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showModal, showSignInModal]);

  return (
    <>
      <DesktopHeader
        setShowSignInModal={setShowSignInModal}
        setShowModal={setShowModal}
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
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    </>
  );
};

export default Header;
