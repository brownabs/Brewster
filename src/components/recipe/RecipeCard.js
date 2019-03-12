import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./RecipeCard.css"
import beer from '../auth/beerCartoon.jpg'


export default class Recipe extends Component {
    render() {

        return (
            <React.Fragment>
                <section className="recipe">

                    <div key={this.props.recipe.id} className="recipe-card">
                        <div className="recipe-card-body">
                        <img src={beer} className="recipe-card-image" alt="beer" />
                            <h4 className="recipe-card-name">{this.props.recipe.name}</h4>
                            <h6 className="recipe-card-description">{this.props.recipe.description}</h6>
                            <Link className="recipe-nav-link" to={`/recipes/${this.props.recipe.id}`}>
                                <h5 className="recipe-detail-button">Read More...</h5></Link>
                            <button
                                onClick={() => this.props.deleteRecipe(this.props.recipe.id)}
                                className="deleteRecipeButton">Delete
                            </button>
                            <button
                                type="button"
                                className="editRecipeButton"
                                onClick={() => {
                                    this.props.history.push(`/recipes/${this.props.recipe.id}/edit`)
                                }}
                            >Edit Recipe
                            </button>

                        </div>

                    </div>
                </section>
            </React.Fragment>
        )
    }
}

