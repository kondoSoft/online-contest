import React, {Component} from "react"
import { Link } from 'react-router'
let logo = require('../images/logo.png')

class Navbar extends Component{
  render(){
    return (
      <header>
        <nav className="nav">
          <div className="container nav-left ">
            <Link className="nav-item is-brand" to="/">
              <figure className="image is-128x128">
                <img src={logo} alt="logo"/>
              </figure>
            </Link>
            <div className="nav-center nav-item">
              <Link className="nav-item" to="/">
                <h1 className="title is-1">Sistema de Asignación de Boletos</h1>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar;
