import React, { Component } from "react"
import "./RecipeCard.css"




export default class RecipeDetail extends Component {
    render() {

        const recipe = this.props.recipes.find(r =>
            r.id === parseInt(this.props.match.params.recipeId))
            || { id: 404, name: "404", description: "RECIPE NOT FOUND" }

        return (
            <section className="recipe">
                <div key={recipe.id} className="recipe-card-body">
            
                    <h4 className="recipe-detail-card-name">{recipe.name}</h4>
                    <h6 className="recipe-card-description">{recipe.description}</h6>
                    <h5 className="recipe-card-further-description">{recipe.beerStyle}</h5>
                    <h5 className="recipe-card-further-description">{recipe.SKU}</h5>
                    <h5 className="recipe-card-further-description"> {recipe.originalGravity}</h5>
                    <h5 className="recipe-card-further-description">{recipe.alcoholContent}</h5>
                    <h5 className="recipe-card-further-description">{recipe.timeToMake}</h5>
                    <h5 className="recipe-card-further-description">{recipe.yield}</h5>
                    <a href={recipe.recipeInstructions} className="recipe-card-further-description">{recipe.recipeInstructions}</a>

                    <button
                        onClick={() => this.props.history.push(`/brewday/${recipe.id}`)}
                        className="card-link">
                        Ready To Brew
                    </button>
                </div>


            </section>
        )
    }
}
