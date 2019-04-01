import React, { Component } from 'react'
import './Batches.css'
import fermenter from './fermenter.jpg'
import Moment from 'react-moment'

export default class Batch extends Component {

    render() {

        return (
            <React.Fragment>
                <section className="batch">

                    <div key={this.props.batch.recipe.id} className="batch-card">
                        <div className="batch-card-body">
                            <img src={fermenter} className="batch-card-image" alt="fermenter" />
                            <h5 className="batchRecipe">{this.props.batch.recipe.name}</h5>
                            <h6 className="batchStartDate">Start Date: <em>{this.props.batch.startDate}</em> </h6>
                            <h6 className="batchBottleDate"><span>Ready to bottle: <em>{this.props.batch.bottleDate}</em> (<em><Moment fromNow>{this.props.batch.bottleDate}</Moment></em>)</span></h6>
                            <h6 className="batchEndDate"><span>Ready to drink: <em>{this.props.batch.endDate}</em> (<em><Moment fromNow>{this.props.batch.endDate}</Moment></em>)</span></h6>
                                
                            <div className="buttons">
                            <button
                                type="button"
                                className="editBatchButton"
                                onClick={() => {
                                    this.props.history.push(`/batches/${this.props.batch.id}/edit`)
                                }}
                            ><i className="fas fa-edit"></i>
                            </button>
                            <button
                                onClick={() => this.props.deleteBatch(this.props.batch.id)}
                                className="deleteBatchButton"><i className="fas fa-trash-alt"></i>
                            </button>
                            </div>
                        </div>

                    </div>
                </section>
            </React.Fragment>
        )
    }
}