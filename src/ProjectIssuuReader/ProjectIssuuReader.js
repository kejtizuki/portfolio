import React from 'react';
import './../ProjectIssuuReader/projectIssuuReader.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectIssuuReader extends React.Component {

  render() {

    return(
      <div>
      <div className="projectContainer">
        <img src={require("./../assets/img/IssuuCreate/ASpreview.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Some definitions you need to know to read the case study</h2>
        <p>
        Issuu is a platform where a lot of content is published in the form of pdfs. The pdfs are displayed inside the <span className="strong">Reader</span>. The Reader
        can be accessed both on Desktop and Mobile, however it has some specific limitations on mobile devices. The text is small and almost always requires the user to
        use a zoom in gesture in order to read something.
        </p>
        <p>
        Besides letting the users read the whole publication inside the Reader, Issuu offers Article Stories. They're short pieces of content that can be accessed via link. The
        text is parsed from a pdf into html and therefore the font size allows for easy reading on mobile.
        Article Stories are created semi-automatically - they require some editing on the creator side. The output is a link that includes the article text and some images.

        </p>

        </div>
        <div className="col3">
        </div>
        </div>


        <div className="row">
        <div className="col7"><h2 className="title">Goals of the project</h2>
        <p>
        I joined the project as UX Designer and worked closely with the Developers focused on machine learning part of the project and a Project Manager.
        There were few goals of the project:
        </p>
        <p>
        - Make it easier to find articles to read on Issuu both on web and mobile  <br />
        - Test and improve interactions with Issuu reader on mobile <br />
        - Allow an easy consumption of different content types (magazines, brochures, flyers, booklets, lookbooks... etc) on mobile phones<br />
        - Increase the median time spent in reader fullscreen mode. When we started the project the median time was 2.2 minutes per month per reader in fullscreen mode
        </p>
        </div>
        <div className="col3">
        </div>
        </div>


        <h2 className="title">Content Types on Issuu</h2>
        <img src={require("./../assets/img/IssuuCreate/content1big.png")} className="mainImg"/>
        <img src={require("./../assets/img/IssuuCreate/content2big.png")} className="mainImg"/>

        <h2 className="title">Project Plan</h2>

        <img src={require("./../assets/img/IssuuCreate/projectPlan.png")} className="mainImg margin160"/>


        <h2 className="title">Article Stories</h2>
        <div className="row">
          <div className="col5 verticalCenter">
          We analysed an existing solution - Article Stories to understand its strengths and weaknesses. <br /><br />

          Pros: <br /><br />
          - Good to promote a specific section of a document<br />
          - Automatically generated but require some editing<br />
          - Article Stories are mobile-friendly<br /><br />

          Cons: <br /><br />
          - Too time consuming to create/edit<br />
          - Do not support HyperLinks or video<br />
          - Not properly integrated with the publication /  Reader 3<br />
          - Do not support embeds or unlisted publications<br />
          - More suited for Editorial content<br />
          - Not the exact replica of the original PDF<br />


          </div>
          <div className="col5 verticalCenter center margin40Left justifyCenter">

          <img src={require("./../assets/img/IssuuCreate/ArticleStories.png")} className="prototypeImg gifImgBorder"/>

          </div>
        </div>

      </div>

      <div className='citation'>
      <div className="row justifyCenter">
        <div className="citationTxt center">“[I would like the] ability to "zoom" into a specific part of the PDF/flipbook, and go to a full-screen
        or better experience - I want to zoom into one story and then go full-scale/full reader/mobile
        optimized reading mode”</div>
      </div>

      <div className="row justifyCenter">

        <div className="citationTxt center">““I would  rather see [the] issuu flipbook more mobile friendly [...].  Article stories is an
        ok alternative but it sort of a bandaid for a  bigger problem.””</div>
      </div>
      </div>


  <div className="projectContainer">

      <div className="row margin80">
      <div className="col5 verticalCenter center justifyCenter">

      <img src={require("./../assets/img/IssuuCreate/reflow.gif")} className="prototypeImg gifImgBorder phonepadding"/>

      </div>

        <div className="col5 verticalCenter">
          <h2 className="title">Concept 1 - Reflow</h2>
          <span>- As a publisher I want to offer my readers a scrollable reading experience on mobile phones</span><span>x</span>
          <span>  - The publisher wants a reflowed layout as default on mobile to provide a good experience but also to keep the PDF layout accessible</span>
          <span>  - The publisher wants to offer their readers the ability to navigate through a ToC</span>
          <span>  - The publisher wants to offer their readers interactive mobile experience (links, videos)</span>
          <span>  - As a publisher I want a good experience on mobile for Embeds</span>
          <span>  - The publisher wants to keep brand consistency in the mobile version (colors, fonts?)</span>
        </div>


      </div>


      <h2 className="title">Key takeaways</h2>

      <div className="row margin80">



        <div className="col2">
        <p>Mobile experience</p>
        <img src={require("./../assets/img/IssuuCreate/reflow-sticky1.png")} className="width100"/>
        </div>
        <div className="col2">
        <p>Reflow concept</p>
        <img src={require("./../assets/img/IssuuCreate/reflow-sticky2.png")} className="width100"/>
        </div>
        <div className="col2">
        <p>PDF Layout</p>
        <img src={require("./../assets/img/IssuuCreate/reflow-sticky3.png")} className="width100"/>
        <img src={require("./../assets/img/IssuuCreate/reflow-sticky4.png")} className="width100"/>
        </div>
        <div className="col2">
        <p>Content</p>
        <img src={require("./../assets/img/IssuuCreate/reflow-sticky5.png")} className="width100"/>
        <img src={require("./../assets/img/IssuuCreate/reflow-sticky6.png")} className="width100"/>
        </div>
      </div>


      <div className="row margin80">
        <div className="col5 verticalCenter">
          <h2 className="title">Concept 2 - Smart Navigation</h2>
          <span> - Publishers will prefer the guided experience for their readers than the existing full screen solution</span><span></span>
          <span>  - Publishers prefer to keep the PDF layout accessible even on mobile</span>
          <span>  - Publishers are willing to spend time to enable this solution for their readers because it has enough value</span>
        </div>

        <div className="col5 verticalCenter center margin40Left justifyCenter">

        <img src={require("./../assets/img/IssuuCreate/smartnav1-faster.gif")} className="prototypeImg gifImgBorder phonepadding"/>

        </div>
      </div>



      </div>

  </div>
    )
  }
}

export default withRouter(ProjectIssuuReader);
