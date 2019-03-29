import React, { Component } from "react"
import RecipeManager from "../../modules/RecipeManager"
import "../recipe/RecipeCard.css"

export default class EditBatchForm extends Component {

    state = {
        id: this.props.match.params.recipeId,
        originalGravity: "",
        fermentationTime: "",
        comments: "",
        userId: parseInt(sessionStorage.getItem("credentials")),
        name: "",
        description: "",
        beerStyle: "",
        alcoholContent: "",
        yield: "",
        recipeInstructions: "",
    }
 

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

      editFermentationTime  = () => {
        const editedFermentationTime = {
            fermentationTime: this.state.fermentationTime
        }

        this.props.patchRecipe( editedFermentationTime , this.props.recipes.id)
            .then(() => this.props.history.push("/batches"))
    }

    updateExistingRecipe = evt => {
        evt.preventDefault()


        const editedRecipe = {
            id: this.props.match.params.recipeId,
            userId: this.state.userId,
            originalGravity: this.state.originalGravity,
            fermentationTime: this.state.fermentationTime,
            alcoholContent: this.state.alcoholContent,
            comments: this.state.comments,
            name: this.state.name,
            description: this.state.description,
            beerStyle: this.state.beerStyle,
            yield: this.state.yield,
        };

        this.props.editRecipe(editedRecipe)
            .then(() => this.editFermentationTime())
            .then(() => this.props.history.push("/batches"))       
    }


    componentDidMount() {
        RecipeManager.get(this.props.match.params.recipeId)
            .then(recipe => {
                this.setState({
                    userId: recipe.userId,
                    originalGravity: recipe.originalGravity,
                    fermentationTime: recipe.fermentationTime,
                    comments: recipe.comments,
                    name: recipe.name,
                    description: recipe.description,
                    beerStyle: recipe.beerStyle,
                    alcoholContent: recipe.alcoholContent,
                    yield: recipe.yield,
                    recipeInstructions: recipe.recipeInstructions,
                });
            });
    }



    render() {
        return (
            <React.Fragment>
                <h1 className="recipe-page-title">Edit Batch</h1>
                <div className="newRecipeForm">
                    <form className="recipeForm">
                        <div className="form-group">
                            <label htmlFor="originalGravity">Original Gravity: {this.state.originalGravity}</label>
                            {/* <div>
                            <label htmlFor="originalGravity">Current Gravity: </label></div>
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="originalGravity"
                                placeholder=""
                            /> */}
                        </div>
                        <fieldset>
                        <label htmlFor="fermentationTime">Add Weeks of Fermentation Time:</label>
                        <select id="fermentationTime" className="form-control"
                         onChange={this.handleFieldChange}
                         value={this.state.fermentationTime}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        </fieldset>
                        <div className="form-group">
                            <fieldset>
                                <label htmlFor="comments">Batch Comments:</label>
                                <textarea 
                               className="form-control" 
                               onChange={this.handleFieldChange}
                                id="comments"
                                placeholder="" rows="4" cols="50"></textarea>
                            </fieldset>
                        </div>
                        <button
                            type="submit"
                            onClick={this.updateExistingBatch}
                            className="btn btn-dark"
                        >
                            Submit
          </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}