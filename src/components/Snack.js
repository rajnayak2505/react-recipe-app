import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
const Snack = () => {
  const APP_ID = "2556a21f";
  const APP_KEY = "bdbc46819c1b2a1a9ed25b17cb5285a2";

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("snack");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits[0].recipe.label);
    console.log(data.hits);
  };

  return (
    <div className="item-container-recipe">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.calories}
          title={recipe.recipe.label}
          // calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          // ingredients={recipe.recipe.ingredients}
        />
      ))}
    </div>
  );
};

export default Snack;
