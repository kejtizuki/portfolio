import React, { Component } from 'react';
import Hello from '../Hello/Hello';
import Navbar from '../Nav/Navbar';
import Project from '../Project/ProjectGrid';
import Experience from '../Experience/Experience';
import Skill from '../Skill/Skill';
import Footer from '../Footer/Footer';
import { BrowserRouter as Link, Router, Route } from "react-router-dom";
import '../index.scss';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

// const CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup')


class Home extends Component {
  render() {
    return (

      <div className="App">
        <Navbar />
        <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
        <Hello />
        <div className="gridContainer">

          <div className='column2'>
          <Link to="/time-series">
          <Project title="Medical time series data visualization" image={require("../assets/img/Thesis/preview-perspective.png")}
          className="gridCellCentered"
          description="Medical time series data visualization"
          keywords="Concept,UI,UX,Coding,Data Viz,Web design"
          history={this.props.history}
          redirect="time-series"
          />
          </Link>
          </div>

          <div className='column2'>
          <Link to="/issuuReader">
          <Project title="Consuming content on Issuu" image={require("../assets/img/IssuuCreate/ASpreview.png")}
          className="gridCellCentered"
          description="Reader"
          keywords="Concept,UI,UX,Product,Prototyping,Resaerch"
          history={this.props.history}
          redirect="issuuReader"
          />
          </Link>
          </div>

        </div>

        <div className="gridContainer">

        <div className='column2'>
        <Link to="/issuu">
        <Project title="Improving Issuu analytics page" image={require("../assets/img/IssuuPoster/scrollStats.gif")}
        className="gridCellCentered"
        description="Redesign of data dashboard for Issuu"
        keywords="UI,UX,Web Design,Data viz,Product"
        history={this.props.history}
        redirect="issuu"
        />
        </Link>
        </div>

        <div className='column2'>
        <Link to="/dementiaSupport">
        <Project title="Dementia Support App" image={require("../assets/img/OPI/opi-main.png")}
        className="gridCellCentered"
        description="An app designed to support dementia patient's relatives."
        keywords="UX,UI,Concept,Design System"
        history={this.props.history}
        redirect="dementiaSupport"
        />
        </Link>
        </div>

        </div>

        <div className="gridContainer">


        <div className='column2'>
        <Link to="/augmentedHearing">
        <Project title="Augmented Hearing" image={require("../assets/img/AH/preview-ah.gif")}
        className="gridCellCentered"
        description="Augmented hearing app created as a digital tool to interact with a hearing aid."
        keywords="UI,UX,Concept,Motion"
        history={this.props.history}
        redirect="augmentedHearing"
        />
        </Link>
        </div>



        <div className='column2'>
          <Project title="SunWise" image={require("../assets/img/SunWise/sunwise-main1.jpg")}
          className="gridCellCentered"
          description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
          keywords="UX,UI,User Testing,Interaction Design"
          history={this.props.history}
          redirect="sunWise"
          />
        </div>






      </div>





        <Experience />
      </CSSTransitionGroup>

      </div>
    );
  }
}

export default Home;
