import React, { useContext } from "react";
import Button from "../../../common/Button";
import { AuthContext } from "../../../store/context/AuthContextProvider";
import Link from "./Link";

const SideBar = ({ active, setActive, setShowModal, setShowSignUpModal, setShowSignInModal, sendSignOutRequest }) => {
  const auth = useContext(AuthContext);
  return (
    <>
      <div className={`sidebar-wrapper ${active ? "open" : ""}`} />
      <div
        className={`sidebar w-full -right-full sm:-right-1/2 sm:w-1/2 ${
          active ? "open" : ""
        }`}
      >
        <>
          <div className="mt-32 ml-8">
            <Link isActive link={"about"} />
            <Link isActive={false} link={"features"} />
            <Link isActive={false} link={"pricing"} />
            <Link isActive={false} link={"testimonials"} />
            <Link isActive={false} link={"help"} />
            {/*  */}

            <div className="flex mt-4 md:mt-0 pl-10 md:pl-1 w-full md:mx-auto md:w-56 md:justify-between">
              {auth.username ? (
                <>
                  <p>{auth.username}</p>
                  <Button
                    label="Sign Out"
                    type="round"
                    onClick={() => sendSignOutRequest()}
                  />
                </>
              ) : (
                <>
                  <p
                    className="w-20 py-1 md:py-3 mr-5"
                    href="."
                    onClick={() => {
                      setShowSignInModal(true);
                      setActive(false);
                    }}
                  >
                    Sign In
                  </p>
                  <div>
                    <Button
                      label="Sign Up"
                      border="thick"
                      type="round"
                      onClick={() => {
                        setShowSignUpModal(true);
                        setActive(false);
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default SideBar;
