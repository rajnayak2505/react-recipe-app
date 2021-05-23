import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
// import React from 'react';
import Recipe from "./Recipe";
import DetailRecipe from "./DetailRecipe";
const HomePage = () => {
  const APP_ID = "2556a21f";
  const APP_KEY = "bdbc46819c1b2a1a9ed25b17cb5285a2";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

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

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      {/* <DetailRecipe />  */}
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Find a Recipe"
          value={search}
          onChange={updateSearch}
        />

        <input className="search-button" type="submit" value="SEARCH" />
      </form>
      <div className="item-container">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            // calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            // ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
