import React, { useEffect, useState } from "react";
import "./MobileHeader.css";
import SideBar from "./SideBar";
import logo from "../../assets/img/logo.svg";

const MobileHeader = ({ username, setUsername, showModal, setShowModal }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [active]);

  return (
    <div className="block md:hidden pt-8 pb-8">
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
        showModal={showModal}
        setShowModal={setShowModal}
        active={active}
      />
    </div>
  );
};

export default MobileHeader;
