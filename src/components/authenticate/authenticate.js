import React from 'react';
import ReactTooltip from 'react-tooltip'
import Typewriter from 'typewriter-effect';
import '../../index.scss';
import './authenticate.scss';
import { withRouter } from "react-router-dom";
class Authenticate extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        password: "",
        displayPassword: "",
        error: false
      }
      this.submitData = this.submitData.bind(this);
  }
  inputPassword = (event) => {
    const value = event.target.value;
    const previousLength = this.state.password.length;

    if (value.length > previousLength) {
      // User is typing - add the new character
      const newChar = value.slice(-1);
      const newPassword = this.state.password + newChar;
      this.setState({
        password: newPassword,
        displayPassword: '✦'.repeat(newPassword.length)
      });
    } else if (value.length < previousLength) {
      // User is deleting - remove last character
      const newPassword = this.state.password.slice(0, -1);
      this.setState({
        password: newPassword,
        displayPassword: '✦'.repeat(newPassword.length)
      });
    } else if (value.length === 0) {
      // Cleared everything
      this.setState({
        password: "",
        displayPassword: ""
      });
    }
  };
  submitData(event) {
    console.log('SUBMIT FIRED');
    event.preventDefault();
    const { password } = this.state;
    const matches = password === 'radiohead';
    if (matches) {
      console.log('Match! Attempting redirect...');
      sessionStorage.setItem('pleoAuth', 'true');
      // Get the intended destination from location state or default to invoiceApprovals
      const { from } = this.props.location.state || { from: { pathname: '/invoiceApprovals' } };
      // Redirect to where the user originally wanted to go
      this.props.history.push(from.pathname);
    } else {
      console.log('No match');
      this.setState({ error: true });
    }
  }
  render() {
    const { error, displayPassword } = this.state;
    return(
        <div className="authenticate verticalCenter">
        <div className="row justifyCenter">
          <div className="column2 center">
          <h1>Enter password</h1>
          <form className="" onSubmit={this.submitData}>
          <div className="inputField center">
            <input
              type="text"
              className="inputTxt"
              name="password"
              value={displayPassword}
              placeholder='Type your magic keyword here'
              onChange={this.inputPassword}
              autoComplete="off"
            />
            {error && <p className="error-message">Incorrect password</p>}
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
