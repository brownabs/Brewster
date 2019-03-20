import React, { Component } from 'react'
import Recipe from './RecipeCard'
import "./RecipeCard.css"

export default class RecipeList extends Component {

    render() {

        const userId = parseInt(sessionStorage.getItem("credentials"))

        return (
            <React.Fragment>

                <h1 className="recipe-page-title">Recipes</h1>

                <div className="recipeButton">
                    <button type="button"
                        className="addRecipe"
                        onClick={() => {
                            this.props.history.push("/recipes/new")
                        }
                        }> Add New Recipe
                    </button>
                </div>

                <section className="recipes">

                    {this.props.recipes.filter(recipe => recipe.userId === userId)
                        .map(recipe =>
                            <div className="recipe" key={`r--${recipe.id}`}>
                            <Recipe  recipe={recipe}
                                    {...this.props} 
                                    recipeIngredients={this.props.recipeIngredients}
                                    users={this.props.users}
                                    deleteRecipe={this.props.deleteRecipe}
                                    editRecipe={this.props.editRecipe}
                                    addBatch={this.props.addBatch}
                                    deleteBatch={this.props.deleteBatch}
                                    history={this.props.history} 
                                    />
                            </div>

                        )
                    }

                </section>
            </React.Fragment>
        )
    }
}


