import React, { useEffect, useState } from "react";
import logo_white_bg from "../../assets/img/logo_white_bg.png";
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
      <div className="flex font-extralight justify-between mt-12 mx-[8.5rem] bg-gray-200">
        <img style={{ width: "12%" }} src={logo_white_bg} alt="logo" />
        <div className="flex w-1/2 justify-between text-gray-500 pt-3">
          <p>About</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Testimonial</p>
          <p>Help</p>
        </div>
        <div className="flex justify-between">
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
              <a className="py-3 mr-5" href=".">
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
