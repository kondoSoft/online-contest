import React, {Component} from "react"
import { Link, browserHistory } from 'react-router'

export class Buttons extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault()
    browserHistory.push('/listUser')
  }
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
          <button type='submit'  className="button is-large is-success">
            <span className="icon is-large">
              <i className="fa fa-check"></i>
            </span>
          </button>
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
