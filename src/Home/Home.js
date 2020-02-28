import React, { Component } from 'react';
import Hello from '../Hello/Hello';
import Navbar from '../Nav/Navbar';
import Project from '../Project/Project';
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

          <Link to="/time-series">
          <Project title="Medical time series data visualization" image={require("../assets/img/Thesis/preview-perspective.png")}
          className="gridCellCentered"
          description="Medical time series data visualization"
          keywords="Concept, UI, UX, Coding, Data Viz, Web design"
          history={this.props.history}
          redirect="time-series"
          />
          </Link>

          <Link to="/augmentedHearing">
          <Project title="Augmented Hearing" image={require("../assets/img/AH/web.png")}
          className="gridCellCentered"
          description="Augmented hearing app created as a digital tool to interact with a hearing aid."
          keywords="UI, UX, Concept, Prototyping"
          history={this.props.history}
          redirect="augmentedHearing"
          />
          </Link>


        </div>

        <div className="gridContainer">

          <Link to="/dementiaSupport">
          <Project title="Dementia Support App" image={require("../assets/img/OPI/opi-main.png")}
          className="gridCellCentered"
          description="An app designed to support dementia patient's relatives."
          keywords="UX, UI, Concept, Prototyping"
          history={this.props.history}
          redirect="dementiaSupport"
          />
          </Link>

          <Link to="/issuu">
          <Project title="Improving Issuu analytics page" image={require("../assets/img/IssuuPoster/posterPreview.png")}
          className="gridCellCentered"
          description="Redesign of data dashboard for Issuu"
          keywords="UI, UX, Web Design, Data visualization"
          history={this.props.history}
          redirect="issuu"
          />
          </Link>

        </div>

        <div className="gridContainer">

          <Link to="/sunwise">
          <Project title="SunWise" image={require("../assets/img/SunWise/sunwise-main1.jpg")}
          className="gridCellCentered"
          description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
          keywords="UX, UI, User Testing, Interaction Design"
          history={this.props.history}
          redirect="sunWise"
          />
          </Link>

          <Link to="/dogs">
          <Project title="Dogs training app" image={require("../assets/img/Dogs/dogo.png")}
          className="gridCellCentered"
          description="Keep your dog engaded and motivated even when you're not at home"
          keywords="UX, UI, User Testing, Interaction Design"
          history={this.props.history}
          redirect="dogsApp"
          />
          </Link>


        </div>

        <div className="gridContainer">


        <Project title="SF movies visualization" image={require("../assets/img/SF/main.png")}
          description="Visualization of movies locations over years in San Francisco"
          keywords="Data Visualization, Coding"
          history={this.props.history}
          redirect="SFdataVis"
        />

        <Project title="Brushing techniques for parallel coordinates" image={require("../assets/img/DataVis/main3.png")}
          description="Research and user testing of different brushing techniques for parallel coordinates"
          keywords="UI, UX, Data Visualization, Coding, Research"
          history={this.props.history}
          redirect="parallelCoordinates"
        />

        </div>


        <div className="gridContainer">

        <Project title="Mikeller friends" image={require("../assets/img/Mikeller/main.png")}
        description="Mikeller app"
        keywords="UX, Prototyping"
        history={this.props.history}
        redirect="mikellerApp"
        />


        </div>


        <Experience />
      </CSSTransitionGroup>

      </div>
    );
  }
}

export default Home;
