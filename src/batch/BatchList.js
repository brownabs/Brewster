import React, { Component } from 'react'
import BatchCard from './BatchCard'




export default class BatchList extends Component {
    render() {

        const userId = parseInt(sessionStorage.getItem("credentials"))
        return (
            <React.Fragment>
  
                <section className="batches">

                    {
                        this.props.batches.filter(batch => batch.userId === userId)
                        .map(batch =>
                            <div className="batch" key={batch.id}>
                                <BatchCard batch={batch} {...this.props}
                                    {...this.props} users={this.props.users} 
                                    addBatch={this.props.addBatch}
                                    history={this.props.history} />
                                </div>

                                )
                            }
                </section>
            </React.Fragment>
                        );
                    }
        }
        