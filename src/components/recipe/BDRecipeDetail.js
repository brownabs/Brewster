import React, { Component } from "react"
import "./RecipeCard.css"
import beer from '../auth/beerCartoon.jpg'
import Timer from './Timer'
import './BDRecipeDetail.css'


export default class BDRecipeDetail extends Component {

    recipe = this.props.recipes.find(r =>
        r.id === parseInt(this.props.match.params.recipeId))
        || { id: 404, name: "404", description: "RECIPE NOT FOUND" }

    

    state = {
        id: "",
        userId: parseInt(sessionStorage.getItem("credentials")),
        recipeId: this.props.match.params.recipeId,

    }

    createBatchObject = evt => {
        evt.preventDefault()

        const newBatchObject = {
            id: this.state.id,
            recipeId: this.props.match.params.recipeId,
            userId: parseInt(sessionStorage.getItem("credentials")),
        }

        this.props
        .addBatch(batches)
        .then(() => this.props.history.push("/inprogess"));
    }
    render() {


    

        return (
            <section className="recipe">
                <div key={recipe.id} className="recipe-card">
                    <img src={beer} className="recipe-card-image" alt="beer" />
                    <h4 className="recipe-card-name">{recipe.name}</h4>
                    <p className="recipe-card-description">{recipe.description}</p>
                    <h7 className="recipe-card-further-description">{recipe.beerStyle}</h7>
                    <h7 className="recipe-card-further-description">{recipe.SKU}</h7>
                    <h7 className="recipe-card-further-description"> {recipe.originalGravity}</h7>
                    <h7 className="recipe-card-further-description">{recipe.alcoholContent}</h7>
                    <h7 className="recipe-card-further-description">{recipe.timeToMake}</h7>
                    <h7 className="recipe-card-further-description">{recipe.yield}</h7>
                    <h7 className="recipe-card-further-description">{recipe.recipeInstructions}</h7>
                    <button className="startFermentation">
                        Start Fermentation
                    </button>
                </div>

            </section>
        )
    }
}