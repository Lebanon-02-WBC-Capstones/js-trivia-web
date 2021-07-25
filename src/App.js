import "./App.css";
import React from "react";
import About from "./Components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Sign_in from "./Components/Modals/Sign_in";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to the capstone projects, this is your initial react app</p>
        tadaaa
        <Sign_in />
        <About />
      </header>
    </div>
  );
}

export default App;
