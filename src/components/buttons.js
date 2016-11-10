import React, {Component} from "react"
import { Link } from 'react-router'

export class Buttons extends Component{
  render(){
    return (
      <div className="level control is-grouped is-horizontal">
        <p className="control level-right">
          <Link className="button is-large is-warning">
            <span className="icon is-large">
              <i className="fa fa-trash"></i>
            </span>
          </Link>
        </p>
        <p className="control ">
          <Link to="/listUser" className="button is-large is-success">
            <span className="icon is-large">
              <i className="fa fa-check"></i>
            </span>
          </Link>
        </p>
      </div>
    )
  }
}

export class ButtonPrint extends Component{
  render(){
    return (
      <div className="column is-half is-offset-one-quarter has-text-centered">
        <Link className="button is-large is-primary">
          <span className="icon is-large">
            <i className="fa fa-print"></i>
          </span>
        </Link>
      </div>
    )
  }
}
