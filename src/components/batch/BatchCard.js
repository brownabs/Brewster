import React, { Component } from 'react'
import './Batches.css'
import fermenter from './fermenter.jpg'
import moment from 'moment'

export default class Batch extends Component {

    render() {

        return (
            <React.Fragment>
                <section className="batch">

                    <div key={this.props.batch.recipe.id} className="batch-card">
                        <div className="batch-card-body">
                        <img src={fermenter} className="batch-card-image" alt="fermenter" />
                        <h5 className="batchRecipe">{this.props.batch.recipe.name}</h5>
                        <h5 className="batchStartDate">Start Date: {this.props.batch.startDate}</h5> 
                        <h5 className="batchEndDate">End Date: {this.props.batch.endDate}</h5> 
                        {/* <span>Ready to bottle <Moment fromNow>{this.props.batch.endDate}</Moment></span> */}
                </div>

                    </div>
                </section>
            </React.Fragment>
        )
    }
}