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
            <img src={require("./../assets/img/meChustka2.JPG")} alt="me" className="aboutSectionMainPhoto" />
            </div>
            <div className="column2 aboutMeText padding20">

            <h1 className='titleM'>Hey, I'm Kasia. I love thinking in systems, finding patterns and getting to the bottom of problems.</h1>

            <br /><br />
            <p>
            I'm a Product Designer with experience in frontend development. I started my career as a developer but wanted to dive deeper
            into the problems I'm solving and have more influence over the visuals and interaction patterns. That's what pulled me towards design.
            I think in systems and connect different dots together. It naturally leads to scalable patterns, interfaces that make sense without explanation and flows that make sense as the product grows.
            </p>
            <p>
            With tools like Cursor and Claude Code I'm having a lot of fun bringing my technical skills back into daily work.
            It strengthens my design decisions and opens an interesting experimentation field for microinteractions.
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
            <iframe width="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1936912079&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
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
