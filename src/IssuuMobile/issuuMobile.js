import React from 'react';
import './../CreatorContent/creatorContent.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";
import { Player, ControlBar, PlayToggle, BigPlayButton, ReplayControl } from 'video-react';

class IssuuMobile extends React.Component {

  render() {

    return(
      <div>

      <img src={require("./../assets/img/IssuuMobile/preview.png")} className="mainImg"/>


      <div className="projectContainer">

      <div className="row justifyCenter">
      <div className="col5 "><h2 className="title">Strategy</h2>

      <p>
      The first step in the project was to understand who and why uses Issuu app.
      The data we looked into included past 90 days feature usage and app store reviews.
      Besides that we created an <span className="bold">in-app survey</span>.
      These steps allowed us to understand our target audience much better.
      </p>

      <p>The result of the analysis was to focus on <span className="bold">digital readers</span>
      who come to Issuu to <span className="bold">find and discover content online</span>.

      With the redesign, we aimed to increase reads in Issuu app, lower the churn, increase monthly active users in the app and
      increase feature usage of our core features.</p>

      </div>
      </div>

      </div>

      <img src={require("./../assets/img/IssuuMobile/mylibrary.png")} className="mainImg"/>

      </div>


    )
  }
}

export default withRouter(IssuuMobile);
