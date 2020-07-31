import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectIssuuCreate extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/IssuuCreate/page-rail-issuu.gif")} className="mainImg"/>


      </div>
    )
  }
}

export default withRouter(ProjectIssuuCreate);
