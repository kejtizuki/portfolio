import React from 'react';
import ReactTooltip from 'react-tooltip'
import Typewriter from 'typewriter-effect';
import '../../index.scss';
import './authenticate.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class Authenticate extends React.Component {


  constructor (props) {
      super(props);
      this.state = {
        password: ''
      }
  }

  render() {



    return(
      <div className="authenticate verticalCenter">
      <div className="row justifyCenter">
        <div className="column2 center">

        <form className="">
        <div className="inputField center">
          <label htmlFor="password" className="inputLabel">Password</label>
          <input type="password" className="inputTxt" name="password" placeholder='Type your magic keyword here'/>
        </div>
        <button type="submit" className="widebtn inputSubmit">
           Yay, let's check it out
        </button>
      </form>

      </div>
      </div>
      </div>
    )
  }
}


export default withRouter(Authenticate);
