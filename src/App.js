import "./App.css";
import React from "react";
import WhoAreWe from "./Components/About/WhoAreWe";
import Report from "./Components/Modals/Report";
import Unpost from "./Components/Modals/Unpost";

function App() {
  return (
    <div className="App">
      <WhoAreWe />
      <Report />
      <br /> <br />
      <Unpost />
    </div>
  );
}

export default App;
