import React, { Component } from "react"
import "./RecipeCard.css"
import beer from '../auth/beerCartoon.jpg'




export default class RecipeDetail extends Component {
   

    render() {

  
        const recipeIngredients = this.props.ingredients
            .filter(ri => parseInt(ri.recipeId) === parseInt(this.props.match.params.recipeId)) 
        console.log(recipeIngredients)

  
        const recipe = this.props.recipes.find(r =>
            r.id === parseInt(this.props.match.params.recipeId))
            || { }
            console.log(recipe)


        return (
            <section className="recipe">
                <div key={recipe.id} className="recipe-detail-card-body">
                    <div className="titleAndImageRecipe">
                        <img src={beer} className="beerMug" alt="beer mug" /><h4 className="recipe-detail-card-name">{recipe.name}</h4><img src={beer} className="beerMug" alt="beer mug" />

                    </div>
                    <h6 className="recipe-detail-card-description">{recipe.description}</h6>
                    <h6 className="recipe-detail-card-further-description">Beer Style: {recipe.beerStyle}</h6>
                    <h6 className="recipe-detail-card-further-description">Original Gravity: {recipe.originalGravity}</h6>
                    <h6 className="recipe-detail-card-further-description">Alcohol Content:{recipe.alcoholContent}</h6>
                    <h6 className="recipe-detail-card-further-description">Fermentation Time: {recipe.fermentationTime}</h6>
                    <h6 className="recipe-detail-card-further-description">Yields: {recipe.yield}</h6>
                    <h6 className="recipe-card-ingredients">Ingredients: {recipeIngredients.name}</h6>
                    {
                        this.props.ingredients
                        .filter(ri => parseInt(ri.recipeId) === parseInt(this.props.match.params.recipeId)) 
                        .map(ri =>
                            <div className="recipeList" key={ri.id}>
                                {ri.name} : {ri.quantity}
                            </div>
                        )
                    }
                    <h6 className="recipe-detail-card-further-description">Recipe Instructions: </h6>
                    <h6 href={recipe.recipeInstructions} className="recipe-card-further-description">{recipe.recipeInstructions}</h6>
                    <h6 className="recipe-detail-card-further-description">Comments: {recipe.comments}</h6>
                    <button
                        onClick={() => this.props.history.push(`/brewday/${recipe.id}`)}
                        className="readyToBrew">
                        Ready To Brew
                    </button>
                </div>


            </section>
        )
    }
}
