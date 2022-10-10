import React, { Component } from 'react';
import Hello from '../Hello/Hello';
import Navbar from '../Nav/Navbar';
import Project from '../Project/ProjectGrid';
import Experience from '../Experience/Experience';
import Skill from '../Skill/Skill';
import Footer from '../Footer/Footer';
import Authenticate from '.././components/authenticate/authenticate';
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
              <Project title="Issuu Creator Content space" image={require("../assets/img/CreatorContent/cover2.png")}
              className="gridCellCentered"
              description="A place to repurpose Issuu's publication into new formats"
              keywords="Product Design,UX,UI"
              history={this.props.history}
              redirect="creatorContent"
              />
            </div>

            <div className='column2'>
              <Project title="Issuu Brand Refresh and Design System" image={require("../assets/img/BrandRefresh/Cover6.png")}
              className="gridCellCentered"
              description="New strategy and visual guidelines for Issuu's evolving product and mission"
              keywords="Branding,Strategy,Art Direction,UI,Concept"
              history={this.props.history}
              redirect="issuuBranding"
              />
            </div>

          </div>



        <div className="gridContainer margin40">

          <div className='column2'>
            <Project title="Redesign of Issuu mobile app" image={require("../assets/img/IssuuMobile/preview.png")}
            className="gridCellCentered"
            description="Redesign of Issuu mobile app"
            keywords="Product Design,Mobile,UX,UI"
            history={this.props.history}
            redirect="issuuMobile"
            />
          </div>

          <div className='column2'>
          <Link to="/issuuReader">
          <Project title="Consuming content on Issuu" image={require("../assets/img/IssuuCreate/ASpreview.png")}
          className="gridCellCentered"
          description="Understanding reading experience on Issuu mobile"
          keywords="Resaerch,Concept,Product Design"
          history={this.props.history}
          redirect="issuuReader"
          />
          </Link>
          </div>

        </div>

        <div className="gridContainer margin40">

        <div className='column2'>
        <Link to="/time-series">
        <Project title="Medical time series data visualization" image={require("../assets/img/Thesis/preview-perspective.png")}
        className="gridCellCentered"
        description="Medical time series data visualization"
        keywords="Concept,UI,UX,Coding,Data Viz,Research"
        history={this.props.history}
        redirect="time-series"
        />
        </Link>
        </div>


        <div className='column2'>
        <Link to="/dementiaSupport">
        <Project title="Dementia Support App" image={require("../assets/img/OPI/opi-main.png")}
        className="gridCellCentered"
        description="An app designed to support dementia patient's relatives."
        keywords="UX,UI,Concept,Design System,Mobile"
        history={this.props.history}
        redirect="dementiaSupport"
        />
        </Link>
        </div>

        </div>

        <div className="gridContainer margin40">

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



      </div>





        <Experience />
      </CSSTransitionGroup>

      </div>
    );
  }
}

export default Home;
