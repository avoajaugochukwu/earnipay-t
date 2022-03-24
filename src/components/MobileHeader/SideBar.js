import React from "react";
import AuthButtons from "../AuthButtons";
import Link from "./Link";

const SideBar = ({
  active,
  setActive,
  username,
  setUsername,
  showModal,
  setShowModal,
}) => {
  return (
    <>
      <div className={`sidebar-wrapper ${active ? "open" : ""}`} />
      <div
        className={`sidebar w-full -right-full sm:-right-1/2 sm:w-1/2 ${
          active ? "open" : ""
        }`}
      >
        <div className=" relative">
          <div className="mt-32 ml-8">
            <Link isActive link={"about"} />
            <Link isActive={false} link={"features"} />
            <Link isActive={false} link={"pricing"} />
            <Link isActive={false} link={"testimonials"} />
            <Link isActive={false} link={"help"} />
            {/*  */}
            <div className="">
              <AuthButtons
                sideBar
                active={active}
                setActive={setActive}
                username={username}
                setUsername={setUsername}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
