import React, {Component} from "react"

export class Buttons extends Component{
  render(){
    return (
      <div className="level control is-grouped is-horizontal">
        <p className="control level-right">
          <a className="button is-large is-warning">
            <span className="icon is-large">
              <i className="fa fa-trash"></i>
            </span>
          </a>
        </p>
        <p className="control ">
          <a href="list_user.html" className="button is-large is-success">
            <span className="icon is-large">
              <i className="fa fa-check"></i>
            </span>
          </a>
        </p>
      </div>
    )
  }
}

export class ButtonPrint extends Component{
  render(){
    return (
      <div className="column is-half is-offset-one-quarter has-text-centered">
        <a className="button is-large is-primary">
          <span className="icon is-large">
            <i className="fa fa-print"></i>
          </span>
        </a>
      </div>
    )
  }
}
