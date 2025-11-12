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
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class Home extends Component {
  render() {
    return (

      <div className="App">
        <Navbar />
        <TransitionGroup component={null}>
          <CSSTransition
            key="home-content"
            timeout={{ enter: 500, exit: 300 }}
            classNames="example"
          >
            <div>
              <Hello />


              <div className="gridContainer">

                  <div className='column4'>
                    <Project title="Pleo Accounts Payables" image={require("../assets/img/Pleo/Approvals/Thumbnail2.png")}
                    className="gridCellCentered"
                    description="Scaling Pleo Invoices into Accounts Payables"
                    keywords="Product Design,UX,UI"
                    history={this.props.history}
                    redirect="invoiceApprovals"
                    />
                  </div>


                </div>


              <div className="gridContainer">

                  <div className='column2'>
                    <Project title="Issuu graphics editor" image={require("../assets/img/CreatorContent/cover1.png")}
                    className="gridCellCentered"
                    description="A place to repurpose Issuu's publication into new formats"
                    keywords="Product Design,UX,UI"
                    history={this.props.history}
                    redirect="creatorContent"
                    />
                  </div>

                  <div className='column2'>
                    <Project title="Issuu brand refresh and design system" image={require("../assets/img/BrandRefresh/supportingGraphics.png")}
                    className="gridCellCentered"
                    description="New strategy and visual guidelines for Issuu's evolving product and mission"
                    keywords="Branding,Strategy,Art Direction,UI,Concept"
                    history={this.props.history}
                    redirect="issuuBranding"
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
