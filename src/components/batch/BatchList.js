import React, { Component } from 'react'
import Batch from './BatchCard';



export default class BatchList extends Component {
    render() {


        return (
            <React.Fragment>
                <h1 className="batch-page-title">Batches</h1>
                <section className="batches">
                {
                    this.props.batches
                        .map(batch =>
                            <div className="batch">
                                 <Batch key={batch.id} 
                                   batch={batch}
                                   {...this.props} 
                                    recipe={this.props.recipe}
                                    users={this.props.users}
                                    deleteBatch={this.props.deleteBatch}
                            />
                            </div>
                        )
                }
            </section>
            </React.Fragment>
        )
    }
}

