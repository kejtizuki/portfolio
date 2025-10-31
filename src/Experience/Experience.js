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
      {id: 0, name: "Pleo", url: "https://pleo.io/", description: "Working in Invoices team, designing features which make finance processes more efficient and user-friendly. Designed approval workflows for invoice payments. Led the design of Purchase orders product from research to launch. Ran prototype testing and alpha tests with users, iterated with the dev team, and shipped a new product. Partnered with lead designer, PM, and EM on long-term vision for Accounts Payables, exploring how to empower finance teams through automation.",
      img: require("../assets/img/IssuuPoster/logo.png"), role: "Product Designer"},
      {id: 1, name: "Issuu", url: "https://issuu.com/", description: "Led the design of a canvas-based graphic editor giving publishers an easy way to repurpose their pdfs into social graphics. Created interaction patterns for working with images, text and colors allowing non-designers create powerful content. Together with lead designer reshaped the brand guidelines by introducing a new visual direction. Redefined colors, typography and core design system elements. The work was a foundation for the redesign of the whole platform. ",
      img: require("../assets/img/IssuuPoster/logo.png"), role: "UX Designer"},
      {id: 2, name: "Designit", url: "https://designit.com/", description: "I was responsible for various tasks related to UI / UX design and research. Projects I took part in include: design of smart office application (UX design - wireframes and interviews), redesign of a data-driven platform (UX/UI design), research of smart home solutions for people with disabilities (competitors analysis, defining problem statement), concept and prototyping of the app for dementia patient's relatives (design sprint with high fidelity prototype as an outcome).",
      img: require("../assets/img/designitLogo.png"), role: "UX Design Intern"},
      {id: 3, name: "Dixa", url: "https://dixa.com/", description: "Contributed to developing customer service software. Coded tha main functionalities of the platform using HTML, CSS and React. Responsible for CSS animations, responsive views and styled components library. Collaborated closely with the developers and designers to create a uniform experience. ",
      img: require("../assets/img/dixaLogo.jpg"), role: "Frontend developer"},
      {id: 4, name: "Cachet", publication: "JMIR", url: "https://www.cachet.dk/.com/", url2: "https://formative.jmir.org/2019/3/e13898/", description: "Participated in the design and development of Internet-based Cognitive Assessment Tool (ICAT) - a web-based tool that assesses verbal memory, working memory, and psychomotor speed. The platform was created to conduct digital assessment of cognition in affective disorders. Worked on digitalisation of the test that is usually conducted as face-to-face exercise. Besides being responsible for frontend development I participated in brainstorming sessions, created wireframes and flowcharts. ",
      img: require("../assets/img/cachetLogo.png"), role: "Research assistant"
    },
      {id: 5, name: "IBM", url: "https://ibm.com/", description: "My major tasks were related to the frontend implementation of the website designed for IBM Finance Department. Besides the development, I crafted the user interface of the platform, designed interaction patterns and researched use cases. I participated in all stages of the development.",
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
        <div className='column200 listTitle'>{e.role}</div>
        {
          (index === this.state.currentIndex) ?
          <div className='column100 seeMore listTitle'>-</div> :
          <div className='column100 seeMore listTitle'>+</div>
        }
      </div>
      {
      (index === this.state.currentIndex) &&
        <div className='row transformAndFade'>
          <div className='experienceDescription'>

            <div>

            {e.description}
            <br /><br/>
            <a href={list[this.state.currentIndex].url}>{list[this.state.currentIndex].url}</a><br />
            {
              (list[this.state.currentIndex].url2 ? <a href={list[this.state.currentIndex].url2}>Published paper</a> : "")
            }

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
          <div className="column2"><a href="../assets/downloads/cv-kasia-zukowska.pdf" download className='widebtn'>Download my CV</a></div>

      </div>
      </div>
    )
  }
}

export default Experience;
