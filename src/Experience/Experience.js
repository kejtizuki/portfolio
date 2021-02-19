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
      {id: 0, name: "Issuu", url: "https://issuu.com/", description: "Currently building Issuu’s design system. Past projects include: built Issuu's rebranding - collaborated closely with one more designer. Improved the reading experience on the platform. Redesigned Issuu's analytics page, taking into account conversion rates and upgrades for premium plan. Designed the editor for building animated social media assets.",
      img: require("../assets/img/IssuuPoster/logo.png"), role: "UX Designer"},
      {id: 1, name: "Designit", url: "https://designit.com/", description: "I was responsible for various tasks related to UI design, user interviews and design research. Projects I took part in include: design of smart office application (user testing, UX design, preparing remote interviews), redesign of data-driven platform (UX/UI design), research of smart home solutions for people with disabilitie, concept and prototype of the app for dementia patient's relatives. During my daily tasks I use Sketch, Invision, Illustrator and Principle.",
      img: require("../assets/img/designitLogo.png"), role: "UX Design Intern"},
      {id: 2, name: "Dixa", url: "https://dixa.com/", description: "Contributed to developing customer service software. Took part in the redesign process of the platform. Coded tha main functionalities of the platform using HTML, CSS and React. Responsible for CSS animations, responsive views and styled components library. I collaborated closely with the developers and designers to create a uniform experience. ",
      img: require("../assets/img/dixaLogo.jpg"), role: "Frontend developer"},
      {id: 3, name: "Cachet", publication: "JMIR", url: "https://www.cachet.dk/.com/", description: "I participated in design and development of Internet-based Cognitive Assessment Tool (ICAT) - a web-based tool that assesses verbal memory, working memory, and psychomotor speed. The platform was created to conduct digital assessment of cognition in affective disorders. I worked on digitalisation of the test that is usually conducted as face-to-face exercise. Besides being responsible for frontend development I participated in brainstorming sessions, I sketched mockups on paper and worked on the creation of flowcharts. ",
      img: require("../assets/img/cachetLogo.png"), role: "Student assistant"
    },
      {id: 4, name: "IBM", url: "https://ibm.com/", description: "My major tasks were related to the implementation of frontend part of the website designed for IBM Finance Department. Besides the development, I crafted the user interface of the platform, designed interaction patterns and researched use cases. I participated in all stages of the development.",
      img: require("../assets/img/ibmLogo.png"), role: "Web UI developer"},
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
      <div className="gridContainer">

          <div className="column2"></div>
          <div className="column2"><button className='widebtn'>Download my CV</button></div>

      </div>
      </div>
    )
  }
}

export default Experience;
