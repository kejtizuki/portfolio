import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class BrandRefreshIssuu extends React.Component {

  render() {

    return(
      <div>
      <div className="projectContainer">


      </div>

      <img src={require("./../assets/img/BrandRefresh/overview.png")} className="mainImg"/>

      <div className="projectContainer">

      <div className="row">
      <div className="col3 marginRight80"><h2 className="title">Process</h2>

      <div>
      <p>
      <h4 className="title">Internal Audit Assets</h4>
      Components, Internal questionnaire
      </p>
      <p>
      <h4 className="title">External Audit</h4>
      Target audience, Customer questionnaire, Competitive landscape
      </p>
      <p>
      <h4 className="title">Alignment workshop</h4>
      Keywords and visual direction, Creative direction
      </p>
      <p>
      <h4 className="title">Design Implementation</h4>
      Marketing and product
      </p>
      </div>



      </div>
      <div className="col7">

      <h2 className="title">Internal Audit</h2>
      <p>
      We started the project by asking our colleagues to fill in the questionaire. The purpose of it was to understand how do the employees and management see Issuu and where would they want the company to be in the future.
      We collected the keywords from the survey and grouped them together to understand how can we replace the negative ones with the positives.

      We also run an internal workshop in which we analysed the look and feel of our competitors. That allowed us to deepluy understand the meening and message behind the visuals, both on marketing and product sides.

      </p>
      </div>
      </div>


      <img src={require("./../assets/img/BrandRefresh/wordsCloud2.jpg")} className="mainImg"/>


      <div className="row justifyCenter">
      <div className="col5 "><h2 className="title">External Audit</h2>
      <p>
      The second step was analysing the current trends in product design. We gathered inspiration in a Miro board which allowd to understand how visual elements create a certain tone of voice.
      Together with the design team we created four moodboards representing different looks and feels.
      We brought these moodboards into a meeting with the management. The outcome of the meeting was to move forward with the combination of friendly, fun and bold approaches.
      </p>
      </div>
      </div>

      <div className="row justifyCenter margin80">
      <div className="col5 "><h2 className="title">Alignment Workshop</h2>
      <p>
      During the workshop developers, designers and PMs brought the examples of products and their landing pages. We analysed the branding
      and worked on understanding the brands through keywords. After that we worked together on exploring which keywords describe Issuu now and where
      do we want to be in the future. We agreed that we want to move from utilitarian and old-fashioned look and make it more expressive, modern,
      friendly, professional but creative and fresh.</p>
      </div>
      </div>



      <div className="row margin80">
      <div className="col7 marginRight80">
      <img src={require("./../assets/img/BrandRefresh/brandLayout.png")} className="mainImg"/>
      </div>
      <div className="col3 margin80">


        <h2 className="title">Developing the visual direction</h2>
        <p>
        After exploring the existing trends, analysing the questionaire and workshop insights we started developing the visual direction.
        At the beginning we experimented with different color palettes and styles. One of the restrictions that we had was keeping Issuu Orange
        as our brand color. At first we used the combination of cold colors and brand Orange to create a mid fidelty mockup of
        our landing page.
        </p>
        <p>
        This first exploration allowed us to understand which branding elements we wanted to include in our final brandbook. We decided to keep
        the primary font, use of gradients, shapes and cards. The elements that required reworking were mainly color palette, secondary font and grid system.
        </p>

      </div>
      </div>

      <div className="row justifyCenter ">
      <div className="col5">
      <h2 className="title">Final design implementation</h2>
      <p>
      The outcome of the final redesign was refreshed look and feel and new brand guide which has been used as the base for the Design System.
      </p>
      </div>
      </div>


      </div>

      <img src={require("./../assets/img/BrandRefresh/Colors.png")} className="mainImg"/>

      <div className="projectContainer">

      <div className="row justifyCenter">
      <div className="col5"><h2 className="title">Full color palette</h2>
      <p>
      After few iteractions we took final decisions about primary and seconadry colors and created simple guidelines about color usage.
      Proportions of colors on the page were an important aspect of this part of the brand guide. We specified the purposes of each color for backgrounds, accents (primaries), highlights and secondary midtones.
      Although Orange is our primary color we restricted its use to cover at most 10% of the layout. This color should only be used for very important CTAs on Marketing pages and illustrations accents. We chose Indigo to be the primary Product color as
      it allows to achieve better contrast in combination with text color.
      </p>
      </div>
      </div>

      <img src={require("./../assets/img/BrandRefresh/fullPalette2.png")} className="mainImg"/>

      <div className="row">
      <div className="col7 marginRight80">
      <h3>Contrast rules</h3>
      <div className="row"><div className="col5"><p>Specifying contrast rules allowed us to keep AA contrast accessibility standard accross the platform.</p></div></div>
      </div>
      <div className="col3">
      <h3>Text colors</h3>
      <p>We specified which colors should be used for text displayed on top of different background colors.</p>
      </div>
      </div>

      <img src={require("./../assets/img/BrandRefresh/contrastAndTextUsage3.png")} className="mainImg"/>


      </div>

      </div>
    )
  }
}

export default withRouter(BrandRefreshIssuu);
