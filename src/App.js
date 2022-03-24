import Home from "./pages/Home";
import AuthProvider from "./store/context/AuthContextProvider";

function App() {
  return (
    <AuthProvider>
      <div className="font-rubik">
        <Home />
      </div>
    </AuthProvider>
    // <div className="">
    //   {" "}<Button primary label='Get Started' type="square" />
    //   <br />
    //   <br />
    //   <Button label='option' border='thick' />
    //   <Button label='option' border='light' />
    //   <Button label='Sign Up' border='thick' type="round" />
    // </div>
  );
}

export default App;
