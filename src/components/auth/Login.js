import React, { Component } from "react"
import "./login.css"
import UserManager from "../../modules/UserManager"
import './login.css'
import { Link } from "react-router-dom"



export default class Login extends Component {

  
  // Set initial state
  state = {
    password: "",
    username: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }



  handleLogin = e => {
    e.preventDefault()
    if (this.state.username && this.state.password) {
      UserManager.searchUP(this.state.username, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Wrong username or password!")
          } else {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            this.props.setAuth()
          }
        }
      )
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  render() {
    return (
      <div className="landingPage">
      <p className="pageTitle">Brewster</p>
      <div className="innerLandingPage">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
      <div className="loginFormContainer">
      <form className="loginForm">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label htmlFor="inputUsername">Username:</label>
        <input className="username"
          onChange={this.handleFieldChange}
          type="username"
          id="username"
          placeholder={`username`}
          required=""
          autoFocus=""
        />
        <label htmlFor="inputPassword">Password:</label>
        <input className="password"
          onChange={this.handleFieldChange}
          type="password"
          id="password"
          placeholder={`password`}
          required=""
        />
        <button type="submit" className="submit" onClick={this.handleLogin}>
          Sign in
        </button>
        <Link to="/register">
        <button type="submit" className="submit">Register</button>
        </Link> 
      </form>
      </div>
          </div>
        </div>
    )
  }
}
