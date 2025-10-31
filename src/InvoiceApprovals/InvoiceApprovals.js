import React from 'react';
import './../InvoiceApprovals/InvoiceApprovals.scss';
import './../CreatorContent/creatorContent.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";
import { Player, ControlBar, PlayToggle, BigPlayButton, ReplayControl } from 'video-react';

class InvoiceApprovals extends React.Component {

  render() {

    return(
      <div>

      <img src={require("./../assets/img/Pleo/Approvals/Thumbnail.png")} className="mainImg"/>


      <div className="projectContainer">

      <div className="row justifyCenter">
      <div className="col5 ">

      <h1>Automating invoice reviews</h1>
      <h2>Problem</h2>
      <p>
      Mid-sized companies needed better control mechanisms in order to pay invoices. They give the finance team confidence in paying and avoiding errors.
      I added invoie reviews to Invoices, which meant allowing Admins to manually add reviewers in V1 and building more complex review workflow based on company settings in V2.
      </p>

      <h2>What I did</h2>
      <p>
      I worked on transitioning the workflow from manual to automated. In the new system, reviewers are automatically assigned to invoices based on invoice amount, tags, and team. Worked closely with Review Management team and Design Systems team to introduce the workflow to my area of the product.
      </p>

      <h2>Impact</h2>
      <p>The new flow saves time and effort and has allowed us to expand our product offering in Germany. Automated flows were among the most requested features in this market. In October 2024, 19% of companies using invoices relied on manual review flows. By September 2025, 38% of companies were using review workflows — 18% still using manual reviews and nearly 21% adopting automated flows.</p>
      </div>
      </div>

      </div>




      <div className='row coloredRow'>
      <div className='col5'>

      <div className='col5'><h2 className='padding50 beforeAfterText'>Before</h2></div>


      <Player
        playsInline
        src={require("./../assets/img/Pleo/Approvals/approvalsV1.mov")}
        className='mainImg playerBlack'
        >
        <ControlBar autoHide disableCompletely />
        <BigPlayButton position="center" />
      </Player>
      </div>
      <div className='col5 margin20'>
      <div className='col5'><h2 className='padding50 beforeAfterText'>After</h2></div>
      <Player
        playsInline
        src={require("./../assets/img/Pleo/Approvals/approvalsV2.mov")}
        className='mainImg playerBlack'
      >
        <ControlBar autoHide disableCompletely />
        <BigPlayButton position="center" />
      </Player>
      </div>
      </div>


      <div className="projectContainer">

      <div className="row justifyCenter">
      <div className="col5 ">

      <h1>Purchase orders</h1>
      <h2>Problem</h2>
      <p>
      Purchase orders in company's buying flow is a way to bring more control and certainty to the process. Our customers wanted a way to get their purchase approved before the invoice is sent. This way, they can save time and hussle when invoice is due to be paid.
      </p>

      <h2>What I did</h2>
      <p>
      I led the design of our POs product from scratch, leading the entire discovery process, including customer recruitment and interviews. This involved deeply understanding user needs and pain points in pre-purchase controls. I structured and led the conversations with users, then designed the MVP, collaborating with the freelancers team. I guided the team on the usage of our design system components and tested the product multiple times pre-release so that the implementation meets our standards.
      Led the alpha testing with customers and the following product rollout.

      </p>

      <h2>Impact</h2>
      <p>Since February 2025, 48 companies created a purchase order. </p>
      </div>
      </div>


      <div className='row '><img src={require("./../assets/img/Pleo/Approvals/POs.png")} className="mainImgNoMargin contentShadowSmallRadius"/></div>

      <div className='row justifyCenter'>
      <div className='col5'>
      <h2>Layout explorations</h2>
      <p>I explored different layout approaches to organize information in a way that felt intuitive without becoming visually heavy. </p>
      <p>An important part of this process was collaborating with engineers early. Through these discussions, we realized the flow needed to be split into logical steps that aligned with the data model.
      We decided on a two-step approach: create the form first, then add reviewers. This structure worked better technically and made more sense to users.</p>
      </div>
      </div>
      <div className='row'>
      <img src={require("./../assets/img/Pleo/Approvals/POs-explorations.png")} className="mainImgNoMargin"/>

      </div>

      <div className='row'>
      <div className='col5'>
      <h2>Final layout</h2>
      <p>After few iterations I landed on the final layout. Two step structure provided a simple constraint. The first step was more challenging to design, as it needed to handle much more data than the second one.
      Through user interviews, I tested different information hierarchies to understand what felt most natural. Users gravitated toward a simple progression: general details first, then line items, with address information at the end.</p>
      <p>This sequence matched the mental model of how they think about purchase orders.</p>
      <p>Line items required a lot of horizontal space for comfortable table interaction. I chose maximum width layout to optimise usability. Narrower layouts forced horizontal scrolling which can slow down the data entry and confuse users. </p>
      <p>As the form is quite long, I added a simple fixed header which stays in place while the user scrolls down. This helps them to not loose context and the most important information while filling in the form.  </p>
      </div>
      </div>
      <div className='row'>
      <img src={require("./../assets/img/Pleo/Approvals/POfinal.png")} className="mainImgNoMargin"/>

      </div>

      <div className='row'><h2>Implemented design</h2></div>
      <div className='row'>
      <img src={require("./../assets/img/Pleo/Approvals/POs.gif")} className="mainImgNoMargin contentShadowSmallRadius"/>

      </div>

      <div className='row'>
      <div className="col7 marginRight80">
      <img src={require("./../assets/img/Pleo/Approvals/lineItems.gif")} className="mainImgNoMargin contentShadowSmallRadius"/>
      </div>
      <div className='col3'><p>I continued iterating on the line items challenge in the display view. When viewing a created purchase order, users need to read through line items quickly but occasionally edit them. I explored an interaction that supported both modes.</p></div>
      </div>

      </div>



      </div>




    )
  }
}

export default withRouter(InvoiceApprovals);
