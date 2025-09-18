import React from 'react';
import './../InvoiceApprovals/InvoiceApprovals.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";
import { Player, ControlBar, PlayToggle, BigPlayButton, ReplayControl } from 'video-react';

class InvoiceApprovals extends React.Component {

  render() {

    return(
      <div>

      <img src={require("./../assets/img/Pleo/Approvals/cover1.png")} className="mainImg"/>


      <div className="projectContainer">

      <div className="row justifyCenter">
      <div className="col5 "><h2 className="title">Problem</h2>

      <h1>Invoice approvals are the key part of payment process for companies with 250+ employees. </h1>
      <p>
      Mid-sized companies need approvals in order to pay invoices. This gives the finance team confidence in paying and avoiding errors.
      Usually approvals come from different people, including managers, CFO or budget owners.
      </p>
      <h1>Design challenge</h1>
      <p>When I joined Invocies team, there was no approval process in place. First, we introduced a simple, manual process as an MVP, however
      this didn't fully solve customer needs. Our customers needed automated workflows which could be used for different expense types.
      These workflows remove the manual effort assigning separate reviewers to each invoice and can be customised based on users needs.
      We already had workflows set up in place, which worked for other expense types and my task was to make it work for Invcoies.</p>
      </div>
      </div>
      </div>

      </div>


    )
  }
}

export default withRouter(InvoiceApprovals);
