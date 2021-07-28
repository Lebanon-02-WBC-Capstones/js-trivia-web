import "./App.css";
import React from "react";
// import WhoAreWe from "./Components/About/WhoAreWe";
// import Report from "./Components/Modals/Report";
// import Unpost from "./Components/Modals/Unpost";
import About from "./Components/About";
import Footer from "./Components/Footer/Footer";
// import Sign_in from "./Components/Modals/Sign_in";
// import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Footer />
      {/* <Home />
      <WhoAreWe />
      <Report /> */}
      <br /> <br />
      {/* <Unpost /> */}
      <p>Sign In Below</p>
      {/* <Sign_in /> */}
      <About />
    </div>
  );
}

export default App;
