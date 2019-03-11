import React, { Component } from "react"
import { Route } from "react-router-dom"
import UserManager from "../modules/UserManager"

class ApplicationViews extends Component {

    state = {
      users: []
    }
  
  componentDidMount() {
    UserManager.getAll().then(users => this.setState({users: users}))
  }
  render() {
    console.log(this.props.activeUser)
    return <React.Fragment />
  }
}

export default ApplicationViews
