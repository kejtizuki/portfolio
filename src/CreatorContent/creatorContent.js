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

      <h1>Having all social content in one place will help our customers save time and effort</h1>
      <p>
        <span className='strongTxt'></span> that they normally spend on recreating assets.
        The documents published on Issuu are already professionally designed but the Publishers still need to work on adjusting this content for different social media channels.
        Allowing them to easily <span className='strongTxt'>repurpose</span> their content directly on Issuu will help them bring traffic to their publications without additional effort.
      </p>

      <img src={require("./../assets/img/CreatorContent/repurpose.png")} className="mainImg"/>
      </div>
      </div>




      <div className="row justifyCenter">
      <div className="col5 "><h2 className="title">Introduction</h2>
      <p>
        When I started working on this project Issuu already had a social post editor that unfortunately didn't get into release.
        One of my tasks was to <span className='strongTxt'>redefine</span> this tool and understand what can we do to make it easier to use.
      </p>

      <p>
        The old editor allowed our users to create social posts based on the templates.
        The templates, however, could not be modified as much as needed. The UX of the editor was also difficult to follow.
        First, it was built to create multi-page social stories. Second, the templates were very restricted and hard to edit. These problems stood out to us in a first glance after analysing the competitors' editors. In order to understand what exactly was needed in our new editor we started <span className='strongTxt'>problem definition</span> from scratch.
      </p>

      <p>
        With the new design and redefinition of the existing tool we wanted to <span className='strongTxt'>keep up to the existing standards in the web ediotr's space</span>.
        The gifs below present the UX of an old editor.
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
      After analysing existing research insights we came up with the consolidated problem space that was mapped into the user journey.
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
      We started Discovery process with understanding the process of social post creation. We knew that the first thing to build was the <span className='strongTxt'>Editor</span> that would allow our Creators to easily build <span className='strongTxt'>social content</span>.
      </p>

      <p>
      We invited the developers team and ran a <span className='strongTxt'>discovery workshop</span> where the main goal
      was answering the question: "How might we make the content creation for social media and email easier and more efficient for our users?"
      </p>

      <p>
      Every team member suggested their feature ideas and later on we grouped them together and voted on the most wanted features.
      After the workshop we analysed existing web content editors together with our vision and we built a <span className='strongTxt'>User Story Map</span>.

      </p>

      </div>
      </div>

      <img src={require("./../assets/img/CreatorContent/USM.png")} className="mainImg"/>

      <div className="row justifyCenter">
      <div className="col5 "><h1 className="title">App layout</h1>
      <p>
      After understanding the set of features that go into the MVP I designed the layout that can easily be modified and expanded to accommodate future iterations.
      There are two panels on left and sight side. The leftside panel's content changes based on selected menu item. The right-side panel is used to create GIFs and
      multi-page posts. 
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
       poster={require("./../assets/img/CreatorContent/templates2.png")}
       src={require("./../assets/img/CreatorContent/templates.mov")}
       className='contentShadow whitePlayer'>
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
      poster={require("./../assets/img/CreatorContent/textOptions.png")}
      src={require("./../assets/img/CreatorContent/textOptions.mov")}
      className='contentShadow whitePlayer'>
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
    <div className="col5 "><h2 className="title">Pages</h2>
    <p>
    It's possible to add multiple pages to create GIFs or multi-page posts. After adding pages each apge can be modified separately.
    This feature is not a part of the MVP, but was designed for later iterations.
    </p>
    </div>
    </div>

    <Player
     playsInline
     poster={require("./../assets/img/CreatorContent/pages.png")}
     src={require("./../assets/img/CreatorContent/pages.mov")}
     className='contentShadow whitePlayer'>
     <ControlBar autoHide={false} disableCompletely={true}/>
     <BigPlayButton position="center" />
     <PlayToggle />

   </Player>

    <div className="row justifyCenter margin80">
    <div className="col5 "><h2 className="title">Uploads</h2>
    <p>
    Uploading flow was already implemented in the old editor and therefore was not highly prioritised for the new MVP. The upload modal
    was redesigned to fit the new brand. In the <span className='strongTxt'>future iterations</span> we want to make it more seemless. Uploading should
    not be the focus blocking the screen but should happen in the background. Dragging and dropping photos in the editor directly is one of the next steps.
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
    <div className="col5 "><h2 className="title">Document photos</h2>
    <p>
    </p>
    </div>
    </div>

    <Player
     playsInline
     poster={require("./../assets/img/CreatorContent/documentPhotos.png")}
     src={require("./../assets/img/CreatorContent/documentPhotos2.mov")}
     className='contentShadow whitePlayer'>
     <ControlBar autoHide={false} disableCompletely={true}/>
     <BigPlayButton position="center" />
     <PlayToggle />

   </Player>


    <div className="row justifyCenter margin80">
    <div className="col5 "><h2 className="title">Prototype testing</h2>
    <p>
    Before moving to development I tested the prototype on usertesting.com (7 users) and led 4 interviews with Issuu Publishers.
    The online testing (usertesting.com) was strictly focused on usability. The user had to complete tasks such as change the template, modify it, add images to the canvas and download.
    </p>
    Positives:
    <ul>
    <li>7/7 Users understood with the <span className='strongTxt'>canvas interactions</span> and that the template can be modified directly</li>
    <li>6/7 understood how <span className='strongTxt'>Document Photos</span> work and easily interacted with them</li>
    </ul>
    Other: <br/>
    <ul>
    <li>3/7 did not understand the difference between <span className='strongTxt'>Story and Post</span>. That was a good indication that in the future iterations we need to provide some kind of tutorial or guidance. </li>
    <li>2/7 wanted to start from a <span className='strongTxt'>blank page</span>, without using the template</li>
    </ul>

    <p>
    Interviewing Issuu Publishers was a bit broader and focused on understanding of their process with content creation and sharing.
    </p>
    </div>
    </div>


    <img src={require("./../assets/img/CreatorContent/keyTakeaways.jpg")} className="mainImg"/>



      </div>
      </div>
    )
  }
}

export default withRouter(CreatorContent);
