import React, { Component } from "react";
import beer from '../auth/beerCartoon.jpg'
import "./RecipeCard.css"




export default class RecipeForm extends Component {

    state = {
        name: "",
        description: "",
        userId: parseInt(sessionStorage.getItem("credentials")),
        beerStyle: "",
        SKU: "",
        originalGravity: "",
        fermentationTime: "",
        alcoholContent: "",
        yield: "",
        recipeInstructions: ""
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
            userId: this.state.userId,
            beerStyle: this.state.beerStyle,
            SKU: this.state.SKU,
            originalGravity: this.state.originalGravity,
            fermentationTime: this.state.fermentationTime,
            alcoholContent: this.state.alcoholContent,
            yield: this.state.yield,
            recipeInstructions: this.state.recipeInstructions

        };


        this.props
            .addRecipe(recipe)
            .then(() => this.props.history.push("/"));

    };

    render() {
        return (
            <React.Fragment>
                <form className="recipeForm">
                    {/* <img src={beer} className="recipe-card-image" alt="beer" /> */}
                    <div className="form-group">
                        <label htmlFor="name">Recipe name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Smoke Bomb"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="beerStyle">Beer Style</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="beerStyle"
                            placeholder="Stout"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="description"
                            placeholder="smoky, smooth finish"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="SKU">SKU</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="SKU"
                            placeholder="1530"
                        />
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
                        />
                    </div>
              
                    <button
                        type="submit"
                        onClick={this.constructNewRecipe}
                        className="btn btn-dark"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}