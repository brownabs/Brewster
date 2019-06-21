import React, { Component } from 'react'
import Batch from './BatchCard';

export default class BatchList extends Component {
    render() {

        
        const userId = parseInt(sessionStorage.getItem("credentials"))
        return (
            <React.Fragment>
                <h1 className="batch-page-title">Batches</h1>
                <section className="batches">
                {
                    this.props.batches
                        .filter(batch => batch.userId === userId)
                        .filter(batch => batch.isComplete === false)
                        .map(batch =>
                            <div className="batch">
                                 <Batch key={batch.id} 
                                   batch={batch}
                                   {...this.props} 
                                    recipes={this.props.recipes}
                                    comments={this.props.comments}
                                    users={this.props.users}
                                    deleteBatch={this.props.deleteBatch}
                                    completeBatch={this.props.completeBatch}
                                    patchBatch={this.props.patchBatch}
                            />
                            </div>
                        )
                }
            </section>
            </React.Fragment>
        )
    }
}

