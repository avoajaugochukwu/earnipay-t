import { useState } from "react";
import Button from "../../common/Button";
import SignInModal from "../Auth/SignInModal";

const AuthButtons = ({
  sideBar,
  setActive,
  username,
  setUsername,
  showSignInModal,
  setShowSignInModal,
  showModal,
  setShowModal,
}) => {
  const handleClick = () => {
    if (sideBar) {
      setActive(false);
    }
    setShowModal(!showModal);
  };

  console.log(setShowSignInModal)

  return (
    <>
      <div className="flex mt-4 md:mt-0 pl-10 md:pl-1 w-full md:mx-auto md:w-56 md:justify-between">
        {username ? (
          <>
            <p>{username}</p>
            <Button
              label="Sign Out"
              type="round"
              onClick={() => setUsername("")}
            />
          </>
        ) : (
          <>
            <p
              className="w-20 py-1 md:py-3 mr-5"
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
                onClick={() => handleClick()}
              />
            </div>
          </>
        )}
      </div>

      
    </>
  );
};

export default AuthButtons;
