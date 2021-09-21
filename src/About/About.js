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
            <img src={require("./../assets/img/meWinter.JPG")} alt="me" className="smallImg aboutSectionPhoto" />
            </div>
            <div className="column2 aboutMeText">

            <h1 className='title'>I design seemless interactive experiences, starting on design research and finishing on polished user interface. </h1>

            <br /><br />
            <p>
            I’m a Product Designer with experience in all phases of the end-to-end design process.
            Coherent visual language is really important to me and I strive to deliver intuitive and systematic design.
            Having frontend background makes it easier for me to communicate with the developers and understand the coding restrictions.
            </p>
            <p>
            I believe great design comes from great user research and that these two are strongly tied together.
            I have the habit of testing and iterating on my design solutions. In addition, I also love crafting user interfaces.
            </p>
            </div>
            </div>

            <div className="projectContainer">

           <h1 className='title margin80'>Six facts about me</h1>
            <div className="gridContainer aboutMeRow">

            <div className='col3 padding20'>
            <img src={require("./../assets/img/me.jpg")} alt="me" className="photoWidth aboutSectionPhoto" />
            <p>In my free time I practice yoga, usually vinyasa and hatha</p>
            </div>
            <div className='col3 padding20'>
            <img src={require("./../assets/img/dreams3.png")} alt="me" className="photoWidth aboutSectionPhoto" />
            <p>I'm building a sustainable clothing brand together with my friends</p>
            </div>
            <div className='col3 padding20'>
            <img src={require("./../assets/img/photos2.png")} alt="me" className="photoWidth aboutSectionPhoto" />
            <p>I love taking photos, especially portraits. Here is a collection of <a href='https://kejtizuki.cargo.site/'>my works</a></p>
            </div>
            </div>

            <div className="gridContainer aboutMeRow">

            <div className='col3 padding20'>
            <img src={require("./../assets/img/color.png")} alt="me" className="photoWidth aboutSectionPhoto" />
            <p>Here is my favourite color and chewing gum</p>
            </div>
            <div className='col3 padding20'>
            <img src={require("./../assets/img/psychology.jpeg")} alt="me" className="photoWidth aboutSectionPhoto" />
            <p>I'm into psychology. Recently I've been listening to <a href='https://hubermanlab.com/category/podcast-episodes/'>Huberman Lab podcast</a>, <a href='https://open.spotify.com/show/7yq7L2H5VwxzbtKMXawCY4?si=CPGVYOe9Q7CUIfkpZyg-3A&dl_branch=1'>Mozna zwariowac (polish)</a> and <a href='https://open.spotify.com/show/3i5TCKhc6GY42pOWkpWveG?si=tnjQ1CV0QyKxunjkecXUpg&dl_branch=1'>The Happiness Lab</a></p>
            </div>

            <div className='col3 padding20'>
            <iframe src="https://open.spotify.com/embed/playlist/1OBU92ZuzqkiyH6syhTs66" width="100%" height="386" frameBorder="0" className='aboutSectionPhoto' allowtransparency="true" allow="encrypted-media"></iframe>
            <p>I like house music</p>
            </div>
            </div>
            </div>
      </div>
    )
  }
}

export default withRouter(About);
