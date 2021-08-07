import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
/* eslint-disable react/prop-types */

function Category(props) {
  const { title, imgURl } = props.category;
  return (
    <div className="card categoryCard w-100 ">
      <div className="card-body">
        <img src={imgURl} alt="category-icon" id="categoryImg" />
      <h5 className="card-title">{title}</h5>
       </div>
    </div>
  );
}

export default Category;
