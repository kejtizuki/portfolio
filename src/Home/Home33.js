import React, { Component } from 'react';
import Hello from '../Hello/Hello';
import Navbar from '../Nav/Navbar';
import Project from '../Project/Project33';
import Experience from '../Experience/Experience';
import Skill from '../Skill/Skill';
import Footer from '../Footer/Footer';
import { BrowserRouter as Link, Router, Route } from "react-router-dom";
import '../index.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class Home extends Component {
  render() {
    return (

      <div className="App">
        {/* <Navbar /> */}
        <TransitionGroup component={null}>
          <CSSTransition
            key="home-content"
            timeout={{ enter: 500, exit: 300 }}
            classNames="example"
          >
            <div>
        <Hello />
        <div className="gridContainer">

          <div class='column'>
          <Link to="/time-series">
          <Project title="Medical time series data visualization" image={require("../assets/img/Thesis/preview-perspective.png")}
          className="gridCellCentered"
          description="Medical time series data visualization"
          keywords="Concept, UI, UX, Coding, Data Viz, Web design"
          history={this.props.history}
          redirect="time-series"
          />
          </Link>
          </div>

          <div class='column'>
          <Link to="/augmentedHearing">
          <Project title="Augmented Hearing" image={require("../assets/img/AH/preset-fast.gif")}
          className="gridCellCentered"
          description="Augmented hearing app created as a digital tool to interact with a hearing aid."
          keywords="UI, UX, Concept, Prototyping"
          history={this.props.history}
          redirect="augmentedHearing"
          />
          </Link>
          </div>


        </div>

        <div className="gridContainer">

          <div class='column'>
          <Link to="/dementiaSupport">
          <Project title="Dementia Support App" image={require("../assets/img/OPI/opi-main.png")}
          className="gridCellCentered"
          description="An app designed to support dementia patient's relatives."
          keywords="UX, UI, Concept, Prototyping"
          history={this.props.history}
          redirect="dementiaSupport"
          />
          </Link>
          </div>

        <div class='column'>
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
    </div>

      <div className="gridContainer">
        <div class='column'>
          <Link to="/sunwise">
          <Project title="SunWise" image={require("../assets/img/SunWise/sunwise-main1.jpg")}
          className="gridCellCentered"
          description="SunWise helps you sunbathe in a safe way by collecting the UV index data."
          keywords="UX, UI, User Testing, Interaction Design"
          history={this.props.history}
          redirect="sunWise"
          />
          </Link>
        </div>

          <div class='column'>
          <Project title="Brushing techniques for parallel coordinates" image={require("../assets/img/DataVis/main3.png")}
            description="Research and user testing of different brushing techniques for parallel coordinates"
            keywords="UI, UX, Data Visualization, Coding, Research"
            history={this.props.history}
            redirect="parallelCoordinates"
          />
        </div>


        </div>



        <Experience />
            </div>
          </CSSTransition>
        </TransitionGroup>

      </div>
    );
  }
}

export default Home;
