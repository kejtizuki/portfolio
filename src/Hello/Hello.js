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
        <div className="hello-description">
          Hi there!
          <p id="workLink" className='smallText'>
          I'm <a href="mailto:kejtizuki@gmail.com" className="linkHighlight">Kasia Żukowska</a> Polish
          Product Designer based in between Berlin and Copenhagen. I enjoy building interactive experiences and digital products. Currently
          building Invoices at <a href="https://www.pleo.io/" className="linkHighlight">Pleo</a>.
          </p>
        </div>
        {/* <div className="picture">
          <img src={require("./../assets/img/me-drinking.jpg")} className="profile"/>
        </div> */}
      </div>

    </div>
    )
  }
}
