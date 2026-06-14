import React from 'react';
import ReactTooltip from 'react-tooltip'
import './hello.scss';
import Typewriter from 'typewriter-effect';

export default class Hello extends React.Component {
  render() {
    return(
      <div className="helloContainer">
      <div className="hello">
        <ReactTooltip className="myTooltip"/>
        <div className="hello-wrapper">
          <div className="hello-greeting">
            Hi there!
          </div>
          <div className="hello-description">
            <p id="workLink" className='smallText'>
            I'm <a href="mailto:kejtizuki@gmail.com" className="linkHighlight">Kasia Żukowska</a> Polish
            Product Designer based in Berlin. I love experimenting, thinking in systems and patterns and analysing problems.
            Currently building a new learning experience at <a href="https://www.babbel.com/" className="linkHighlight">Babbel</a>.
            Before that I built accounts payables space for finance teams at <a href="https://www.pleo.io/" className="linkHighlight">Pleo</a>. </p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
