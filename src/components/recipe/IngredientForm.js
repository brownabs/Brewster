import React, { Component } from "react";
import "./RecipeCard.css"





export default class IngredientForm extends Component {

    state = {
        id: "",
        name: "",
        type: "",
        currentRecipeId: parseInt(this.props.match.params.currentRecipeId),
        currentIngredients: []
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    createNewIngredient = evt => {

        evt.preventDefault();

        const ingredient = {
            name: this.state.name,
            quantity: this.state.quantity,
            recipeId: this.state.currentRecipeId
        };

        this.props.addIngredient(ingredient)
            .then(() => {
                this.setState({
                    name: "",
                    quantity: ""
                })
            })

    }

    completeRecipe = evt => {
        evt.preventDefault();

        const ingredient = {
            name: this.state.name,
            quantity: this.state.quantity,
            recipeId: this.state.currentRecipeId
        };

        this.props.addIngredient(ingredient)
            .then(() => this.props.history.push(`/recipes/${ingredient.recipeId}`))

    }  

    render() {


        return (
            <React.Fragment>
                <h1 className="recipe-page-title">Ingredients</h1>
                <div className="ingredients">
                    {
                        this.props.ingredients.filter(ingredient =>
                            ingredient.recipeId === parseInt(this.props.match.params.currentRecipeId))
                            .map((ing) =>
                                console.log(ing) ||
                                <section >
                                    <div key={ing.id}>
                                        <h5> {ing.name} :  {ing.quantity}  <button className="deleteIngredientButton"
                                            onClick={() => this.props.deleteIngredient(ing.id)}
                                        > Delete
                                        </button>
                                        </h5>
                                    </div>
                                </section>

                            )
                    }
                </div>
                <div className="newRecipeForm">
                    <form className="ingredientForm">
                        <div className="form-group">
                            <label htmlFor="name">Ingredient Name:</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.handleFieldChange}
                                id="name"
                                placeholder="yeast, grain, extract, hops, additives"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Ingredient Quantity:</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                value={this.state.quantity}
                                onChange={this.handleFieldChange}
                                id="quantity"
                                placeholder="ounces, pounds, etc."
                            />
                        </div>
                        <button
                            type="button"
                            className="addIngredientButton"
                            onClick={this.createNewIngredient}>
                            Add Ingredient
                        </button>
                        <button
                            type="button"
                            className="completeRecipeButton"
                            onClick={this.completeRecipe}>
                            Complete Recipe
                        </button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}