import React, { Component } from "react"
import "../recipe/RecipeCard.css"
import BatchManager from '../../modules/BatchManager'

export default class EditBatchForm extends Component {

    state = {
        id: "",
        originalGravity: "",
        bottleDate: "",
        endDate: "",
        userId: parseInt(sessionStorage.getItem("credentials")),
        recipeId: "",
        startDate: "",
        comments: ""
    }
 

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    
    updateExistingBatch = evt => {
        evt.preventDefault()

        const editedBatch = {
            id: this.props.match.params.batchId,
            userId: this.state.userId,
            comments: this.state.comments,
            bottleDate: this.state.bottleDate,
            endDate: this.state.endDate,
            recipeId: this.state.recipeId,
            startDate: this.state.startDate,
        }

        this.props.patchBatch(editedBatch)
        .then(() => this.props.history.push("/batches"))

    }

    componentDidMount() {
        BatchManager.get(this.props.match.params.batchId)
        .then(batch => {
            this.setState({
                userId: batch.userId,
                comments: batch.comments,
                bottleDate: batch.bottleDate,
                endDate: batch.endDate,
                recipeId: batch.recipeId,
                startDate: batch.startDate,
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
                            {/* <label htmlFor="originalGravity">Original Gravity: {this.props.recipes.originalGravity}</label> */}
                           
                        </div> 
                        {/* <label htmlFor="bottleDate" id="bottleDate">Original Bottle Date: {this.props.batch.bottleDate}</label> */}
                        <fieldset>
                        <label htmlFor="bottleDate">Add Weeks of Fermentation Time:</label>
                        <select id="bottleDate" className="form-control"
                         onChange={this.handleFieldChange}
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
                        {/* <div className="form-group">
                            <fieldset>
                                <label htmlFor="comments">Batch Comments:</label>
                                <textarea 
                               className="form-control" 
                               onChange={this.handleFieldChange}
                                id="comments"
                                placeholder="" rows="4" cols="50"></textarea>
                            </fieldset>
                        </div> */}
                        <button
                            type="submit"
                            onClick={this.updateExistingBatch}
                            className="submitBottleDateButton"
                        >
                            Submit
          </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}