import React, { Component } from "react"
import { Route } from 'react-router-dom'
import UserManager from '../modules/UserManager'
import RecipeManager from '../modules/RecipeManager'
import BatchManager from '../modules/BatchManager'
import RecipeIngredientsManager from "../modules/RecipeIngredientsManager"
import RecipeList from './recipe/RecipeList'
import RecipeForm from './recipe/RecipeForm'
import RecipeIngredientForm from './recipe/RecipeIngredientForm'
import RecipeEditForm from './recipe/RecipeEditForm'
import RecipeDetail from './recipe/RecipeDetail'
import BatchDetail from './batch/BatchDetail'
import BDRecipeDetail from './recipe/BDRecipeDetail'
import BatchList from "./batch/BatchList"
// import Timer from './recipe/Timer'

class ApplicationViews extends Component {

  state = {
    users: [],
    recipes: [],
    batches: [],
    recipeIngredients: [],
    currentRecipeId: [],
  }

  addRecipe = ((recipe) =>
    RecipeManager.post(recipe)
      .then((r) => RecipeManager.get(r.id))
      .then((recipe) => this.setState({currentRecipeId: recipe.id}))
      .then(() => RecipeManager.getAll())
      .then(recipes => this.setState({ recipes: recipes })) )


  deleteRecipe = id => {
    return RecipeManager.deleteAndList(id).then(recipes => {
      this.setState({ recipes: recipes });
    })
  }


  editRecipe = recipe => {
    return RecipeManager.put(recipe)
      .then(() => {
        return RecipeManager.getAll()
      })
      .then(recipes => this.setState({ recipes: recipes }))
  }

  addBatch = batch =>
    BatchManager.post(batch)
      .then(() => BatchManager.getAll())
      .then(batches => this.setState({ batches: batches }))


  componentDidMount() {
    UserManager.getAll().then(users => this.setState({ users: users }))

    RecipeIngredientsManager.getAll().then(recipeIngredients => this.setState({ recipeIngredients: recipeIngredients }))

    RecipeManager.getAll().then(recipes => this.setState({ recipes: recipes }))

    BatchManager.getAllBatches().then(batches => this.setState({ batches: batches }))


  }
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <RecipeList {...props}
            recipes={this.state.recipes}
            recipeIngredients={this.state.recipeIngredients}
            deleteRecipe={this.deleteRecipe}
            editRecipe={this.editRecipe}
          />
        }} />

        <Route exact path="/recipes/new" render={(props) => {
          return <RecipeForm {...props}
            addRecipe={this.addRecipe}
            currentRecipeId={this.state.currentRecipeId}

          />
        }} />

        <Route exact path="/recipes/:recipeId(\d+)/edit" render={props => {
          return <RecipeEditForm   {...props}
            recipes={this.state.recipes}
            editRecipe={this.editRecipe}
          />
        }} />
        <Route exact path="/recipes/:recipeId(\d+)" render={(props) => {
          return <RecipeDetail {...props} recipes={this.state.recipes}


          />
        }} />

        <Route exact path="/ingredients/:currentRecipeId(\d+)" render={props => {
          return <RecipeIngredientForm   {...props}
            recipes={this.state.recipes}
            addRecipe={this.addRecipe}
            

          />
        }} />
        <Route exact path="/brewday/:recipeId(\d+)" render={(props) => {
          return <BDRecipeDetail {...props} recipes={this.state.recipes}
            batches={this.state.batches}
            addBatch={this.addBatch}
          />
        }} />

        <Route exact path="/batches" render={(props) => {
          return <BatchList {...props} batches={this.state.batches}
            addBatch={this.addBatch} recipes={this.state.recipes}

          />
        }} />

        {/* <Route exact path="/batches/:batchId(\d+)" render={(props) => {
          return <BatchDetail {...props}
          batches={this.state.batches} recipes={this.state.recipes}
          />
        }} /> */}


      </React.Fragment>
    )

  }
}

export default ApplicationViews
