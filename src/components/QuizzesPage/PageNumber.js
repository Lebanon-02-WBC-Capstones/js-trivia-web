import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PageNumber.css";

export default function Pagenumber() {
  return (
    <div className="Pagi">
      <Pagination>
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>

        <Pagination.Next />
      </Pagination>
    </div>
  );
}
