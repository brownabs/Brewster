import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./nav.css"
class Nav extends Component {

  logout = () => {

    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  //import withRouter

  render() {
    return (
      <div className="outerNav">
      <nav className="navbar  navbar-dark bg-dark sticky-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              <h5 className="siteName">Brewster</h5>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/batches">  <h5 className="siteName">Batches</h5></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/completedbatches"> <h5 className="siteName">Completed</h5></Link>
          </li>
        </ul><Link to="/">
        <button
          type="button"
          className="logoutButton"
          onClick={this.logout}>
          Logout
        </button>
        </Link>
       
      </nav>
      </div>
    )
  }
}

export default Nav
