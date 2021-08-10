import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function ResultButtons() {
  return (
    <div className="row justify-content-between p-5 text-center">
      <div className="col-6 col-md-6">
        <Button id="SignInButton">Play Again</Button>
      </div>
      <div className="col-6 col-md-6">
        <Button id="SignInButton">Done</Button>
      </div>
    </div>
  );
}

export default ResultButtons;
