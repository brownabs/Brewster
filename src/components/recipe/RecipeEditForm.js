import React, { Component } from "react"
import RecipeManager from "../../modules/RecipeManager"

export default class EditTaskForm extends Component {
    
    state = {
      name: "",
      description: "",
      userId: parseInt(sessionStorage.getItem("credentials"))
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingRecipe = evt => {
      evt.preventDefault()

    
        const editedRecipe = {
          id: this.props.match.params.recipeId,
          name: this.state.name,
          description: this.state.description,
          userId: this.state.userId,

        };

    this.props.editRecipe(editedRecipe)
    .then(() => this.props.history.push("/"))      
    }
  

    componentDidMount() {
      RecipeManager.get(this.props.match.params.recipeId)
      .then(recipe => {
        this.setState({
          name: recipe.name,
          description: recipe.description,
        });
      });
    }



    render() {
      return (
        <React.Fragment>
        <form className="recipeForm">
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
            onClick={this.updateExistingRecipe}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
      );
    }
}