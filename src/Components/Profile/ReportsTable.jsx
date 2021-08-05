import React from "react";
import { Container } from "react-bootstrap";
import TableRow from "./TableRow";

function ReportsTable() {
  return (
    <Container>
      <div className="m-2">
        <div className="row m-1">
          <div className="grey m-1 col-md-2 rounded-pill text-center bold align-middle">
            <h5 className="m-1 ">Reports</h5>
          </div>
        </div>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </div>
    </Container>
  );
}

export default ReportsTable;
