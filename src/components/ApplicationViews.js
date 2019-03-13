import React, { Component } from "react"
import { Route } from 'react-router-dom'
import UserManager from "../modules/UserManager"
import RecipeManager from "../modules/RecipeManager";
import RecipeList from './recipe/RecipeList'
import RecipeForm from './recipe/RecipeForm'
import RecipeEditForm from './recipe/RecipeEditForm'
import RecipeDetail from './recipe/RecipeDetail'
// import Timer from './recipe/Timer'
import BDRecipeDetail from './recipe/BDRecipeDetail'

class ApplicationViews extends Component {

  state = {
    users: [],
    recipes: [],
    batches: []
  }

  addRecipe = recipe =>
    RecipeManager.post(recipe)
      .then(() => RecipeManager.getAll())
      .then(recipes => this.setState({ recipes: recipes }));


  deleteRecipe = id => {
    return RecipeManager.deleteAndList(id).then(recipes => {
      this.setState({ recipes: recipes });
    });
  };

  editRecipe = recipe => {
    return RecipeManager.put(recipe)
      .then(() => {
        return RecipeManager.getAll();
      })
      .then(recipes => this.setState({ recipes: recipes }));
  };

  addBatch = task =>
  BatchManager.post(task)
    .then(() => BatchManager.getAll())
    .then(batches => this.setState({ batches: batches }));

  componentDidMount() {
    UserManager.getAll().then(users => this.setState({ users: users }))

    RecipeManager.getAll().then(recipes => this.setState({ recipes: recipes }));

  }
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <RecipeList {...props} recipes={this.state.recipes}
            deleteRecipe={this.deleteRecipe}
            editRecipe={this.editRecipe}
          />
        }} />

        <Route exact path="/recipes/new" render={(props) => {
          return <RecipeForm {...props}
            addRecipe={this.addRecipe}
          />
        }} />

        <Route exact path="/recipes/:recipeId(\d+)/edit" render={props => {
          return <RecipeEditForm   {...props}
            recipes={this.state.recipes}
            editRecipe={this.editRecipe}
          />
        }} />
        <Route exact path="/recipes/:recipeId(\d+)" render={(props) => {
          return <RecipeDetail {...props} recipes={this.state.recipes} />
        }} />


        <Route exact path="/brewday/:recipeId(\d+)" render={(props) => {
          return <BDRecipeDetail {...props} recipes={this.state.recipes}
          batches={this.state.batches}
          addBatch={this.state.addBatch}
          />
        }} />

        {/* <Route exact path="/brewday/:recipeId(\d+)" render={(props) => {
          // return <Timer {...props} 
          // />
        }} /> */}
       <Route exact path="/inprogress" render={(props) => {
          return <RecipeList {...props} batches={this.state.batches}
          addBatch={this.state.addBatch}

          />
        }} />


      </React.Fragment>
    )

  }
}

export default ApplicationViews
