import React, { Component } from "react"
import UserManager from "../../modules/UserManager"
import './Register.css'

  export default class Register extends Component {

    state = {
        password: "",
        username: "",
        first_name: "",
        last_name: "",
        email: ""
      }

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
          .then(this.props.history.push('/GettingStarted'))
        }
      })
    } else {
      alert("Please Fill Out Form 😬!")
    }
  }

  render() {
    return (
      <div className="registerLandingPage">
      <p className="registerPageTitle">Brewster</p>
      <div className="registerInnerLandingPage">
      <div className="registerFormContainer">
      <form className="registerForm">
        <label htmlFor="inputUsername"></label>
        <input className="username"
          onChange={this.handleFieldChange}
          type="username"
          id="username"
          placeholder={`username`}
          required=""
          autoFocus=""
        />
        <label htmlFor="inputPassword"></label>
        <input className="password"
          onChange={this.handleFieldChange}
          type="password"
          id="password"
          placeholder={`password`}
          required=""
        />
           <label htmlFor="inputFirstName"></label>
        <input className="first_name"
          onChange={this.handleFieldChange}
          type="name"
          id="first_name"
          placeholder={`first name`}
          required=""
        />
           <label htmlFor="inputLastName"></label>
        <input className="last_name"
          onChange={this.handleFieldChange}
          type="name"
          id="last_name"
          placeholder={`last name`}
          required=""
        />
             <label htmlFor="inputEmail"></label>
        <input className="email"
          onChange={this.handleFieldChange}
          type="email"
          id="email"
          placeholder={`email`}
          required=""
        />
        <button type="submit" className="submit" onClick={this.handleRegister}>
          Register
        </button>
      </form>
      </div>

          </div>
        </div>
    )
  }
}
