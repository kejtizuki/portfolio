import React from 'react';
import './../CreatorContent/creatorContent.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";
import { Player, ControlBar, PlayToggle, BigPlayButton, ReplayControl } from 'video-react';

class CreatorContent extends React.Component {

  render() {

    return(
      <div>

      <img src={require("./../assets/img/CreatorContent/cover2.png")} className="mainImg"/>


      <div className="projectContainer">

      <div className="row justifyCenter">
      <div className="col5 "><h2 className="title">Hypothesis</h2>
      <p>
        Having all social content in one place will help our customers save time and effort that they normally spend on recreating assets.
        The documents published on Issuu are already professionally designed but the Publishers still need to work on adjusting this content for different social media channels.
        Allowing them to easily <span className='strongTxt'>repurpose</span> their content directly on Issuu will help them bring traffic to their publications without additional effort.
      </p>

      <img src={require("./../assets/img/CreatorContent/repurpose.png")} className="mainImg"/>
      </div>
      </div>




      <div className="row justifyCenter">
      <div className="col5 "><h2 className="title">Intro</h2>
      <p>
        When I started working on this project Issuu already worked on a social post creator tool that unfortunately didn't get into release.
        One of my tasks was to <span className='strongTxt'>redefine</span> this editor and understand what can we do to make it easier to use.
      </p>

      <p>
        The old editor allowed our users to create social posts based on the templates.
        The templates however could not be modified as much as needed and they were not attractive enough. The UX of the editor was also difficult to understand.
        It was mainly build to create multi-page social stories. In order to understand what went wrong with this project we started problem definition from scratch.
      </p>

      <p>
        With the new design and redefinition of the existing tool we wanted to <span className='strongTxt'>keep up to the existing standards in the web ediotr's space</span>.
        During our research we kept hearing from our users that they'd love to have a tool
        to create social content and they had certain <span className='strongTxt'>expectations</span> of how they'd like to use this tool. The gifs below present the UX of an old editor.
      </p>
      </div>
      </div>

      <div className='row'>
      <div className='col5'>  <img src={require("./../assets/img/CreatorContent/page-rail-issuu.gif")} className="mainImg"/></div>
      <div className='col5 margin20'>  <img src={require("./../assets/img/CreatorContent/typing-effect.gif")} className="mainImg"/></div>
      </div>

      <div className="row justifyCenter">
      <div className="col5 "><h2 className="title">Problem space</h2>
      <p>
      As we were redefining the existing work, finding the right problems was a key. We focused on a Persona that belongs to <span className='strongTxt'>Beginners</span> user group of our audience. Beginners are usually small-medium business owners and
      they're working on establishing their brand presence. They're starting their social media profiles and usually are not very tech-savy.
      </p>
      <p>
      Even alanysing a very simplified Publishing user flow proved that the old tool had no value for them.
      </p>

      <img src={require("./../assets/img/CreatorContent/simpleJourney.png")} className="mainImg"/>

      <p>
      We analysed existing research insights and came up with the consolidated problem space that was mapped into the user journey.
      </p>
      </div>
      </div>

      <img src={require("./../assets/img/CreatorContent/problems.png")} className="mainImg"/>
      </div>



      <div className='citation'>
      <div className="row justifyCenter margin80">
        <div className="citationTxt center">How might we help Creators get more value out of their content?</div>
      </div>
      </div>

      <div className="projectContainer">

      <div className="row justifyCenter">
      <div className="col5 "><h2 className="title">Discovery</h2>
      <p>
      We started Discovery process with understanding the social post Creation. We knew that the first thing to build was the <span className='strongTxt'>Editor</span> that would allow our Creators to easily build <span className='strongTxt'>social content</span>.
      </p>

      <p>
      We invited the developers team and ran a <span className='strongTxt'>discovery workshop</span> where the main goal
      was answering the question: "How might we make the content creation for social media and email easier and more efficient for our users?"
      </p>

      <p>
      Every team member suggested their feature ideas and later on we grouped them together and voted on the most wanted features.
      After the workshop we analysed existing editors together with our vision and we built a <span className='strongTxt'>User Story Map</span>.
      We proposed 2 options with slightly different sets of features and discussed them with the developers. We wanted to get the MVP option that would
      be realistic to develop in a few months. We ended up with the final USM.
      </p>

      </div>
      </div>

      <img src={require("./../assets/img/CreatorContent/USM.png")} className="mainImg"/>

      <div className="row justifyCenter">
      <div className="col5 "><h2 className="title">App structure</h2>
      <p>
      After understanding the set of features that go into the MVP I designed the structure that can easily be modified and expanded to accommodate the future iterations.
      </p>

      </div>
      </div>

      <img src={require("./../assets/img/CreatorContent/structure.png")} className="mainImg"/>

      <div className="row justifyCenter">
      <div className="col5 "><h2 className="title">Entry point</h2>
      <p>
      The user can enter content Editor by accessing it wither from Publication Repurpose space or from Issuu Home.
      </p>
      </div>
      </div>

      <div className="row margin80">
      <div className="col5">
      <img src={require("./../assets/img/CreatorContent/libraryEmpty.png")} className="mainImgNoMargin contentShadowSmallRadius"/>

      </div>
      <div className="col5">

      <img src={require("./../assets/img/CreatorContent/libraryFull.png")} className="mainImgNoMargin margin20 contentShadowSmallRadius"/>
      </div>
      </div>


      <div className="row justifyCenter margin80">
      <div className="col5 "><h2 className="title">Templates</h2>
      <p>
      The old version of the Editor allowed the user to create multi-page posts or GIFs. We decided to change this functionality by providing <span className='strongTxt'>single page templates</span> and making them easier to edit.
      </p>
      <p>
      The templates needed to be basic and minimalistic as <span className='strongTxt'>Issuu users already come with strong brand settings</span>.
      We started with tamplates built from three objects: background, text and image. All of these can be easily modified. They're built on canvas that allows
      the user to move objects around, resize them and modify. This was a big improvement comparing to the old version of the editor which did not allow to edit templates directly on canvas.
      During the research interviews we kept hearing from the users that adjusting the template to their needs was crucial for them.
      </p>
      <p>
      We decided to go with Post and Story templates for the MVP and expand later on with more formats. Post and Story were the ones that our users asked for the most and also are widely used accross different social channels.
      </p>
      </div>
      </div>

      <Player
       playsInline
       autoPlay
       poster={require("./../assets/img/CreatorContent/templates2.png")}
       src={require("./../assets/img/CreatorContent/templates.mov")}
       className='contentShadow'>
       <ControlBar autoHide={false} disableCompletely={true}/>
       <BigPlayButton position="center" />
       <PlayToggle />

     </Player>

     <div className="row justifyCenter margin80">
     <div className="col5 "><h2 className="title">Text options</h2>
     <p>
     Text is one of the main components of the templates, therefore it needed to have all the basic variations seen in text editors.
     Typing inline in the canvas was a crucial feature together with implementing the integration with Google Fonts.
     </p>
     </div>
     </div>

     <Player
      playsInline
      autoPlay
      poster={require("./../assets/img/CreatorContent/textOptions.png")}
      src={require("./../assets/img/CreatorContent/textOptions.mov")}
      className='contentShadow'>
      <ControlBar autoHide={false} disableCompletely={true}/>
      <BigPlayButton position="center" />
      <PlayToggle />

    </Player>

    <div className="row justifyCenter margin80">
    <div className="col5 "><h2 className="title">Image options</h2>
    <p>
    Image can be resized and masked. 
    </p>
    </div>
    </div>

    <img src={require("./../assets/img/CreatorContent/imgSelected.png")} className="mainImgNoMargin contentShadow"/>

    <div className="row justifyCenter margin80">
    <div className="col5 "><h2 className="title">Uploads</h2>
    <p>
    Uploading flow was already implemented in the old editor and therefore was not highly prioritised for the new MVP. The upload modal
    was redesigned to fit the new brand. However for the <span className='strongTxt'>future</span> we want to make it more seemless. Uploading should
    modal should not be the focus but should happen in the background. Dragging and dropping photos in the editor directly is one of the next steps.
    </p>
    </div>
    </div>

    <img src={require("./../assets/img/CreatorContent/uploads.png")} className="mainImgNoMargin contentShadowSmallRadius"/>

    <div className="row margin80">
    <div className="col5">
    <img src={require("./../assets/img/CreatorContent/dragAndDrop.png")} className="mainImgNoMargin contentShadowSmallRadius"/>

    </div>
    <div className="col5">

    <img src={require("./../assets/img/CreatorContent/dragAndDrop-step1.png")} className="mainImgNoMargin margin20 contentShadowSmallRadius"/>
    </div>
    </div>

    <div className="row margin80">
    <div className="col5">
    <img src={require("./../assets/img/CreatorContent/dragAndDrop-step2.png")} className="mainImgNoMargin contentShadowSmallRadius"/>

    </div>
    <div className="col5">

    <img src={require("./../assets/img/CreatorContent/dragAndDrop-step3.png")} className="mainImgNoMargin margin20 contentShadowSmallRadius"/>
    </div>
    </div>


    <div className="row justifyCenter margin80">
    <div className="col5 "><h2 className="title">Prototype testing</h2>
    <p>
    Before moving to development I tested the prototype on usertesting.com (7 users) and with 4 Issuu Publishers.
    The usertesting.com was strictly focused on usability. The user had to complete tasks such as changing the template, modify it, add images to the canvas and downlaoding.
    </p>
    Positives:
    <ul>
    <li>7/7 Users understood with the canvas interactions and that the template can be modified directly.</li>
    <li>6/7 understood how Document Photos work and easily interacted with them.</li>
    </ul>
    Other: <br/>
    <ul>
    <li>3/7 did not understand the difference between Story and Post. That was a good indication that in the future iterations we need to implement a form of tutorial or guidance. </li>
    <li>2/7 wanted to start from a blank page. We already planned the future iteration taking this into account but it was a good indication that this functionality might be needed in the future. </li>
    </ul>

    <p>
    Testing with Issuu Publishers was a bit broader and included validating the need for the Editor. It also focused on understanding the workflow of publishing and sharing content.
    </p>


    </div>
    </div>




      </div>
      </div>
    )
  }
}

export default withRouter(CreatorContent);
