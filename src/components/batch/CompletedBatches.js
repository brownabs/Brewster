import React, { Component } from 'react'
import './Batches.css'
// import fermenter from './fermenter.jpg'
import Moment from 'react-moment'
import beers from './beers.jpg'

export default class CompletedBatchList extends Component {


    render() {

        const userId = parseInt(sessionStorage.getItem("credentials"))

        return (
            <React.Fragment>
                <h1 className="batch-page-title">Completed Batches</h1>
                <section className="batches">
                {
                    this.props.batches
                        .filter(batch => batch.userId === userId)
                        .filter(batch => batch.isComplete === true)
                        .map(batch =>
                  
                    <div key={batch.recipe.id} className="batch-card">
                        <div className="batch-card-body">
                            <img src={beers} className="batch-card-image" alt="fermenter" />    
                            <h5 className="batchRecipe">{batch.recipe.name}</h5>
                            <h6 className="batchStartDate">Start Date: <em>{batch.startDate}</em> </h6>
                            <h6 className="batchBottleDate"><span>Ready to bottle: <em>{batch.bottleDate}</em> (<em><Moment fromNow>{batch.bottleDate}</Moment></em>)</span></h6>
                            <h6 className="batchEndDate"><span>Ready to drink: <em>{batch.endDate}</em> (<em><Moment fromNow>{batch.endDate}</Moment></em>)</span></h6>
                        </div>
                    </div>
                        )
                }

                </section>
            </React.Fragment>
        )
    }
}

