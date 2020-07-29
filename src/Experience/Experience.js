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
      {id: 0, name: "Issuu", url: "https://issuu.com/", description: "Redesigned Issuu's analytics page, taking into account conversion rates and upgrades for premium plan. Led the team responsible for building design system using Invision DSM (Design System Manager). Contributed to building a part of Sketch Library. Designed interactive creation tool for building animated social media assets (stories, posts) for real estate agents. On a daily basis I do user interviews, design interaction flows, craft Issuu's product UI and work on design research.",
      img: require("../assets/img/IssuuPoster/logo.png"), role: "UX Designer"},
      {id: 1, name: "Designit", url: "https://designit.com/", description: "I was responsible for various tasks related to UI design, user interviews and design research. Projects I took part in include: design of smart office application (user testing, UX design, preparing remote interviews), redesign of data-driven platform (UX/UI design), research of smart home solutions for people with disabilitie, concept and prototype of the app for dementia patient's relatives. During my daily tasks I use Sketch, Invision, Illustrator and Principle.",
      img: require("../assets/img/designitLogo.png"), role: "UX Design Intern"},
      {id: 2, name: "Dixa", url: "https://dixa.com/", description: "Worked on customer service software. I took part in the redesign process of the platform. Coded tha main functionalities of the platform using HTML, CSS and React. Responsible for CSS animations, responsive views and styled components library.",
      img: require("../assets/img/dixaLogo.jpg"), role: "Frontend developer"},
      {id: 3, name: "Cachet", publication: "JMIR", url: "https://www.cachet.dk/.com/", description: "I participated in the development of Internet-based Cognitive Assessment Tool (ICAT) - a web-based tool that assesses verbal memory, working memory, and psychomotor speed using short tasks. The platform was created to conduct digital assessment of cognition in affective disorders. Usually this kind of assessment is conducted by the doctor and patient as pen-and-pencil test and during my project I worked on digitalisation of the test. Besides being responsible for frontend development I participated in brainstorming sessions, I sketched mockups on paper and worked on creation of flowcharts. I also participated in validation and redesign of the platform, including the layout and graphical design of each page, the instructions to the participants, the use of speech recognition, feedback to the participants after each task, the use of input modalities (i.e. keyboard, mouse, and touch), and the informed consent pages. ",
      img: require("../assets/img/cachetLogo.png"), role: "Student assistant"
    },
      {id: 4, name: "IBM", url: "https://ibm.com/", description: "My major tasks were related to the implementation of frontend part of the website designed for IBM Finance Department. Besides the development, I crafted the user interface of the platform, designed interaction patterns and researched use cases. I participated in all stages of the development.",
      img: require("../assets/img/ibmLogo.png"), role: "Web UI developer"},

      {id: 5, name: "SoInteractive", url: 'http://sointeractive.pl/', description: "Developed a Smart Office project. The goal of the project was to implement two websites based on the REST architecture. I created an administrator panel for managing data and the website dedicated for end users.",
      img: require("../assets/img/soiLogo.png"), role: "Frontend intern"}
    ]

    const listMapped = list.map((e, index) =>
      <li key={index}><p onMouseOver={this.showElem.bind(this, e)} className={(e.id === this.state.currentIndex) ? 'listView-elem active' : "listView-elem"}>{e.name}</p></li>
    );

    const listExperiences = list.map((e, index) =>
      <div key={index}>

      <div className='row experienceRow' onClick={this.showElem.bind(this, e)}>
        <div className='column100'>
        <span className='listTitle'>
        {e.name}
        </span>
        </div>
        <div className='column100'>{e.role}</div>
        {
          (index === this.state.currentIndex) ?
          <div className='column100 seeMore'>-</div> :
          <div className='column100 seeMore'>+</div>
        }
      </div>
      {
      (index === this.state.currentIndex) &&
        <div className='row transformAndFade'>
          <div className=''>

            <div>

            {e.description}
            <br /><br/>
            <a href={list[this.state.currentIndex].url}>{list[this.state.currentIndex].url}</a>

            </div>

          </div>
        </div>
      }

      </div>
    );


    return(
      <div className="experience">
      <div className="gridContainer">

          <div className="column2"><div className="title">Experience</div></div>
          <div className="column2 experienceList">{listExperiences}
          </div>

      </div>
      </div>
    )
  }
}

export default Experience;
