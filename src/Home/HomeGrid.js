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
            <div className='column4'>
              <Project title="Reducing supplier duplicates through smarter matching and user control" image={require("../assets/img/Pleo/suppliers/cover3.png")}
              className="gridCellCentered"
              description="Redesigning how users select and manage supplier payment details during invoice processing to reduce duplicates and increase confidence"
              keywords="Lead designer"
              history={this.props.history}
              redirect="invoiceSuppliers"
              company="Pleo"
              year="2025"
              />
            </div>
          </div>

          <div className="gridContainer">
          <div className='column2'>
            <Project title="Pleo Purchase Orders"
            image={require("../assets/img/Pleo/POs/PO-thumbnail-big.png")}
            className="gridCellCentered"
            description="Designing purchase orders product from scratch"
            keywords="Product Design,UX,UI"
            history={this.props.history}
            redirect="purchaseOrders"
            company="Pleo"
            year="2025"
            />
          </div>
            </div>



          <div className="gridContainer">

                <div className='column2'>
                  <Project title="Improving clarity on invoices page"
                  image={require("../assets/img/Pleo/InvoicesRedesign/Thumbnail.png")}
                  className="gridCellCentered"
                  description="Redesigning invoices page for clarity. Making the workflow clearer and faster"
                  keywords="Product Design,UX,UI"
                  history={this.props.history}
                  redirect="invoicesRedesign"
                  company="Pleo"
                  year="2025"
                  />
                </div>
                <div className='column2'>
                  <Project title="Issuu graphics editor" image={require("../assets/img/CreatorContent/cover1.png")}
                  className="gridCellCentered"
                  description="A place to repurpose Issuu's publication into new formats"
                  keywords="Product Design,UX,UI"
                  history={this.props.history}
                  redirect="creatorContent"
                  company="Issuu"
                  year="2022"
                  />
                </div>
              </div>

        <div className="gridContainer">


            <div className='column2'>
              <Project title="Redesign of Issuu mobile app"
              image={require("../assets/img/IssuuMobile/preview.png")}
              className="gridCellCentered"
              description="Redesign of Issuu mobile app"
              keywords="Product Design,UX,UI"
              history={this.props.history}
              redirect=""
              company="Issuu"
              year="2023"
              />
            </div>
            <div className='column2'>
              <Project title="Issuu brand refresh and design system" image={require("../assets/img/BrandRefresh/supportingGraphics.png")}
              className="gridCellCentered"
              description="New strategy and visual guidelines for Issuu's evolving product and mission"
              keywords="Branding,Strategy,Art Direction,UI,Concept"
              history={this.props.history}
              redirect="issuuBranding"
              company="Issuu"
              year="2022"
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
