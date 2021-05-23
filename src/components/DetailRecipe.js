import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";
const DetailRecipe = ({ match }) => {
  const APP_ID = "2556a21f";
  const APP_KEY = "bdbc46819c1b2a1a9ed25b17cb5285a2";

  const [recipe, setRecipe] = useState({});
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
    console.log(match);
  }, [query]);

  const getRecipes = async () => {
    var pageURL = window.location.href;
    var lastURLSegment = pageURL.substr(pageURL.lastIndexOf("/") + 1);
    var index = Number(lastURLSegment);
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipe(data.hits);
    // console.log(data.hits[index].recipe.label);
  };

  return (
    <div className="item-container">
      page
      {/* {recipes.map((recipe,index) => (
          <Link to={`/recipe/${index}`}>
            <Recipe
              key={recipe.recipe.calories}
              title={recipe.recipe.label}
              // calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              // ingredients={recipe.recipe.ingredients}
            />
          </Link>
        ))} */}
    </div>
  );
};

export default DetailRecipe;
