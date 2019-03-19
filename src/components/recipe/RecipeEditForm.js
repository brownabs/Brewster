import React, { Component } from "react"
import RecipeManager from "../../modules/RecipeManager"
import "./RecipeCard.css"

export default class EditTaskForm extends Component {

    state = {
        name: "",
        description: "",
        beerStyle: "",
        originalGravity: "",
        fermentationTime: "",
        alcoholContent: "",
        yield: "",
        recipeInstructions: "",
        comments: "",
        userId: parseInt(sessionStorage.getItem("credentials")),
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
            beerStyle: this.state.beerStyle,
            originalGravity: this.state.originalGravity,
            fermentationTime: this.state.fermentationTime,
            alcoholContent: this.state.alcoholContent,
            yield: this.state.yield,
            recipeInstructions: this.state.recipeInstructions,
            comments: this.state.comments
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
                    userId: recipe.userId,
                    beerStyle: recipe.beerStyle,
                    originalGravity: recipe.originalGravity,
                    fermentationTime: recipe.fermentationTime,
                    alcoholContent: recipe.alcoholContent,
                    yield: recipe.yield,
                    recipeInstructions: recipe.recipeInstructions,
                    comments: recipe.comments
                });
            });
    }



    render() {
        return (
            <React.Fragment>
                <h1 className="recipe-page-title">Edit Recipe</h1>
                <div className="newRecipeForm">
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
                                value={this.state.name}

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="beerStyle">Beer Style:</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="beerStyle"
                                placeholder=""
                                value={this.state.beerStyle}
                            />
                        </div>
                        <div className="form-group">
                            <fieldset>
                                <label htmlFor="description">Description</label>
                                <textarea
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="description"
                                    placeholder="description" 
                                    value={this.state.description}
                                    rows="4" cols="50"></textarea>
                        
                            </fieldset>
                        </div>
                        <div className="form-group">
                            <label htmlFor="originalGravity">Original Gravity</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="originalGravity"
                                placeholder="1.064"
                                value={this.state.originalGravity}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alcoholContent">Alcohol Content</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="alcoholContent"
                                placeholder="low, medium, high"
                                value={this.state.alcoholContent}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="yield">Yields</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="yield"
                                placeholder="5 gallons"
                                value={this.state.yield}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fermentationTime">Fermentation Time</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="fermentationTime"
                                placeholder="weeks before bottling"
                                value={this.state.fermentationTime}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="recipeInstructions">Instructions:</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="recipeInstructions"
                                placeholder=""
                                value={this.state.recipeInstructions}
                            />
                        </div>
                        <div className="form-group">
                            <fieldset>
                                <label htmlFor="comments">Comments:</label>
                                <textarea 
                               className="form-control" 
                               onChange={this.handleFieldChange}
                                id="comments"
                                placeholder="" rows="4" cols="50"></textarea>
                            </fieldset>
                        </div>
                        <button
                            type="submit"
                            onClick={this.updateExistingRecipe}
                            className="btn btn-dark"
                        >
                            Submit
          </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}