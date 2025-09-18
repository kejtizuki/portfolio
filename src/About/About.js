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
            <div className="column2 padding20">
            <img src={require("./../assets/img/megrass.JPG")} alt="me" className="aboutSectionMainPhoto" />
            </div>
            <div className="column2 aboutMeText padding20">

            <h1 className='titleM'>Hey! I'm Kasia. I'm a fan of holistic approach and I believe good design stems from strong research and collaboration.</h1>

            <br /><br />
            <p>
            I’m a Product Designer with experience in all phases of the end-to-end design process.
            I strive to deliver intuitive and systematic design with coherent visual language.
            One of the foundations in a successful design procedss is good collaboration.
            My past frontend development experience makes the communication with engineers in the team smooth.
            </p>
            <p>
            Another important aspect to me is user research - it's a fundation for creating intuitive flows and interfaces.
            I have the habit of testing and iterating on my design solutions.
            </p>
            </div>
            </div>


            <div className="generalContainer">

            <div className='gridContainer margin80'>
            <h1 className='titleXL'>(6) facts about me</h1>
            </div>

            <div className="gridContainer aboutMeRow margin80">



            <div className='col3 padding20'>
            <img src={require("./../assets/img/paint.png")} alt="me" className="photoWidth aboutSectionPhoto" />
            <p>Experimenting with oil paint and different liquids</p>
            </div>


            <div className='col3 padding20'>
            <img src={require("./../assets/img/psychology.jpeg")} alt="me" className="photoWidth aboutSectionPhoto" />
            <p>I'm into psychology. Recently I've been listening to <a href='https://hubermanlab.com/category/podcast-episodes/'>Huberman Lab podcast</a>, <a href='https://open.spotify.com/show/7yq7L2H5VwxzbtKMXawCY4?si=CPGVYOe9Q7CUIfkpZyg-3A&dl_branch=1'>Mozna zwariowac (polish)</a> and <a href='https://open.spotify.com/show/3i5TCKhc6GY42pOWkpWveG?si=tnjQ1CV0QyKxunjkecXUpg&dl_branch=1'>The Happiness Lab</a></p>
            </div>

            <div className='col3 padding20 titleCard'>

            <img src={require("./../assets/img/interior.png")} alt="me" className="photoWidth aboutSectionPhoto" />
            <p>Recently into interior design. Rennovating my flat was one of the biggest latest projects I did and I'm very happy about it</p>
            </div>

            </div>

            <div className="gridContainer aboutMeRow">

            <div className='col3 padding20'>
            <iframe width="100%" height="542" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1936912079&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <p>I love music and djing!</p>
            </div>

            <div className='col3 padding20'>
            <img src={require("./../assets/img/dreams3.png")} alt="me" className="photoWidth aboutSectionPhoto" />
            <p>I'm building a sustainable clothing brand together with my friends</p>
            </div>

            <div className='col3 padding20'>
            <img src={require("./../assets/img/color.png")} alt="me" className="photoWidth aboutSectionPhoto" />
            <p>Here is my favourite color and chewing gum</p>
            </div>
            </div>

            </div>
      </div>
    )
  }
}

export default withRouter(About);
