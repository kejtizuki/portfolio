import React from 'react';
import './experience.scss';

class Experience extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  showElem(e) {
    this.setState({
      currentIndex: e.id
    })
    console.log('AFTER HOVER', this.state.currentIndex)
  }


  render() {

    const list = [
      {id: 0, name: "Issuu", url: "https://issuu.com/", description: "Redesigned Issuu's analytics page, taking into account conversion rates and upgrades for premium plan. Currently working on the new design system and new creation tool. Animating UI elements to create beautiful and interactive experience.",
      img: require("../assets/img/IssuuPoster/logo.png")},
      {id: 1, name: "Designit", url: "https://designit.com/", description: "I'm responsible for various tasks related to UI design, preparation of user interviews and design research. Projects I took part in include: design of smart office application (user testing, UX design, preparing remote interviews), redesign of data-driven platform (UX/UI design), research of smart home solutions for people with disabilitie, concept and prototype of the app for dementia patient's relatives. During my daily tasks I use Sketch, Invision, Illustrator and Principle.",
      img: require("../assets/img/designitLogo.png")},
      {id: 2, name: "Dixa", url: "https://dixa.com/", description: "Worked on customer service software. I took part in the redesign process of the platform. Coded tha main functionalities of the platform using HTML, CSS and React. Responsible for CSS animations, responsive views and styled components library.",
      img: require("../assets/img/dixaLogo.jpg")},
      {id: 3, name: "Cachet", publication: "JMIR", url: "https://www.cachet.dk/.com/", description: "I participated in the development of Internet-based Cognitive Assessment Tool (ICAT) - a web-based tool that assesses verbal memory, working memory, and psychomotor speed using short tasks. The platform was created to conduct digital assessment of cognition in affective disorders. Usually this kind of assessment is conducted by the doctor and patient as pen-and-pencil test and during my project I worked on digitalisation of the test. Besides being responsible for frontend development I participated in brainstorming sessions, I sketched mockups on paper and worked on creation of flowcharts. I also participated in validation and redesign of the platform, including the layout and graphical design of each page, the instructions to the participants, the use of speech recognition, feedback to the participants after each task, the use of input modalities (i.e. keyboard, mouse, and touch), and the informed consent pages. ",
      img: require("../assets/img/cachetLogo.png")
    },
      {id: 4, name: "IBM", url: "https://ibm.com/", description: "My major tasks were related to the implementation of frontend part of the website designed for IBM Finance Department. Besides the development, I crafted the user interface of the platform, designed interaction patterns and researched use cases. I participated in all stages of the development.",
      img: require("../assets/img/ibmLogo.png")},

      {id: 5, name: "SoInteractive", url: 'http://sointeractive.pl/', description: "Developed a Smart Office project. The goal of the project was to implement two websites based on the REST architecture. I created an administrator panel for managing data and the website dedicated for end users.",
      img: require("../assets/img/soiLogo.png")}
    ]

    const listMapped = list.map((e, index) =>
      <li key={index}><p onMouseOver={this.showElem.bind(this, e)} className={(e.id === this.state.currentIndex) ? 'listView-elem active' : "listView-elem"}>{e.name}</p></li>
    );


    return(
      <div className="experience">
        <div className="header">
          <div className="col3"><h2 className="title">Experience</h2></div>
          <div className="col7Experience"><h2><img src={list[this.state.currentIndex].img} className="experienceLogo"/></h2></div>
        </div>
        <div className="experience-explained">
        <div className="listView col3">
          <ul>{listMapped}</ul>
        </div>
        <div className="description col7Experience">
          {list[this.state.currentIndex].description}
          <br /><br />
          <a href={list[this.state.currentIndex].url}>{list[this.state.currentIndex].url}</a>
          <br /><br/>
          {
            list[this.state.currentIndex].publication ?
            ("Paper accepted for publication at: " +
            list[this.state.currentIndex].publication) : ""
          }
        </div>
        </div>
        <a href={require("./../assets/downloads/cv-katarzyna-zukowska.pdf")} download className="btn">
          Download my CV
        </a>

      </div>
    )
  }
}

export default Experience;
