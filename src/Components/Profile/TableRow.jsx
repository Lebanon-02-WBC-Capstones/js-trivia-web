import React from "react";
import { ReactSVG } from "react-svg";
import Trash from "./trash.svg";

function TableRow() {
  return (
    <div className="row m-1">
      <div className="col-8 m-1 grey round-left p-1 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor
        orci nec sem rhoncus, eget aliquam massa fringilla.
      </div>
      <div className="d-flex col-1 m-1 p-1 grey align-content-center justify-content-center">
        <div className="align-middle">Unpost</div>
      </div>
      <div className="col-1 m-1 p-1 grey text-center">See Quiz</div>
      <div className="col-1 m-1 p-1 grey round-right text-center">
        <ReactSVG src={Trash} />
      </div>
    </div>
  );
}

export default TableRow;
