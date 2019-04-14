import React, { Component } from 'react'
import './GettingStarted.css'
import video from "./recording.mov"

export default class GettingStarted extends Component {

    render() {

        return (
            <React.Fragment>
               <h1 className="getting-started-title"><span className="underline">Welcome to Brewster</span></h1>
               <h5 className="getting-started-subtitle"> Getting Started</h5>
               <p className="gsdetails">Brewster is an app for home brewers that makes it easy for you to keep track of beer recipes, batches and fermentation times.
                                        Users are able to create, edit, and delete beer recipes, and select any recipe for 
                                        brewing day. Brewing Day includes the description and instructions associated with the recipe, and a boil timer with the ability to create time 
                                        specific comments. Upon clicking the "Start Fermentation" button, a batch is created. It records the start date of fermentation, and provides the
                                        option to edit fermentation times. As a user, you can declare when your batch is complete. </p>

               <p className="gssubdetails">Below is a video to walk you through the simple steps of getting started with Brewster. Enjoy!</p>
               <video className="video" controls src={video} type="video/mp4"></video>            </React.Fragment>
        )

    }
}