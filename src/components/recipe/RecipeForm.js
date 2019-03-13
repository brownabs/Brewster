import React, { Component } from "react";
import beer from '../auth/beerCartoon.jpg'



export default class RecipeForm extends Component {

  state = {
    name: "",
    description: "",
    userId: parseInt(sessionStorage.getItem("credentials"))
  };


  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };


  constructNewRecipe = evt => {
    evt.preventDefault();

      const recipe = {
        name: this.state.name,
        description: this.state.description,
        userId: this.state.userId

      };

      // Create the animal and redirect user to animal list
      this.props
        .addRecipe(recipe)
        .then(() => this.props.history.push("/"));
    
  };

  render() {
    return (
      <React.Fragment>
        <form className="recipeForm">
        <img src={beer} className="recipe-card-image" alt="beer" />
          <div className="form-group">
            <label htmlFor="name">Recipe name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
              placeholder="Recipe Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="description"
              placeholder="description"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewRecipe}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}