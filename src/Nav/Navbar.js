import React from 'react';
import './navbar.scss';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import About from '../About/About';
import UIExplo from '../UIExplo/UIExplo';
var classNames = require('classnames');

class Navbar extends React.Component {

  constructor(props) {
    super(props)
    console.log('nav', props.history.location.pathname)
  }

  render() {
    return(
      <div className="navigation">
      <ul>
      <Link to="/">
        <li>Work</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>

    </ul>
    </div>
    )
  }
}

export default withRouter(Navbar);
