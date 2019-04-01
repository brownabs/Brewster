import React, { Component } from "react"
import "../recipe/RecipeCard.css"
import moment from 'moment'
export default class EditBatchForm extends Component {

    state = {

        bottleDate: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingBatch = (evt, id) => {
        evt.preventDefault()

        const editedBatch = {

            bottleDate: moment(this.state.bottleDate).format('LL'),
        }

        this.props.patchBatch(editedBatch, id)
            .then(() => this.props.history.push("/batches"))

    }

    render() {

        const id = this.props.match.params.batchId

        return (
            <React.Fragment>
                <h1 className="recipe-page-title">Edit Batch</h1>
                <div className="newBatchForm">
                    <form className="batchForm">
                        <div className="form-group">
                        </div>
                        <div className="displayBottleDate">
                        <label htmlFor="bottleDate" id="bottleDate">Original Bottle Date:  {this.props.batches.filter(batch => batch.id === parseInt(this.props.match.params.batchId))
                                .map(batch => <span> {batch.bottleDate} </span>
                                )
                            }
                          </label>
                          </div>

                        <div className="dateForm">
                            <label htmlFor="bottleDate">Change Bottle Date: </label>
                            <input
                                type="Date"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="bottleDate"
                                placeholder="Date"
                                value={this.state.bottleDate}
                            />
                        </div>
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
                            className="submitBottleDateButton"
                            onClick={(evt) => {
                                this.updateExistingBatch(evt, id)
                            }
                            }
                        >
                            Submit
          </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}