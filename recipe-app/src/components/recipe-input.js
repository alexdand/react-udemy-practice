import React, { Component } from "react";
import "./recipe-input.css";

class RecipeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      instructions: "",
      ingredients: [""],
      image: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onChangeIngredient = this.onChangeIngredient.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onNewIngredient = this.onNewIngredient.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onChangeIngredient(e) {
    const index = Number(e.target.name.split("-")[1]);
    const ingredients = this.state.ingredients.map((ing, idx) =>
      idx === index ? e.target.value : ing
    );
    this.setState({ ingredients });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onNewRecipe(this.state);
  }

  onNewIngredient() {
    this.setState({
      ingredients: [...this.state.ingredients, ""]
    });
  }

  render() {
    const { title, instructions, image, ingredients } = this.state;
    const inputs = ingredients.map((ing, i) => (
      <div className="recipe-form-line" key={`ingredient-${i}`}>
        <label>
          {i + 1}.
          <input
            type="text"
            name={`ingredient-${i}`}
            value={ing}
            placeholder="Ingredient"
            onChange={this.onChangeIngredient}
          />
        </label>
      </div>
    ));
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h2>New Recipe</h2>
        <span
          onClick={this.props.hideForm}
          style={{
            cursor: "pointer",
            border: "1px solid black",
            padding: "0px 5px"
          }}
        >
          x
        </span>
        <div className="recipe-form-line">
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Title"
              onChange={this.onChange}
            />
          </label>
        </div>
        <div className="recipe-form-line">
          <label>
            Instructions:
            <input
              type="text"
              name="instructions"
              value={instructions}
              placeholder="Instructions"
              onChange={this.onChange}
            />
          </label>
        </div>
        <div className="recipe-form-line">
          <label>
            Image Url:
            <input
              type="text"
              name="image"
              value={image}
              placeholder="Image Url"
              onChange={this.onChange}
            />
          </label>
        </div>
        {inputs}
        <button type="button" onClick={this.onNewIngredient}>
          +
        </button>
        <div>
          <button type="submit">SAVE</button>
        </div>
      </form>
    );
  }
}

export default RecipeInput;
