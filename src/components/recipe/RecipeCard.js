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
                            <h6 className="recipe-card-beerStyle">{this.props.recipe.beerStyle}</h6>
                            <Link className="recipe-nav-link text-dark" to={`/recipes/${this.props.recipe.id}`}>
                                <h5 className="recipe-detail-button"><em>Read More</em></h5></Link>
                                <div className="buttons">
                            <button
                                type="button"
                                className="editRecipeButton"
                                onClick={() => {
                                    this.props.history.push(`/recipes/${this.props.recipe.id}/edit`)
                                }}
                            ><i className="fas fa-edit"></i>
                            </button>
                            <button
                                onClick={() => this.props.deleteRecipe(this.props.recipe.id)}
                                className="deleteRecipeButton"><i className="fas fa-trash-alt"></i>
                            </button>
                            </div>
                            <button
                        onClick={() => this.props.history.push(`/brewday/${this.props.recipe.id}`)}
                        className="readyToBrew">
                        Ready To Brew
                    </button>
                        </div>

                    </div>
                </section>
            </React.Fragment>
        )
    }
}

