import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PageNumber.css";

export default function PageNumber() {
  return (
     <div className="Pagi m-3">
      <Pagination className="m-0">
        <Pagination.Prev id="rad" disabled className="m-1" />
        <Pagination.Item id="rad" className="m-1" active>
          {1}
        </Pagination.Item>
        <Pagination.Item id="rad" className="m-1">
          {2}
        </Pagination.Item>
        <Pagination.Item id="rad" className="m-1">
          {3}
        </Pagination.Item>
        <Pagination.Item id="rad" className="m-1">
          {4}
        </Pagination.Item>
        <Pagination.Next id="rad" className="m-1" />
      </Pagination> 
    </div>
  );
}
