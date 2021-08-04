import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

/* eslint-disable react/prop-types */

function Category(props) {
  const {title , imgURl} = props.category;
  return (
    <div className="card" id="card">
<div className="card-body">
        <img src={imgURl} alt="category-icon" />
       </div>
          {title}
     
    </div>
  );
}


export default Category;
