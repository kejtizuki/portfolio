import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectSunWise extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/Thesis/dataVizPreview2.png")} className="mainImg"/>

      </div>
    )
  }
}

export default withRouter(ProjectSunWise);
