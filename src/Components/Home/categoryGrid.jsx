import React from "react";
import CategoryCard from "./categoryCard";
import Categories from "./Categories";
import { Container } from "react-bootstrap";
/* eslint-disable react/prop-types */


function CategoryGrid() {
  return (
    <Container>
      <div className="row row-cols-xl-3 row-cols-md-3 row-cols-sm-2">
        {Categories.map((cat) => {
          return (
             <div className="col-xl-4 col-md-4 col-sm-5 " key={cat.id}>
              <CategoryCard category={cat}/>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default CategoryGrid;
