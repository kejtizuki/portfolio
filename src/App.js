import React, { Component } from 'react';
import Hello from './Hello/Hello';
import Navbar from './Nav/Navbar';
import Project from './Project/Project';
import Experience from './Experience/Experience';
import OPI from './OPI/OPI';
import Skill from './Skill/Skill';
import About from './About/About';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import ProjectOverview from './ProjectOverview/ProjectOverview';
import ProjectSunWise from './ProjectSunWise/ProjectSunWise';
import ProjectMikeller from './ProjectMikeller/ProjectMikeller';
import ProjectDogs from './ProjectDogs/ProjectDogs';
import ProjectSF from './ProjectSF/ProjectSF';
import ProjectCosta from './ProjectCosta/ProjectCosta';
import ProjectAH from './ProjectAH/ProjectAH';
import ProjectCoordinates from './ProjectCoordinates/ProjectCoordinates';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.scss';


class App extends Component {

  render() {

    const dogsDesc = <a href="https://www.behance.net/gallery/72991077/Dogs-training-app">This page is currently being built. See the project description under this link.</a>
    const mikellerDesc = <a href="https://www.behance.net/gallery/72186697/Mikeller-Friends-App">This page is currently being built. See the project description under this link.</a>

    return (
      <Router basename={process.env.PUBLIC_URL}>
        {/* <Route exact path="/sunWise" component={() => <div><ProjectOverview
          bgImage={require("./assets/img/Thesis/preview.png")}
          title="Thesis"
          history={this.props.history}
          description="Protect your skin from high UV index. Know when to stop sunbathing."
          keywords="UX, Digital Design, User Testing"
          tools="Adobe Photoshop, Adobe Illustrator"
          longDesc=""
  /> <ProjectSunWise /></div>}
        /> */}

      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/sunWise" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/SunWise/sunwise-main.jpg")}
        title="SunWise"
        history={this.props.history}
        description="Protect your skin from high UV index. Know when to stop sunbathing."
        keywords="UX, UI, User Testing"
        tools="Adobe Photoshop, Adobe Illustrator"
        type="Group project (3 people)"
        longDesc="This project aims to
develop a mobile application that helps its users minimize the sunshine’s
risks while still enjoying its benefits. The application prevents
sun overexposure by allowing users to track the time they
spend outdoors in relation to the UV Index levels. The project was developed as a part of Personal Data Interaction class at DTU."
/> <ProjectSunWise /></div>}
      />
      <Route exact path="/dogsApp" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/Dogs/dogo.png")}
        title="Dogs training app"
        history={this.props.history}
        description="Keep your dog engaded and motivated even when you're not at home."
        keywords="UX, UI, User Testing, Interaction Design"
        tools="Adobe Photoshop, Adobe Illustrator"
        type="Group project (4 people)"
        longDesc="It is a camera based AI system that connects with a treat dispenser to a tv screen, that can provide mental and physical stimulation
        for your dog if there are days you do not have time to give it the mental stimulation dogs need and craves.
        When dogs are at home all day by themselves, their intelligent brains are under stimulated and they get bored,
        leading to depression and often poorly behaved dogs. The app makes sure that your dog stays happy, while it provides the owner with a way to
        track its progress and mental health."
      /><ProjectDogs /></div>}
      />

      <Route exact path="/parallelCoordinates" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/DataVis/main3.png")}
        title="Parallel coordinates"
        history={this.props.history}
        description="Research and user testing of different brushing techniques for parallel coordinates"
        keywords="Data Visualization, Web Design, UX Design"
        tools="Python, HTML, CSS, D3.js"
        type="Group project (2 people)"
        longDesc="Even though parallel coordinates can successfully solve
the issue of visualizing multidimensional data, they often lead to
overplotting when datasets are too large, making the visualization
illegible and the underlying patterns undiscoverable. This is a huge
problem since people fail to understand the information hidden in
the data when they see nothing but visual clutter. This project aims to
improve the overall user experience when interacting with parallel
coordinates and presents five types of brushing that are specifically
designed to filter the data in different ways."
      /><ProjectCoordinates /></div>}
      />
      <Route exact path="/SFdataVis" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/SF/main.png")}
        title="San Francisco Data Visualization"
        history={this.props.history}
        description="Visualization of movie locations over years in San Francisco"
        keywords="Data visualization, Web design, Web development"
        type="Group project (3 people)"
        tools="Python, HTML, CSS, D3.js"
        longDesc="The project was developed as a group assignment for the Data Visualization class at DTU.
        The visualization is interactive and presents movie locations across the years in San Francisco area."
      /><ProjectSF /></div>}
      />
      <Route exact path="/mikellerApp" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/Mikeller/main.png")}
        title="Mikeller app"
        history={this.props.history}
        description="Mikeller app"
        keywords="UI"
        tools="Adobe Photoshop"
        type="Group project (3 people)"
        longDesc="The project was created during Mikeller Challenge. We were provided with the brief and
        based on it we came up with the concept and initial prototype."
      /><ProjectMikeller /></div>}
      />
      <Route exact path="/costa" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/Costa/img.png")}
        title="New Costa cruise experience"
        history={this.props.history}
        description="Experience costa"
        keywords="UI, Ideation, Concept, Prototyping"
        tools="Adobe Xd"
        type="Group project (2 people)"
        longDesc='The project was created as a response to 48h Reply Creative Challenge in Digital Experience category. The task was
        to create a service that can be
leveraged also from occasional guests coming from the city port. Main assumptions were to augment onboard revenues,
augment awareness of the brand and the cruise product and get past cruisers involved again. '
      /><ProjectCosta /></div>}
      />

      <Route exact path="/augmentedHearing" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/AH/web.png")}
        title="Augmented Hearing"
        history={this.props.history}
        description="Augmented hearing app created as a digital tool to interact with a hearing aid."
        keywords="UI, UX, Concept, Prototyping"
        tools="Sketch, Principle"
        type="Individual project"
        longDesc='Protect and augment your hearing via a smartphone - controlled device to distinguish conversation in loud music environments.'
      /><ProjectAH /></div>}
      />

      <Route exact path="/dementiaSupport" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/OPI/opi-main.png")}
        title="Dementia Support App"
        history={this.props.history}
        description="An app designed to support dementia patient's relatives."
        keywords="UI, UX, Concept, Prototyping"
        tools="Sketch"
        type="Group project (5 people)"
        longDesc='The app was designed during one week Sprint at Designit together with municipalities and companies working with dementia disease. The main goal of the app is to support the dementia patients relatives. The app provides support forum, community access and easily explained information on available help options.'
      /><OPI /></div>}
      />
      <Footer />

    </Router>
    );
  }
}

export default App;
