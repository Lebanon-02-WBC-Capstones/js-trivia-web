import "./App.css";
import React from "react";
import WhoAreWe from "./Components/About/WhoAreWe";
import Report from "./Components/Modals/Report";
import Unpost from "./Components/Modals/Unpost";
import About from "./Components/About";
import Sign_in from "./Components/Modals/Sign_in";
function App() {
  return (
    <div className="App">
      <WhoAreWe />
      <Report />
      <br /> <br />
      <Unpost />
      <Sign_in />
      <About />
    </div>
  );
}

export default App;
