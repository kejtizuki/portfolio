import React from 'react';
import ReactTooltip from 'react-tooltip'
import Typewriter from 'typewriter-effect';
import CreatorContent from '../../CreatorContent/creatorContent'
import ProjectOverview from '../../ProjectOverview/ProjectOverview'
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
  console.log('Form submitted');
  console.log('Password entered:', this.state.password);

  const { password } = this.state;
  const matches = password === 'radiohead';

  console.log('Does it match?', matches);

  if (matches) {
    console.log('Match! Attempting redirect...');
    sessionStorage.setItem('pleoAuth', 'true');
    console.log('SessionStorage set:', sessionStorage.getItem('pleoAuth'));

    // Try using the full path with basename
    const basePath = process.env.PUBLIC_URL || '';
    window.location.href = `${basePath}/invoiceApprovals`;

    // Or try this.props.history.replace instead of push
    // this.props.history.replace('/invoiceApprovals');
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
