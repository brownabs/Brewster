import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./RecipeCard.css"
import beer from '../auth/beerCartoon.jpg'


export default class BatchCard extends Component {
    render() {

        return (
            <React.Fragment>
                <section className="batch">

                    <div key={this.props.batch.id} className="batch-card">
                        <div className="batch-card-body">
                        <img src={beer} className="batch-card-image" alt="beer" />
                            <h4 className="batch-card-name">{this.props.batch.name}</h4>
                            <h6 className="batch-card-description">{this.props.batch.description}</h6>
                            <Link className="batch-nav-link text-dark" to={`/inprogress/${this.props.batch.id}`}>
                                <h5 className="batch-detail-button">Read More...</h5></Link>
                            <button
                                onClick={() => this.props.deletebatch(this.props.batch.id)}
                                className="deletebatchButton">Delete
                            </button>
                            <button
                                type="button"
                                className="editbatchButton"
                                onClick={() => {
                                    this.props.history.push(`/inprogress/${this.props.batch.id}/edit`)
                                }}
                            >Edit Recipe
                            </button>

                        </div>

                    </div>
                </section>
            </React.Fragment>
        )
    }
}