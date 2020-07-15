import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectIssuu extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/IssuuPoster/stats.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Motivation</h2>  <p>Issuu's old analytics interface was not accurate enough for the current users. As the
        company implemented new tools and had adequate data about them, there was a need to present this data for the users. Some of the new data regarded article and visual stories. Another motivation
        was that the old page was not so visually appealing and needed some refreshment. </p></div>
        <div className="col3"></div>
        </div>

        <div className="row">
        <div className="col7"><h2 className="title">Filtering</h2>  <p>Filtering data dashboards is usually quite complicated, since they include so many
        variables. I wanted to make it as easy as possible. Of course, they users gain great value from filtering, however I didnø't want them to do anything.
        Analysing what could be the filtering options and how the users would use them was crucial. First, it was obligatory to give the filtering by Publication.
        It was achieved by providing a simple dropdown. Filtering by Content Type was also important to the users. Sometimes they compare one against another or want
        to see the whole picturem therefore it was necessary to make it multiple choice. Obviously, the users needed to see the performance of their content over time. This was obtained by
        providing a calendar component in which the users could choose popular timeframes (1, 3, 6 months) or filter by custom dates. The filters should always be
        accessible, regardless of scroll position, therefore I decided that this component should be sticky.</p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/IssuuPoster/filters.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">General overview</h2>  <p>The general overview of the data should give the users an overall understanding
        of the numbers they're looking at. To make this process easier and as fast as possible, I included simple trend lines which allow to visually encode the data.
        This way the users can quickly understend whether they see an increase or decrease in their data. The overall numbers are followed by a stacked bar chart
        which shows the performance of different metrics accross the time. Each of the metrics: Impressions, Reads, Read Time and Clicks give slightly different
        meaning to our users. Understanding how they impact Publications, Article Stories and Visual Stories performance is a key to knowing them a little bit better.
        I decided to use a stacked bar chart since it provides a good comparison.</p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/IssuuPoster/overall.png")} className="mainImg"/>

        <img src={require("./../assets/img/IssuuPoster/performance-interaction.gif")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Page performance</h2>  <p>The graphic format (left)
        of pages had a great potential in terms of visual presentation, however it required more development time and commitment.
        This design was instead replaced by simpler version (right) which shows the data on a bar chart. The page preview is displayed on hover on a bar. </p></div>
        <div className="col3"></div>
        </div>

        <div className='row'>
        <div className='col5'>  <img src={require("./../assets/img/IssuuPoster/interaction-scroll.gif")} className="mainImg"/></div>
        <div className='col5 margin20'>  <img src={require("./../assets/img/IssuuPoster/page-performance.png")} className="mainImg"/></div>
        </div>

      </div>
    )
  }
}

export default withRouter(ProjectIssuu);
