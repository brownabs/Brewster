import React, { Component } from "react"
import "./RecipeCard.css"
import beer from '../auth/beerCartoon.jpg'


export default class RecipeDetail extends Component {
    render() {

        const recipe = this.props.recipes.find(r =>
            r.id === parseInt(this.props.match.params.recipeId))
            || { id: 404, name: "404", description: "RECIPE NOT FOUND" }

        return (
            <section className="recipe">
                <div key={recipe.id} className="recipe-card">
                    <img src={beer} className="recipe-card-image" alt="beer" />
                    <h4 className="recipe-card-name">{recipe.name}</h4>
                    <h6 className="recipe-card-description">{recipe.description}</h6>

                    <button
                        onClick={() => this.props.history.push(`/brewday/${this.props.recipe.id}`)}
                        className="card-link">
                        Ready To Brew
                    </button>
                </div>


            </section>
        )
    }
}
