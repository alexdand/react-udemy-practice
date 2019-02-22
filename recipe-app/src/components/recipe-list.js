import React from "react";
import "./recipe-list.css";

const Recipe = props => {
  return (
    <div className="recipe">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <h3>Ingredients</h3>
      <ul>
        {props.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <p>{props.instructions}</p>
      <button>Delete</button>
    </div>
  );
};

const RecipeList = props => {
  return (
    <div className="recipe-container">
      {props.recipes.map(recipe => (
        <Recipe {...recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
