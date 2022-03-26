import React, { useContext } from "react";
import { AuthContext } from "../../../store/context/AuthContextProvider";
import logo_white_bg from "../../../assets/img/logo.svg";
import Button from "../../../common/Button";

const DesktopHeader = ({
  setShowSignInModal,
  setShowModal,
  sendSignOutRequest,
}) => {
  const auth = useContext(AuthContext);

  return (
    <div className=" font-extralight justify-between lg:mx-[8.5rem] md:mx-8">
      <div className="hidden md:block">
        <div className="flex pt-8 justify-between">
          <div className="w-1/4">
            <img
              className="block mx-auto md:ml-0 md:mr-20"
              src={logo_white_bg}
              alt="logo"
            />
          </div>
          <div className="flex px-3 md:w-1/2 justify-between text-gray-500 pt-3">
            <p>About</p>
            <p>Features</p>
            <p>Pricing</p>
            <p>Testimonial</p>
            <p>Help</p>
          </div>

          <div className="flex mt-4 md:mt-0 ml-10 ">
            {auth.username ? (
              <>
                <p className="w-1/2 py-1 md:py-3 mr-10 font-semibold">
                  {auth.username}
                </p>
                <Button
                  label="Sign Out"
                  type="round"
                  onClick={() => sendSignOutRequest()}
                />
              </>
            ) : (
              <>
                <p
                  className="w-1/2 py-1 md:py-3 mr-5"
                  href="."
                  onClick={() => setShowSignInModal(true)}
                >
                  Sign In
                </p>
                <div>
                  <Button
                    label="Sign Up"
                    border="thick"
                    type="round"
                    onClick={() => setShowModal(true)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
