import React, { Component } from "react"
import "./RecipeCard.css"
import './BDRecipeDetail.css'
import moment from 'moment'
import gif from './bottling-animated.gif'
import StopWatch from './StopWatch'




export default class BDRecipeDetail extends Component {



    state = {
        id: "",
        userId: parseInt(sessionStorage.getItem("credentials")),
        recipeId: parseInt(this.props.match.params.recipeId),
        bottleDate: parseInt(this.props.recipes.fermentationTime),
        startDate: "",
        endDate: "",
        fermentationTime: "",
        isComplete: false,
        newComments: [],
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    makeNewBatch = (evt, fermentationTime) => {
        evt.preventDefault()

        const batch = {
            id: this.state.id,
            userId: this.state.userId,
            recipeId: this.state.recipeId,
            isComplete: this.state.isComplete,
            startDate: moment().format('LL'),
            bottleDate: moment().add(fermentationTime, 'weeks').format('LL'),
            endDate: moment().add(fermentationTime, 'weeks').add(2, 'weeks').format('LL'),
            comments: this.state.comments

        }

        // let batchId = sessionStorage.getItem("batchId")
        // console.log(batchId)

        this.props.addBatch(batch)
            .then(() => {
                let batchId = sessionStorage.getItem("batchId")
                return batchId
            })
            .then((batchId) => {

                this.addBatchComment(batchId)
            })
            .then(() => this.props.history.push("/batches"))
    }

    storeComment = (comment) => {

        let newComments = [...this.state.newComments]
        console.log(newComments)
        newComments.push(comment)
        this.setState({
            newComments
        })

        return ""
    }



    addBatchComment = (batchId) => {


        console.log(batchId)
        this.state.newComments.forEach(comment => {
            const theComment = {
                timeStamp: comment.timeStamp,
                batchId: parseInt(batchId),
                userId: comment.userId,
                commentDescription: comment.commentDescription
            }
            this.props.addBatchComments(theComment)
        })



        console.log("addBatchComments")

    }


    render() {

        const recipe = this.props.recipes.find(r =>
            r.id === parseInt(this.props.match.params.recipeId))
            || {}



        return (

            <section className="brewday">
                <div className="titleAndImage">
                    <img src={gif} className="gifImage" alt="loading..." /><h1 className="brewday-recipe-page-title">Brewing</h1><img src={gif} className="gifImage" alt="loading..." />

                </div>
                <div key={recipe.id} className="recipe-card">
                    <div className="brewday-card-body">
                        <div className="stopWatchComponent" >

                            <h4 className="recipe-card-name">{recipe.name}</h4>
                            <h5 className="brewday-card-further-description">Description: {recipe.description}</h5>
                            <h5 className="brewday-card-further-description">Beer Style: {recipe.beerStyle}</h5>
                            <h5 className="brewday-card-further-description">Original Gravity:  {recipe.originalGravity}</h5>
                            <h5 className="brewday-card-further-description">Alcohol Content: {recipe.alcoholContent}</h5>
                            <h5 className="brewday-card-further-description">Fermentation Time: {recipe.fermentationTime} weeks</h5>
                            <h5 className="brewday-card-further-description">Yields: {recipe.yield}</h5>

                        </div>
                        <h3 className="brewday-card-instruction-further-description">Instructions</h3>

                        <h5 className="brewday-instructions-card-further-description"> {recipe.recipeInstructions}</h5>

                            <StopWatch    {...this.props}
                                batches={this.props.batches}
                                comments={this.props.comments}
                                recipes={this.props.recipes}
                                addBatchComments={this.props.addBatchComments}
                                storeComment={this.storeComment}
                                history={this.props.history}
                                newComments={this.state.newComments}

                            />

                        <button
                            type="submit"
                            onClick={(e) => {
                                this.makeNewBatch(e, recipe.fermentationTime)
                            }
                            }
                            className="startFermentation"
                        >
                            Start Fermentation
                    </button>
                    </div>
                </div>

            </section>
        )
    }
}