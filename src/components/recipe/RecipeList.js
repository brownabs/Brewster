import React, { Component } from 'react'
import Recipe from './RecipeCard'

export default class RecipeList extends Component {
    
    render() {

        const userId = parseInt(sessionStorage.getItem("credentials"))

        return (
            <React.Fragment>
                     <div className="taskButton">
                    <button type="button"
                        className="addRecipe"
                        onClick={() => {
                            this.props.history.push("/recipes/new")
                        }
                        }> Add New Recipe
            </button>
                </div>
            <h1 className="recipe-page-title">Recipes</h1>
           
            <section className="recipes">
          
                            {this.props.recipes.filter(recipe => recipe.userId === userId)
                            .map(recipe =>
                                <div className="recipe">
                                    <Recipe key={recipe.id} recipe={recipe} {...this.props}
                                        {...this.props} users={this.props.users} 
                                        deleteRecipe={this.props.deleteRecipe}
                                        editRecipe={this.props.editRecipe}
                                        history={this.props.history} />
                                    </div>
    
                                    )
                                }
            
            </section>
            </React.Fragment>
        )
    }
}


