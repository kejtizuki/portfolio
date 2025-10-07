import React from 'react';
import './uiexplo.scss';
import Navbar from '.././Nav/Navbar';
import Project from '../Project/ProjectGrid';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class UIExplo extends React.Component {

  handleOnClick = () => {
    console.log("redirect home");
    this.props.history.push("/");
  };


  render() {

    return(

      <div className='uiexplo'>
      <Navbar />

      <div className="gridContainer margin80">

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

      <div className="gridContainer margin80">

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

    </div>

      </div>
    )
  }
}

export default withRouter(UIExplo);
