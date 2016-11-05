import React, {Component} from "react"

class Footer extends Component{
  render(){
    return (
      <footer className="footer">
      <div className="container">
      <div className="content has-text-centered">
      <p>
      <strong><a href="http://kondodev.com/">KONDOSOFT 2016</a></strong>, All Rights Reserved.
      {/* <!-- The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. -->

        <!-- <p>
        <a className="icon" href="https://github.com/jgthms/bulma">
        <i className="fa fa-github"></i>
        </a>
        </p> --> */}
        </p>
        </div>
        </div>
        </footer>
      )
    }
  }

  export default Footer;
