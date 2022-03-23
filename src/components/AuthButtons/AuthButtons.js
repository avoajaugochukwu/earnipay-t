import Button from "../../common/Button";

const AuthButtons = ({ username, setUsername, showModal, setShowModal }) => {
  
  return (
    <div className="flex mt-4 md:mt-0 pl-10 w-full md:mx-auto md:w-56 md:justify-between">
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
              onClick={() => setShowModal(!showModal)}
              // onClick={() => close()}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
