import React, { Component } from "react"
import "./login.css"
import UserManager from "../../modules/UserManager"
import beer from './beerCartoon.jpg'
import './login.css'


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

  handleRegister = e => {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email
    }
    if (this.state.username && this.state.password) {
      UserManager.searchUsername(this.state.username).then(users => {
        if (users.length) {
          alert(`Username ${this.state.username} already exits!`)
        } else {
          UserManager.addUser(newUser).then(user => {
            sessionStorage.setItem("credentials", parseInt(user.id))
            this.props.setAuth()
          })
        }
      })
    } else {
      alert("Please Fill Out Form 😬!")
    }
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
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
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
        <button type="submit" className="submit" onClick={this.handleRegister}>
          Register
        </button>
      </form>
      </div>
      <img src={beer} className="icon--beer" alt="beer" />
          </div>
        </div>
    )
  }
}
