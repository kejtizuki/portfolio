import React from 'react';
import './about.scss';
import Navbar from '.././Nav/Navbar'
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class About extends React.Component {

  handleOnClick = () => {
    console.log("redirect home");
    this.props.history.push("/");
  };


  render() {

    return(

      <div className='aboutme'>
      <Navbar />
        <div className="gridContainer aboutMeRow">
            <div className="column2">
            <img src={require("./../assets/img/me-palm.jpg")} alt="me" className="smallImg" />
            </div>
            <div className="column2 aboutMeText">

            <h1 className='title'>I'm interested in the process of creating seemless interactive experiences, starting from design research and finishing on polished user interface. </h1>

            <br /><br />
            <p>I'm a UX Designer currently working at Issuu, Copenhagen. I finished BEng Computer Science and MSc Digital Media Engineering at DTU.
            I started out my career as frontend developer but quickly realized that design is something I really love and want to commit to.
            <br /><br />
            Working in various companies, from a startup through a creative agency to a corporation, made me understand different approaches and perspectives to solving a problem.
            Having frontend background makes it easier for me to communicate with the developers and understand the coding restrictions. :)
            <br /><br /></p>


            </div>
            </div>
            {/* <div className="col5">
              <h1>When I'm not working</h1>
              <p>Most likely I'll be travelling! Here is my personal travel map where I pin the places I've been to.</p>
            </div> */}
        {/* <div className="center"><WorldMap width={960} height={500}/></div> */}
      </div>
    )
  }
}

export default withRouter(About);
