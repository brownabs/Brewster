import React, { Component } from "react"
import "./RecipeCard.css"
import beer from '../auth/beerCartoon.jpg'



export default class BDRecipeDetail extends Component {

    
    state = {
        id: "",
        userId: parseInt(sessionStorage.getItem("credentials")),
        recipeId: parseInt(this.props.match.params.recipeId),
        startDate: "",
        endDate: "",

    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    makeNewBatch = evt => {
        evt.preventDefault()

        const batch = {
            id: this.state.id,
            userId: this.state.userId,
            recipeId: this.state.recipeId,
            startDate: this.state.startDate,
            endDate: this.state.endDate

        }

        this.props.addBatch(batch)

    }

    render() {

        const recipe = this.props.recipes.find(r =>
            r.id === parseInt(this.props.match.params.recipeId))
            || { id: 404, name: "404", description: "RECIPE NOT FOUND" }



        return (
            <section className="recipe">
                <div key={recipe.id} className="recipe-card">
                    <img src={beer} className="recipe-card-image" alt="beer" />
                    <h4 className="recipe-card-name">{recipe.name}</h4>
                    <p className="recipe-card-description">{recipe.description}</p>
                    <h5 className="recipe-card-further-description">{recipe.beerStyle}</h5>
                    <h5 className="recipe-card-further-description">{recipe.SKU}</h5>
                    <h5 className="recipe-card-further-description"> {recipe.originalGravity}</h5>
                    <h5 className="recipe-card-further-description">{recipe.alcoholContent}</h5>
                    <h5 className="recipe-card-further-description">{recipe.timeToMake}</h5>
                    <h5 className="recipe-card-further-description">{recipe.yield}</h5>
                    <a href={recipe.recipeInstructions} className="recipe-card-further-description">{recipe.recipeInstructions}</a>
                    <div className="dateForm">
                        <label htmlFor="dateForm">Start Date</label>
                        <input
                            type="Date"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="startDate"
                            placeholder=" start date"
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={this.makeNewBatch}
                        className="startFermentation"
                    >
                        Start Fermentation
                    </button>
                </div>

            </section>
        )
    }
}