import React, { Component } from "react"
import "./RecipeCard.css"
import './BDRecipeDetail.css'
import moment from 'moment'
import gif from './bottling-animated.gif'




export default class BDRecipeDetail extends Component {

   
    
    state = {
        id: "",
        userId: parseInt(sessionStorage.getItem("credentials")),
        recipeId: parseInt(this.props.match.params.recipeId),
        bottleDate: parseInt(this.props.recipes.fermentationTime),
        startDate: "",
        endDate: "",

    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    makeNewBatch = (evt, fermentationTime) => {
        evt.preventDefault()

        const batch = {
            id: this.state.id,
            userId: this.state.userId,
            recipeId: this.state.recipeId,
            startDate: moment().format('LL'),
            bottleDate: moment().add(fermentationTime, 'weeks').format('LL'),
            endDate: moment().add(fermentationTime, 'weeks').add(2, 'weeks').format('LL')

        }


        this.props.addBatch(batch)
        .then(() => this.props.history.push("/batches"))
        

    }

    render() {

        const recipe = this.props.recipes.find(r =>
            r.id === parseInt(this.props.match.params.recipeId))
            || { id: 404, name: "404", description: "RECIPE NOT FOUND" }



        return (
            <section className="brewday">
                <div className="titleAndImage">
                <img src={gif} className="gifImage" alt="loading..." /><h1 className="brewday-recipe-page-title">Brewing</h1><img src={gif} className="gifImage" alt="loading..." />

                </div>
                <div key={recipe.id} className="recipe-card">   
                    <div className="brewday-card-body">
                    <h4 className="recipe-card-name">{recipe.name}</h4>
                    <h5 className="brewday-card-description">Description: {recipe.description}</h5>
                    
                    <h5 className="recipe-card-further-description">Beer Style: {recipe.beerStyle}</h5>
                    <h5 className="recipe-card-further-description">Original Gravity:  {recipe.originalGravity}</h5>
                    <h5 className="recipe-card-further-description">Alcohol Content: {recipe.alcoholContent}</h5>
                    <h5 className="recipe-card-further-description">Fermentation Time: {recipe.fermentationTime} weeks</h5>
                    <h5 className="recipe-card-further-description">Yields: {recipe.yield}</h5>
                    <a href={recipe.recipeInstructions} className="recipe-card-further-description">{recipe.recipeInstructions}</a>

                    <button
                        type="submit"
                        onClick={(e) => {
                            this.makeNewBatch(e, recipe.fermentationTime)}
                        }
                        className="startFermentation"
                    >
                        Start Fermentation
                    </button>
                    </div>
                </div>

            </section>
        )
    }
}