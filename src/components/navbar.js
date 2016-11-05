import React, {Component} from "react"
let logo = require('../images/logo.png')

class Navbar extends Component{
  render(){
    return (
      <header>
        <nav className="nav">
          <div className="container nav-left ">
            <a className="nav-item is-brand" href="#">
              <figure className="image is-128x128">
                <img src={logo} alt="logo"/>
              </figure>
            </a>
            <div className="nav-center nav-item">
              <a className="nav-item" href="#">
                <h1 className="title is-1">Sistema de Asignación de Boletos</h1>
              </a>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar;
