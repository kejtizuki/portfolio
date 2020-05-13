import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectIssuu extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/IssuuPoster/stats.png")} className="mainImg"/>

        <img src={require("./../assets/img/IssuuPoster/performance-interaction.gif")} className="mainImg"/>

      </div>
    )
  }
}

export default withRouter(ProjectIssuu);
