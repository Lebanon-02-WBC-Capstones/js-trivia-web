/* eslint-disable react/prop-types */
import "./App.css";
import React from "react";
// import WhoAreWe from "./Components/About/WhoAreWe";
// import Report from "./Components/Modals/Report";
// import Unpost from "./Components/Modals/Unpost";
//import About from "./Components/About";
//import Footer from "./Components/Footer/Footer";
// import Sign_in from "./Components/Modals/Sign_in";
// import Home from "./Components/Home";
import DropdownList from "./Components/Dropdown/Dropdown.jsx";
import { dropdownItems } from "./Components/Dropdown/List";

function App() {
  return (
    <div className="App">
      <DropdownList
        dropdownItems={dropdownItems.categories}
        title="Category"
        style="blueBackground"
      />
      <DropdownList
        dropdownItems={dropdownItems.difficulty}
        title="Difficulty"
        style="whiteBackground"
      />
      <DropdownList
        dropdownItems={dropdownItems.sortBy}
        title="Sort By"
        style="whiteBackground"
      />

      {/*<Footer />
       <Home />
      <WhoAreWe />
      <Report /> 
      <br /> <br />
       <Unpost /> 
      <p>Sign In Below</p>
       <Sign_in /> 
      <About />
    */}
    </div>
  );
}

export default App;
