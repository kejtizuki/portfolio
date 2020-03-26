import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class OPI extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/OPI/opi-main.png")} className="mainImg"/>

        <div className="row">
          <div className="col7"><h2 className="title">My role in the project</h2>
          <p>
          The project was part of my internship as UX Designer at Designit. I was responsible for the UX and most of the UI part (the screens presented on this page
          are designed by me). I also created the Design System. The rest of the team (3 other designers + PM) was working on Branding, Motion Design and Business Design. All of us presented the proejct to the client
          and participated in a workshop regarding the cleint's vision and ideas at the beginning of the project.
          </p>
          </div>
        </div>

        <div className="row">
          <div className="col7"><h2 className="title">Problem</h2>
          <p>
            Relatives of dementia pateients usually struggle not only with helping their loved-ones but also with the lack of
            understanding and attention to their own problems that they face everyday. On top of that practical information about
            available help options or smart devices that could be useful is hard to get. They need to know what to ask for and be
            very well-informed in order to get help from the state. The app aims to provide support on emotional and practical level, bridging
            the gap between the caretakers and organizations offering help.
          </p>
          </div>
        </div>

        <div className="row">
        <div className="col12"><h2 className="title">Human needs, first</h2>
        <p>We put user needs front and center. Everything about the design structure we have made is to make the
        experience as stress free as possible for users. The data that we collect from users needs to serve a purpose. And that purpose is to help them
        find assistance as seamlessly as possible. We provide help on emotional and practical levels. </p>
        </div>
        </div>

        <div className="center"><img src={require("./../assets/img/OPI/words2.png")} className="smallImg"/></div>

        <div className="row margin40">
        <div className="col7"><h2 className="title">Design process</h2>
        <p>First we had to take a look at the available research and used our meetings to understand the scope of what
          we are working with. This allowed for us to begin building our process, creating the structure and flow we wanted
          to utilize.</p>
        </div>
        </div>

        <div className="row margin40">
        <div className="col7"><h2 className="title">Design system</h2>
        <p>The tone that we wanted to keep:<ul>
          <li>Clear</li>
          <li>Informative</li>
          <li>No more information than needed</li>
          <li>Straight forward but still friendly</li></ul></p>
        </div>
        </div>

          <div className="center"><img src={require("./../assets/img/OPI/designSystem.png")} className="mainImg"/></div>

          <div className="row">
          <div className="col7"><h2 className="title">Activities</h2>
          <p>The family should have an overview of activities taking place in their location as they don't have much time to look for the events on their own.
          The overview provides an option to filter or explore the events.</p>
          </div>
          </div>
          <img className="mainImg" src={require('./../assets/img/OPI/activities.png')} />

          <div className="row">
          <div className="col7"><h2 className="title">Bubbles</h2>
          <p>The idea behind the Bubbles was that the users are part of the community, allowing them to do activities together, in a certain group of interested people.
          The difference between the Activities and Bubbles was that activities are more formal, organized events. Bubbles should provide an access to forum and
          give an option to connect with the people who have similar expectations or interests.</p>
          </div>
          </div>
          <img className="mainImg" src={require('./../assets/img/OPI/bubbles.png')} />

          <div className="row">
          <div className="col7"><h2 className="title">Laws and rules</h2>
          <p>
          Taking into account the different ways people process information,
          Rules & Laws should be as accessible as possible.
          The set up includes a video explaining Rules & Laws options available,
          key points that can be read, and an expanded text page for detailed information</p>
          </div>
          </div>
          <img className="mainImg" src={require('./../assets/img/OPI/forum.png')} />

      </div>
    )
  }
}

export default withRouter(OPI);
