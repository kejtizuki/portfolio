import React, { Component } from 'react';
import Hello from './Hello/Hello';
import Navbar from './Nav/Navbar';
import Experience from './Experience/Experience';
import OPI from './OPI/OPI';
import Skill from './Skill/Skill';
import About from './About/About';
import UIExplo from './UIExplo/UIExplo';
import Footer from './Footer/Footer';
import Home from './Home/HomeGrid';
import ProjectOverview from './ProjectOverview/ProjectOverview';
import ProjectMikeller from './ProjectMikeller/ProjectMikeller';
import ProjectThesis from './ProjectThesis/ProjectThesis';
import ProjectAH from './ProjectAH/ProjectAH';
import IssuuStats from './IssuuStats/IssuuStats';
import ProjectIssuuReader from './ProjectIssuuReader/ProjectIssuuReader';
import BrandRefreshIssuu from './BrandRefreshIssuu/BrandRefreshIssuu';
import CreatorContent from './CreatorContent/creatorContent';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Authenticate from './components/authenticate/authenticate';
import ProjectCoordinates from './ProjectCoordinates/ProjectCoordinates';
import InvoiceApprovals from './InvoiceApprovals/InvoiceApprovals';
import IssuuMobile from './IssuuMobile/issuuMobile';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import "@fontsource/uncut-sans";
import './index.scss';


class App extends Component {

  render() {

    const dogsDesc = <a href="https://www.behance.net/gallery/72991077/Dogs-training-app">This page is currently being built. See the project description under this link.</a>
    const mikellerDesc = <a href="https://www.behance.net/gallery/72186697/Mikeller-Friends-App">This page is currently being built. See the project description under this link.</a>
    const loggedIn = false

    return (
      <Router basename={process.env.PUBLIC_URL}>
         <ScrollToTop />
         <Route exact path="/time-series" component={() => <div><ProjectOverview
          bgImage={require("./assets/img/Thesis/dataVizPreview.png")}
          title="Medical time series data visualization"
          history={this.props.history}
          description="How can time-series data be visualized?"
          keywords="Concept,UI,UX,Coding,Data Viz,Web design"
          tools="Sketch, Principle, d3.js, React"
          type="Individual, MSc thesis"
          website={<a href='www.kejtizuki.github.io/time-series-thesis'>Demo</a>}
          longDesc="In my MSc thesis I researched the problem of visualizig time-series data in context of healthcare data. Visualizing time-series data
          can be complicated since it involves looking on different time granularities. This project proposes the modular design that displays one visualization
          at a time and allows the users to easily navigate between different visualizations, without cluttering the data. "
  /> <ProjectThesis /></div>}
        />

        <Route exact path="/issuu" component={() => <div><ProjectOverview
         bgImage={require("./assets/img/IssuuPoster/posterPreview.png")}
         title="Improving Issuu analytics page"
         history={this.props.history}
         description="Redesign of data dashboard for Issuu"
         keywords="UX Designer (UI, UX, Web design, Product design, Data visualizatio)"
         type="Product Design"
         tools="Sketch, Principle"
         longDesc="As UX Designer, I collaborated closely with the developers and a Product Manager to create a smooth data dashboard experience. The project went through few iterations resulting in a simple and easy to interact with interface."
 /> <IssuuStats /></div>}
       />


      <Route exact path="/authenticate" component={() => <div><Authenticate/></div>}
     />

     <Route exact path="/creatorContent" component={() => <div><ProjectOverview
         bgImage={require("./assets/img/CreatorContent/cover2.png")}
         title="Issuu graphics editor"
         history={this.props.history}
         description="A place to repurpose Issuu's publication into new formats"
         keywords="Product designer (end-to-end process)"
         type="Product Design, Issuu. Cross-functional collaboration with PM and Developers "
         tools="Figma"
         longDesc="Creators that publish their content on Issuu need to constantly promote their businesses on social media. Issuu needed a space where they can easily re-create and share social content without using other tools."
    /> <CreatorContent /></div>}
       />

      <Route exact path="/issuuReader" component={() => <div><ProjectOverview
       bgImage={require("./assets/img/IssuuCreate/page-rail-issuu.gif")}
       title="Consuming content on Issuu"
       history={this.props.history}
       description="Understanding reading experience on Issuu mobile"
       keywords="UX Designer (Resaerch, Concept, Interaction Design)"
       type="Product Design, Issuu. Cross-functional collaboration with PM and Developers"
       tools="Sketch, Principle"
       longDesc="65% of Issuu readers are coming from a Mobile device (75% in US) and our reader is not customised for this type of devices. To read a publication on mobile phone the users have to zoom in and reading longer pieces of text is problematic. "
     /> <ProjectIssuuReader /></div>}
     />

      <Route exact path="/" component={Home} />


      <Route exact path="/about" component={About} />

      <Route exact path="/olderprojects" component={UIExplo} />

      <Route exact path="/issuuMobile" component={() => <div><ProjectOverview
          bgImage={require("./assets/img/IssuuMobile/preview.png")}
          title="Redesign of Issuu mobile app"
          history={this.props.history}
          description="How might we redesign the app so that features are more discoverable?"
          keywords="Product Design,Mobile,UX,UI"
          type="Product Design, Issuu."
          tools="Figma"
          longDesc="The goal of the redesign was to create a better experience for digital readers who discover and read content online."
     /> <IssuuMobile /></div>}
        />


      {/* <Route exact path="/dogsApp" component={() => <div><ProjectOverview
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
      /> */}

      <Route exact path="/parallelCoordinates" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/DataVis/main3.png")}
        title="Parallel coordinates"
        history={this.props.history}
        description="Research and user testing of different brushing techniques for parallel coordinates"
        keywords="Data Visualization,Web Design,UX Design"
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
      {/* <Route exact path="/SFdataVis" component={() => <div><ProjectOverview
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
      /> */}
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


      <Route exact path="/augmentedHearing" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/AH/preset-fast.gif")}
        title="Augmented Hearing"
        history={this.props.history}
        description="Augmented hearing app created as a digital tool to interact with a hearing aid."
        keywords="UI,UX,Concept,Prototyping"
        tools="Sketch, Principle"
        type="Individual self-initiated project"
        longDesc='Protect and augment your hearing via a smartphone - controlled device to distinguish conversation in loud music environments. The goal of the project was to play with motion design and explore interaction patterns.'
      /><ProjectAH /></div>}
      />

      <Route exact path="/dementiaSupport" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/OPI/opi-main.png")}
        title="Dementia Support App"
        history={this.props.history}
        description="An app designed to support dementia patient's relatives."
        keywords="UI/UX Designer: responsible for UI, UX, Concept, Prototyping"
        tools="Sketch"
        type="Client work done in a team of 5 design interns"
        longDesc='The app was designed during one week Sprint at Designit together with municipalities and companies working with dementia disease. The main goal of the app is to support the dementia patients relatives. The app provides support forum, community access and easily explained information on available help options.'
      /><OPI /></div>}
      />

      <Route exact path="/issuuBranding" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/BrandRefresh/supportingGraphics.png")}
        title="Issuu brand refresh and design system"
        history={this.props.history}
        description="New strategy and visual guidelines for Issuu's evolving product and mission"
        keywords="Designer (Concept, Branding, Strategy, Art Direction, UI)"
        tools="Figma"
        type="Collaboration with a Lead Designer"
        longDesc='Issuu needed a new look and feel as the product grew and our services expanded. The components used accross time lacked consistancy and the visuals needed to be refreshed. '
      /><BrandRefreshIssuu /></div>}
      />

      <Route exact path="/invoiceApprovals" component={() => <div><ProjectOverview
        bgImage={require("./assets/img/Pleo/Approvals/Thumbnail.png")}
        title="Pleo Accounts Payables"
        history={this.props.history}
        description="Scaling Invoices into Accounts Payables. "
        keywords="Designer (Concept, Branding, Strategy, Art Direction, UI)"
        tools="Figma"
        type="Product Design"
        longDesc='When I joined Pleo, the Invoices product was basic — available only in the UK without advanced approval flows or pre-purchase controls. I led the design of two features that transformed our offering: automated invoice review workflows and purchase orders. These additions enabled expansion into Germany, where such controls are market requirements, and positioned Pleo to compete in the broader accounts payable space. I also contributed to defining the AP product vision and proposed a redesign for Invoices.'
      /><InvoiceApprovals /></div>}
      />


      <Footer />

    </Router>

    );
  }
}

export default App;
