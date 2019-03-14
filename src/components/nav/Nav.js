import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./nav.css"
class Nav extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
      <div className="outerNav">
      <nav className="navbar  navbar-dark bg-dark fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              <h5>Brewster</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/batches">Batches In Progress</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/completedbatches">Completed Batches</Link>
          </li>
        </ul>
        <h5 className="navUser">Welcome {this.props.activeUser.username}</h5>
        <button
          type="button"
          className="logoutButton"
          onClick={this.logout}>
          Logout
        </button>
      </nav>
      </div>
    )
  }
}

export default Nav
