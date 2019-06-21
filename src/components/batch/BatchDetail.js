import React, { Component } from "react"
import './Batches.css'
import RecipeManager from "../../modules/RecipeManager";



export default class BatchDetail extends Component {




    render() {

        const userId = parseInt(sessionStorage.getItem("credentials"))
        console.log(userId)

        const comment = this.props.comments
            .find(c =>
                c.batchId === parseInt(this.props.match.params.batchId))
            || {}

        console.log(comment)


        return (
            <React.Fragment>

                <div className="recipe-detail-card-body">
                <h1 className="comment-page-title">Batch Comments</h1>

                {
                    this.props.comments
                        .filter(comment => comment.userId === userId)
                        .map((comment) =>
                            console.log(comment) ||
                            <section >
                                <div key={comment.id}>
                                    <h5> {comment.commentDescription}  
                                    <span className="commentTime"><em>{comment.timeStamp}</em></span>
                                    </h5>
                                </div>
                            </section>

                        )
                }

            <button
                onClick={() => this.props.history.push("/batches")}
                className="backToBatches">
                Back to Batches
                </button>
                </div>
</React.Fragment>

        
        )
    }
}
