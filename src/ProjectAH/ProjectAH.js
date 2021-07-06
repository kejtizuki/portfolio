import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectAH extends React.Component {

  render() {

    return(
      <div className="projectContainer">

        <div className="cardsFlowBg center">
          <div className="margin40">
          <img src={require("./../assets/img/AH/prototype-choose-filter.gif")} className="prototypeImgSmall gifImgBorder "/>
          <img src={require("./../assets/img/AH/prototype-preset-card-expand.gif")} className="prototypeImgSmall margin40Left gifImgBorder"/>
          <img src={require("./../assets/img/AH/volume.gif")} className="prototypeImgSmall margin40Left gifImgBorder"/>
          </div>
        </div>

        <div className="row">
        <div className="col7"><h2 className="title">Problem</h2>  <p>This project focuses on couple of proplems related to
        hearling loss problem.
        <ul>
        <li>Understanding conversations
        in environments with loud music or high background noise is sometimes difficult </li>
        <li>Working in loud environments results in noise-induced hearing loss </li>
        <li>People are unaware of their hearing ability (potential hearing loss)</li>
        </ul>
        </p></div>
        <div className="col3"></div>
        </div>

        <div className="row">
        <div className="col7"><h2 className="title">Concept</h2>  <p>In this project I present a concept of wearable device for
        hearing protection, that provides augmented hearing, by isolating conversations and optimize for loud music environments.
It connects with an application through a smartphone or smartwatch, where the app is a remote to adjustment and calibration. Besides
that it displays statistics about user's time spent in loud environments and hearing aid usage.
        </p></div>
        <div className="col3"></div>
        </div>



        <h2 className="title">Wireframes / Flow</h2>
        <img src={require("./../assets/img/AH/uxmap.png")} className="mainImg "/>

        <img src={require("./../assets/img/AH/presetsView.png")} className="mainImg"/>

        <div className="row margin40">
          <div className="col7"><img src={require("./../assets/img/AH/prototype-choose-filter.gif")} className="prototypeImg gifImgBorder"/><img src={require("./../assets/img/AH/prototype-preset-card-expand.gif")} className="prototypeImg margin40Left gifImgBorder"/>
          </div>
          <div className="col3 verticalCenter"><h2 className="title">Presets</h2>
          Presets can be accessed either home screen or from the preset list.
          Home screen shortcut allows user to choose preferred preset without entering the list view. The app
          learns on user's actions and remembers the presets that are used most often. It suggests 4 most often used filters, each form
          different category.
          </div>
        </div>

        <div className="margin80"><h2 className="title">New preset</h2></div>
        <div className="margin40 row cardsFlowBg">
          <img src={require("./../assets/img/AH/volume.gif")} className="prototypeImg gifImgBorder"/>
          <div className="cards">

            <img src={require("./../assets/img/AH/orientation.png")} className="prototypeImgSmall"/>
            <img src={require("./../assets/img/AH/equalizer.png")} className="prototypeImgSmall"/>
            <img src={require("./../assets/img/AH/label.png")} className="prototypeImgSmall"/>
            <img src={require("./../assets/img/AH/done.png")} className="prototypeImgSmall"/>
          </div>
        </div>


        <div className="margin80"><h2 className="title">Statistics</h2></div>
        <div className="margin40 row cardsFlowBg">
          <img src={require("./../assets/img/AH/statistics-animation.gif")} className="prototypeImg gifImgBorder"/>

            <img src={require("./../assets/img/AH/statistics-1.png")} className="prototypeImg gifImgBorder"/>

        </div>

      </div>
    )
  }
}

export default withRouter(ProjectAH);
