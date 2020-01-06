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
          Hi! My name is <a href="mailto:kejtizuki@gmail.com" className="linkHighlight">Kasia Żukowska</a>, I’m a
          UX Designer <br />
          and data vizualization enthusiast.<br />
          {/* <Typewriter
          options={{
            strings: ['UX Designer', 'Digital Designer', 'Frontend developer', 'Data vis enthusiast'],
            autoStart: true,
            loop: true,
          }}
          /> */}
          Currently working as UI/UX Designer
          at <a href="https://www.issuu.com/" className="link">Issuu, Copenhagen</a>.
          <p id="workLink">
          Scroll down to explore
        </p>
          {/* <div className="icons">
            <a href="https://www.linkedin.com/in/katarzyna-%C5%BCukowska-23398194/" data-tip="My digital CV"><img src={require("./../assets/img/001-linkedin.png")} alt="linkedin"/></a>
            <a href="https://www.behance.net/kejtizukife8c" data-tip="Project space"><img src={require("./../assets/img/002-behance.png")} alt="https:/google.com"/></a>
            <a href="https://github.com/kejtizuki" data-tip="Code playground"><img src={require("./../assets/img/github.png")} alt="github"/></a>
            <a href="https://kejtizuki.cargo.site" data-tip="Photography"><img src={require("./../assets/img/photo.png")} alt="photography portfolio"/></a>
          </div> */}
        </div>
        {/* <div className="picture">
          <img src={require("./../assets/img/me-drinking.jpg")} className="profile"/>
        </div> */}
      </div>

    </div>
    )
  }
}
