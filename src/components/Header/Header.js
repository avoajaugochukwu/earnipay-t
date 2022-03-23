import React, { useEffect, useState } from "react";
import logo_white_bg from "../../assets/img/logo.svg";
import MobileHeader from "../MobileHeader";
import AuthButtons from "../AuthButtons";
import AuthModal from "../AuthModal";

const Header = () => {
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showModal]);

  return (
    <>
      <div className=" font-extralight justify-between lg:mx-[8.5rem] md:mx-8">
        <div className="hidden md:block">
          <div className="sm:flex pt-8">
            <img
              className="block mx-auto md:ml-0 md:mr-20"
              src={logo_white_bg}
              alt="logo"
            />
            <div className="flex px-3 md:w-1/2 justify-between text-gray-500 pt-3">
              <p>About</p>
              <p>Features</p>
              <p>Pricing</p>
              <p>Testimonial</p>
              <p>Help</p>
            </div>

            <AuthButtons
              username={username}
              setUsername={setUsername}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </div>
        </div>
      </div>

      <MobileHeader
        username={username}
        setUsername={setUsername}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <AuthModal
        showModal={showModal}
        setShowModal={setShowModal}
        setUsername={setUsername}
      />
    </>
  );
};

export default Header;
