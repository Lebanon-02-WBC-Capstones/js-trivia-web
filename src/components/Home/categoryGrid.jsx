import React from "react";
import CategoryCard from "./categoryCard";
import Categories from "./Categories";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryGrid() {
  return (
    <Container>
      <div className="row row-cols-xl-3 row-cols-md-3 row-cols-sm-2">
        {Categories.map((cat) => {
          return (
            <div className="col-xl-4 col-md-4 col-sm-5 " key={cat.id}>
              <Link
                to={{ pathname: "/quizzes", state: cat.id }}
                style={{ all: "unset" }}
              >
                <CategoryCard category={cat} />
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default CategoryGrid;
