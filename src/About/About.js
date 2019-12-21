import React from 'react';
import './about.scss';
import Navbar from '.././Nav/Navbar'
import WorldMap from './world.js'
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class About extends React.Component {

  handleOnClick = () => {
    console.log("redirect home");
    this.props.history.push("/");
  };


  render() {

    return(

      <div>
        <Link to="/">
        <div className='iconHolder'>
          <div className="iconBg" onClick={this.handleOnClick}>
            <img src={require("./../assets/img/arrow-left-white.png")} alt="arrow" className="iconArrow"/>
          </div>

        </div>
        </Link>
        <div className="projectContainer aboutme">
          <div className="row">
            <div className="col5">
            <img src={require("./../assets/img/me.jpg")} alt="me" className="smallImg" onMouseOver={e => (e.currentTarget.src = require('./../assets/img/me-2.jpg'))}
       onMouseOut={e => (e.currentTarget.src = require('./../assets/img/me.jpg'))}/>
            </div>
            <div className="col5">
              <h1>Hi! I'm Kasia</h1>
              <p>I'm on the last semester of MSc Digital Media Engineering at DTU, working on my thesis in data viz area.
                I have previously received a BSc in Computer Science from AGH University of Science and Technology.
                Currently I work at Issuu as UI/UX Designer. Previously I interned at Designit as UX Designer.
                I like solving complex problems, prototyping and data design. </p>
                <br /><br />

                When I'm not working I am probably doing yoga, windsurfing, travelling or taking analog photos.
                <ul>
                  <li><a href="https://www.linkedin.com/in/katarzyna-%C5%BCukowska-23398194/" data-tip="My digital CV">Linkedin</a></li>
                  <li><a href="https://github.com/kejtizuki" data-tip="Code playground">Github</a></li>
                  <li><a href="https://kejtizuki.cargo.site" data-tip="Photography">Photography</a></li>
                </ul>
            </div>
            </div>
            {/* <div className="col5">
              <h1>When I'm not working</h1>
              <p>Most likely I'll be travelling! Here is my personal travel map where I pin the places I've been to.</p>
            </div> */}
        </div>
        {/* <div className="center"><WorldMap width={960} height={500}/></div> */}
      </div>
    )
  }
}

export default withRouter(About);
