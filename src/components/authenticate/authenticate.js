import React from 'react';
import ReactTooltip from 'react-tooltip'
import Typewriter from 'typewriter-effect';
import CreatorContent from '../../CreatorContent/creatorContent';
import InvoiceApprovals from '../../InvoiceApprovals/InvoiceApprovals';
import ProjectOverview from '../../ProjectOverview/ProjectOverview';
import '../../index.scss';
import './authenticate.scss';
import { BrowserRouter as Link, Redirect, withRouter } from "react-router-dom";

class Authenticate extends React.Component {


  constructor (props) {
      super(props);
      this.state = {
        password: ""
      }
      this.submitData = this.submitData.bind(this);
  }

  inputPassword = (event) => {
    console.log(event.target.value)
    this.setState({ password: event.target.value });
  };

  submitData(event) {
  console.log('SUBMIT FIRED');
  event.preventDefault();

  const { password } = this.state;
  const matches = password === 'radiohead';

  if (matches) {
    console.log('Match! Attempting redirect...');
    sessionStorage.setItem('pleoAuth', 'true');

    // Use React Router instead of window.location
    this.props.history.push('/invoiceApprovals');
  } else {
    console.log('No match');
    this.setState({ error: true });
  }
}

  render() {

    return(
        <div className="authenticate verticalCenter">
        <div className="row justifyCenter">
          <div className="column2 center">

          <form className="" onSubmit={this.submitData}>
          <div className="inputField center">
            <label htmlFor="password" className="inputLabel">Password</label>
            <input type="password" className="inputTxt" name="password" placeholder='Type your magic keyword here' onChange={this.inputPassword}/>
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
