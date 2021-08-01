import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PageNumber.css";

export default function Pagenumber() {
  return (
    <div className="Pagi">
      <Pagination>
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
