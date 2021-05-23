import React from "react";
import DetailRecipepe from "./DetailRecipe";
import { Link } from "react-router-dom";

const Recipe = ({ title, image, key }) => {
  console.log(key);
  return (
    <Link>
      <div className="recipe" key={key} id={key}>
        <div className="recipe-item">
          <h1>{title}</h1>
        </div>
        <img src={image} alt={title} />
      </div>
    </Link>
  );
};

export default Recipe;
