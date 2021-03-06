import React, { Component } from "react"
import { Route } from 'react-router-dom'

import GettingStarted from './auth/GettingStarted'

import UserManager from '../modules/UserManager'
import RecipeManager from '../modules/RecipeManager'
import BatchManager from '../modules/BatchManager'
import IngredientManager from '../modules/IngredientManager'
import CommentManager from '../modules/CommentManager'

import RecipeList from './recipe/RecipeList'
import BatchList from './batch/BatchList'
import CompletedBatchList from './batch/CompletedBatches'

import RecipeForm from './recipe/RecipeForm'
import IngredientForm from './recipe/IngredientForm'
import EditBatchForm from './batch/EditBatchForm'
import RecipeEditForm from './recipe/RecipeEditForm'

import BatchDetail from './batch/BatchDetail'
import RecipeDetail from './recipe/RecipeDetail'
import BDRecipeDetail from './recipe/BDRecipeDetail'



class ApplicationViews extends Component {

  state = {
    users: [],
    recipes: [],
    batches: [],
    ingredients: [],
    currentRecipeId: [],
    comments: [],
  }

  addRecipe = ((recipe) =>
    RecipeManager.post(recipe)
      .then((r) => RecipeManager.get(r.id))
      .then((recipe) => this.setState({ currentRecipeId: recipe.id }))
      .then(() => RecipeManager.getAll())
      .then(recipes => this.setState({ recipes: recipes })))


  deleteRecipe = id => {
    return RecipeManager.deleteAndList(id).then(recipes => {
      this.setState({ recipes: recipes });
    })
  }

  deleteBatch = id => {
    return BatchManager.deleteBatch(id).then(batches => {
      this.setState({ batches: batches });
    })
  }

  deleteIngredient = id => {
    return IngredientManager.deleteAndList(id).then(ingredients => {
      this.setState({ ingredients: ingredients });
    })
  }

  editRecipe = recipe => {
    return RecipeManager.put(recipe)
      .then(() => {
        return RecipeManager.getAll()
      })
      .then(recipes => this.setState({ recipes: recipes }))
  }

  patchBatch = (editedBatch, id) => {
    return BatchManager.patch(editedBatch, id)
      .then(() => {
        return BatchManager.getAll()
      })
      .then(batches => {
        this.setState({ batches: batches });
      })
  }

  patchRecipe = (editedFermentationTime, id) => {
    return RecipeManager.patch(editedFermentationTime, id)
      .then(() => {
        return RecipeManager.getAll();
      })
      .then(recipes => this.setState({ recipes: recipes }));
  }

  addBatch = batch => {
    return BatchManager.post(batch)
      .then((response) => {
        sessionStorage.setItem("batchId", response.id)
        sessionStorage.getItem(response.id)
      })
      .then(() => BatchManager.getAll())
      .then(batches => this.setState({ batches: batches }))
  }


  addBatchComments = comment => {
    return CommentManager.post(comment)
      .then(() => CommentManager.getAll())
      .then(comments => this.setState({ comments: comments }))
  }



  addBatchId = (batchId) => {
    return CommentManager.put(batchId)
      .then(() => {
        CommentManager.getAll();
      })
      .then(comments => this.setState({ comments: comments }));

  }


  completeBatch = () => {
    console.log("batch completed")
  }


  addIngredient = ingredient =>
    IngredientManager.post(ingredient)
      .then(() => IngredientManager.getAll())
      .then(ingredients => this.setState({ ingredients: ingredients }))


  componentDidMount() {

    UserManager.getAll().then(users => this.setState({ users: users }))

    RecipeManager.getAll().then(recipes => this.setState({ recipes: recipes }))

    BatchManager.getAllBatches().then(batches => this.setState({ batches: batches }))

    IngredientManager.getAll().then(ingredients => this.setState({ ingredients: ingredients }))

    CommentManager.getAll().then(comments => this.setState({ comments: comments }))

  }
  render() {
    return (
      <React.Fragment>
        <Route exact path="/GettingStarted" render={(props) => {
          return <GettingStarted
          />
        }} />
        <Route exact path="/" render={(props) => {
          return <RecipeList {...props}
            recipes={this.state.recipes}
            deleteRecipe={this.deleteRecipe}
            editRecipe={this.editRecipe}
          />
        }} />

        <Route exact path="/recipes/new" render={(props) => {
          return <RecipeForm {...props}
            addRecipe={this.addRecipe}
            currentRecipeId={this.state.currentRecipeId}
            ingredients={this.state.ingredients}
          />
        }} />

        <Route exact path="/recipes/:recipeId(\d+)/edit" render={props => {
          return <RecipeEditForm  {...props}
            recipes={this.state.recipes}
            editRecipe={this.editRecipe}
          />
        }} />

        <Route exact path="/recipes/:recipeId(\d+)" render={(props) => {
          return <RecipeDetail {...props}
            recipes={this.state.recipes}
            ingredients={this.state.ingredients}
          />
        }} />

        <Route exact path="/ingredients/:currentRecipeId(\d+)" render={(props) => {
          return <IngredientForm  {...props}
            recipes={this.state.recipes}
            addRecipe={this.addRecipe}
            ingredients={this.state.ingredients}
            addIngredient={this.addIngredient}
            deleteIngredient={this.deleteIngredient}
          />
        }} />

        <Route exact path="/brewday/:recipeId(\d+)" render={(props) => {
          return <BDRecipeDetail {...props}
            recipes={this.state.recipes}
            batches={this.state.batches}
            addBatch={this.addBatch}
            comments={this.state.comments}
            addBatchComments={this.addBatchComments}
            storeComment={this.storeComment}
            addBatchId={this.addBatchId}
          />
        }} />

        <Route exact path="/batches" render={(props) => {
          return <BatchList {...props}
            batches={this.state.batches}
            addBatch={this.addBatch}
            recipes={this.state.recipes}
            deleteBatch={this.deleteBatch}
            completeBatch={this.completeBatch}
            addComment={this.addComment}
            comments={this.state.comments}
            addTimeToBottleDate={this.addTimeToBottleDate}
            patchBatch={this.patchBatch}
          />
        }} />

        <Route exact path="/batches/:batchId(\d+)/edit" render={props => {
          return <EditBatchForm  {...props}
            recipes={this.state.recipes}
            batches={this.state.batches}
            patchBatch={this.patchBatch}
            patchRecipe={this.patchRecipe}
          />
        }} />

        <Route exact path="/batches/:batchId(\d+)" render={(props) => {
          return <BatchDetail {...props}
                  batches={this.state.batches}
                  comments={this.state.comments}
          />
        }} />

        <Route exact path="/completedbatches" render={(props) => {
          return <CompletedBatchList {...props}
            batches={this.state.batches}
            comments={this.state.comments}
          />
        }} />


      </React.Fragment>
    )

  }
}

export default ApplicationViews
