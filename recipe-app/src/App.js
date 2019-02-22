import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import RecipeList from "./components/recipe-list";
import RECIPES from "./recipes";

class App extends Component {
  constructor(props) {
    const recipes = RECIPES;
    super(props);
    this.state = {
      options: ["New Recipe", "Home", "About", "Contact Us"],
      recipes: recipes
    };
  }

  render() {
    return (
      <div className="App">
        <Header options={this.state.options} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
