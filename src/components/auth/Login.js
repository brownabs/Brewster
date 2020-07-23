import React, { Component } from "react";
import "./login.css";
import UserManager from "../../modules/UserManager";
import "./login.css";
import { Link } from "react-router-dom";

export default class Login extends Component {
  // Set initial state
  state = {
    password: "",
    username: "",
  };

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleLogin = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password) {
      UserManager.searchUP(this.state.username, this.state.password).then(
        (user) => {
          if (!user.length) {
            alert("Wrong username or password!");
          } else {
            sessionStorage.setItem("credentials", parseInt(user[0].id));
            this.props.setAuth();
          }
        }
      );
    } else {
      alert("Please Fill Out Form 😬!");
    }
  };

  render() {
    return (
        <section className="landingPage">
          <h1 className="pageTitle">Brewster</h1>
              <form className="loginForm">
                <h1 className="signIn">Sign In</h1>
                <div className="loginInfo">
                <label htmlFor="inputUsername" className="inputUser">Username:</label>
                <input
                  className="username"
                  onChange={this.handleFieldChange}
                  type="username"
                  id="username"
                  placeholder={`username`}
                  required=""
                  autoFocus=""
                />
                <label htmlFor="inputPassword" className="inputUser">Password:</label>
                <input
                  className="password"
                  onChange={this.handleFieldChange}
                  type="password"
                  id="password"
                  placeholder={`password`}
                  required=""
                />
                <button
                  type="submit"
                  className="submit"
                  onClick={this.handleLogin}
                >
                  Submit
                </button>
                <Link to="/register">
                  <button type="submit" className="submit">
                    Register
                  </button>
                </Link>
                </div>
              </form>
              </section>       
    );
  }
}
