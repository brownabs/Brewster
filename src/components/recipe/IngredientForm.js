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

    componentDidMount() {
        const newState = {}
        let currentIngredients= this.props.ingredients.filter(ingredient => ingredient.recipeId === parseInt(this.props.match.params.currentRecipeId))
        newState.currentIngredients = currentIngredients
        this.setState(newState)
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    createNewIngredient = evt => {
        evt.preventDefault();

        const ingredient = {
            id: this.state.id,
            name: this.state.name,
            quantity: this.state.quantity,
           recipeId: this.state.currentRecipeId

        };


        this.props
            .addIngredient(ingredient)

        const newState = this.state
        newState.currentIngredients.push(ingredient)
        this.setState(newState)
        // .then(() => this.props.history.push(`/ingredients/${this.props.currentRecipeId}`))

    };

    render() {


        return (
            <React.Fragment>
                <h1 className="recipe-page-title">Ingredients</h1>
                <div className="ingredient">
                    {
                        this.state.currentIngredients.map((ing) => 
                            <section >
                            <div key={ing.id}>
                                {ing.name}
                                {ing.quantity}
                            </div>
                            <button>Delete</button>
                            </section>
                        
                        )

                    }
                </div>
                <div className="newRecipeForm">
                    <form className="recipeForm">
                        <div className="form-group">
                            <label htmlFor="name">Ingredient Name:</label>
                            <input
                                type="text"
                                required
                                className="form-control"
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