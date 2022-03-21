import React, { useEffect, useState } from "react";
import logo_white_bg from "../../assets/img/logo.svg";
import Button from "../../common/Button";
import AuthModal from "../AuthModal";

const Header = () => {
  const [username, setUsername] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [active]);

  return (
    <>
      <div className="mt-8 sm:flex font-extralight justify-between lg:mt-12 lg:mx-[8.5rem] md:mx-8 md:mt-8">
        <img className="block mx-auto md:ml-0 md:mr-20" src={logo_white_bg} alt="logo" />
        <div className="flex px-3 md:w-1/2 justify-between text-gray-500 pt-3">
          <p>About</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Testimonial</p>
          <p>Help</p>
        </div>
        <div className="flex mt-4 md:mt-0 w-1/2 mx-auto md:w-56 md:justify-between">
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
              <a className="py-1 md:py-3 mr-5" href=".">
                Sign In
              </a>
              <div>
                <Button
                  label="Sign Up"
                  border="thick"
                  type="round"
                  onClick={() => setActive(!active)}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <AuthModal
        active={active}
        setActive={setActive}
        setUsername={setUsername}
      />
    </>
  );
};

export default Header;
