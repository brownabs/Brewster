import React, { Component } from "react"



export default class RecipeDetail extends Component {
    render() {

        // const recipe = this.props.recipes.find(r => 
        //     r.id === parseInt(this.props.match.params.recipeId)) 
        //     || {id:404, name:"404", breed: "RECIPE NOT FOUND"}

        return (
            <section className="recipe">
                <div key={recipe.id} className="recipe-card">
                    <div className="recipe-card-body">
                    <h4 className="recipe-card-title">
                    { recipe.name } 
                    { recipe.description }
                    </h4> 

                    </div>
                </div>
            </section>
        )
    }
}
