import "./App.css";
import React from "react";
import Main from "./components/main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Main />
      <header className="App-header">{/* <CarouselMain /> */}</header>
    </div>
  );
}

export default App;
