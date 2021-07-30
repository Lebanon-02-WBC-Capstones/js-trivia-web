import "./App.css";
import React from "react";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import QuizzesPage from "./Components/QuizzesPage/PageNumber";
function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="content-wrap">
          <Home />
          <QuizzesPage />
        </div>
      </div>
    </div>
  );
}

export default App;
