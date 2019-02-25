import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import RecipeList from "./components/recipe-list";
import RECIPES from "./recipes";
import RecipeInput from "./components/recipe-input";

const recipes = RECIPES;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["New Recipe", "Home", "About", "Contact Us"],
      recipes: recipes,
      showForm: false
    };
    this.addNewRecipe = this.addNewRecipe.bind(this);
  }

  addNewRecipe(recipe) {
    this.setState(prevState => ({
      recipes: [...prevState.recipes, recipe]
    }));
  }

  render() {
    return (
      <div className="App">
        <Header
          options={this.state.options}
          showForm={() => this.setState({ showForm: true })}
        />
        {this.state.showForm ? (
          <RecipeInput
            onNewRecipe={this.addNewRecipe}
            hideForm={() => this.setState({ showForm: false })}
          />
        ) : null}
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
