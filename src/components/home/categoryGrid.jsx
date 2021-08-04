import React from "react";
import Categories from "../../Constants/Categories";
import CategoryCard from "./category";
import { Container } from "react-bootstrap";
/* eslint-disable react/prop-types */


function CategoryGrid() {
  return (
    <Container>
      <div className="row row-cols-2">
        {Categories.map((cat) => {
          return (
             <div className="col-3" key={cat.id}>
              <CategoryCard category={cat}/>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default CategoryGrid;
