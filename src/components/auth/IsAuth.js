import React, { Component } from "react"
import { Route } from "react-router-dom";
import Login from "./Login"
import Register from './Register'
import UserAccessLayer from "../UserAccessLayer"



class IsAuth extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.isAuthenticated() ? (
          <UserAccessLayer {...this.props} />
        ) : (
            <Route exact path="/" render={(props) => {
              return <Login {...this.props} />
            }}
            />


          )} <Route exact path='/register' render={(props) => {
            return <Register {...props} {...this.props} />
          }} />

      </React.Fragment>
    )
  }
}

export default IsAuth
