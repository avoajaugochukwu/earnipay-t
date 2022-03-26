import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../store/context/AuthContextProvider";
import "./MobileHeader.css";
import SideBar from "./SideBar";
import logo from "../../../assets/img/logo.svg";

const MobileHeader = ({ username, setUsername, showModal, setShowSignUpModal, setShowSignInModal }) => {
  const [active, setActive] = useState(false);
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (active) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [active]);

  return (
    <div className="block md:hidden pt-8 pb-12">
      <div className="">
        <img className="mobileheaderlogo block ml-10 md:mr-20" src={logo} alt="logo" />
        {/*  */}
        <div
          className={`hamburger ${active ? "open" : undefined}`}
          onClick={() => setActive(!active) }
        >
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <SideBar
        username={username}
        setUsername={setUsername}
        
        setShowSignUpModal={setShowSignUpModal}
        setShowSignInModal={setShowSignInModal}
        active={active}
        setActive={setActive}
      />
    </div>
  );
};

export default MobileHeader;
