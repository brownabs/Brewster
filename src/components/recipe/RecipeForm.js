import React, { Component } from "react";
import "./RecipeCard.css"


export default class RecipeForm extends Component {


    state = {
        name: "",
        description: "",
        userId: parseInt(sessionStorage.getItem("credentials")),
        beerStyle: "",
        originalGravity: "",
        fermentationTime: "",
        alcoholContent: "",
        yield: "",
        recipeInstructions: "",
        comments: ""
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
            beerStyle: this.state.beerStyle,
            originalGravity: this.state.originalGravity,
            fermentationTime: this.state.fermentationTime,
            alcoholContent: this.state.alcoholContent,
            yield: this.state.yield,
            recipeInstructions: this.state.recipeInstructions,
            comments: this.state.comments,
            userId: this.state.userId

        };


        this.props
            .addRecipe(recipe)
            .then(() => this.props.history.push(`/ingredients/${this.props.currentRecipeId}`))

    };

    render() {
        return (
            <React.Fragment>
                <h1 className="recipe-page-title">New Recipe</h1>
                <div className="newRecipeForm">
                    <form className="recipeForm">
                        <div className="form-group">
                            <label htmlFor="name">Recipe Name:</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder=""
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
                            />
                        </div>
                        <div className="form-group">
                            <fieldset>
                                <label htmlFor="description">Description:</label>
                                <textarea
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="description"
                                    placeholder="" rows="4" cols="50"></textarea>
                            </fieldset>
                        </div>
                        <div className="form-group">
                            <label htmlFor="originalGravity">Original Gravity:</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="originalGravity"
                                placeholder="1.064"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="alcoholContent">Alcohol Content:</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="alcoholContent"
                                placeholder="low, medium, high"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="yield">Yields:</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="yield"
                                placeholder="5 gallons"
                            />
                        </div>
                        {/* <div className="form-group">
                            <label htmlFor="fermentationTime">Fermentation Time:</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="fermentationTime"
                                placeholder="number of weeks before bottling"
                            />
                        </div> */}
                        <fieldset>
                        <label htmlFor="fermentationTime">Fermentation Time:</label>
                        <select id="fermentationTime" className="form-control"
                         onChange={this.handleFieldChange}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        </fieldset>
                        <div className="form-group">
                            <fieldset>
                                <label htmlFor="recipeInstructions">Instructions:</label>
                                <textarea
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="recipeInstructions"
                                    placeholder="" rows="4" cols="50"></textarea>
                            </fieldset>
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
                            onClick={this.constructNewRecipe}
                            className="btn btn-dark"
                        >
                            Next Step: Add Ingredients
                         </button>

                    </form>
                </div>
            </React.Fragment>
        );
    }
}