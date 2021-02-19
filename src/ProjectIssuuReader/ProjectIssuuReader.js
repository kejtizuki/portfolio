import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectIssuuReader extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/IssuuCreate/ASpreview.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Goals of the project</h2>
        <p>
        I joined the project as UX Designer and worked closely with developers and a project manager.
        There were few goals of the project:
        </p>
        <p>
        - Make it easier to find articles to read on Issuu both on web and mobile  <br />
        - Test and improve interactions with Issuu reader on mobile <br />
        - Allow an easy consumption of different content types (magazines, brochures, flyers, booklets, lookbooks... etc) on mobile phones<br />
        - Increase the median time spent in reader fullscreen mode. When we started the project the median time was 2.2 minutes per month per reader in fullscreen mode
        </p>
        </div>
        <div className="col3">
        </div>
        </div>

        <div className="row">
        <div className="col7"><h2 className="title">Research</h2>
        <p>
        </p>
        </div>
        <div className="col3">
        </div>
        </div>

      </div>
    )
  }
}

export default withRouter(ProjectIssuuReader);
