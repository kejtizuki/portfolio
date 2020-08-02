import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectIssuu extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/IssuuPoster/stats.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Motivation</h2>  <p>Issuu's old analytics interface was not accurate enough for the users. As
        new tools were added it implied having more and more data which should be visualized in the statistics page.
        The new data about article and visual stories was not shown in the old page. Another motivation
        was that the old page was not so visually appealing and needed a refreshment. </p></div>
        <div className="col3"></div>
        </div>

        <div className="row">
        <div className="col7"><h2 className="title">Filtering</h2>  <p>Filtering data dashboards can be complicated, as it includes many
        variables. The goal of redesigning how filters work was to make filtering experience <span className='bold'>easy</span> and
        <span className='bold'> straightforward</span>.
        Analysing what the posible filtering options be and how our customers would use them was crucial.
        First, filtering by <span className='bold'>Publication</span> was a priority. This feature performed very well in the previous design and the users indicated
        that it's important for them during the user tests. A dropdown was a good solution for this.

        <br /><br />
        Filtering by Content Type was another important feature. Both by comparing different publications or looking at content type data as a whole.
        The users needed to see the performance of their content over time. Filtering by timestamps was obtained by
        providing a calendar component in which the users could choose popular timeframes (1, 3, 6 months) or select custom dates.

        The users should easily access filters, regardless of scroll position, therefore I decided that filter component should be sticky.</p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/IssuuPoster/filters.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">General overview</h2>  <p>The general overview of the data
        should give the users an overall understanding
        of the numbers they're looking at. To make this process easier and fast, I included simple trend lines which
        allow to visually encode the data.
        This way the users can quickly understend whether they see an increase or decrease in their data.

        <br /><br />
        The overall numbers are followed by a stacked bar chart
        which shows the performance of different metrics accross time. Each of the metrics: Impressions, Reads, Read Time and
        Clicks provide different meaning to our users.
        Understanding how these numbers impact Publications, Article Stories and Visual Stories performance was a key for our users.
        Therefore this data is presented as the first graph on the page.
        I decided to use a stacked bar chart since it provides a good comparison between the numbers.</p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/IssuuPoster/overall.png")} className="mainImg"/>

        <img src={require("./../assets/img/IssuuPoster/performance-interaction.gif")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Page performance</h2>  <p>The graphic format (left)
        of pages had a great potential in terms of visual presentation, however it required more development time and commitment.
        We used simpler version (right) instead which shows the data on a bar chart. The page preview is displayed on hover on a bar. </p></div>
        <div className="col3"></div>
        </div>

        <div className='row'>
        <div className='col5'>  <img src={require("./../assets/img/IssuuPoster/interaction-scroll.gif")} className="mainImg"/></div>
        <div className='col5 margin20'>  <img src={require("./../assets/img/IssuuPoster/page-performance.png")} className="mainImg"/></div>
        </div>

        <div className="row">
        <div className="col7"><h2 className="title">Links</h2>  <p></p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/IssuuPoster/links.png")} className="mainImg"/>


      </div>
    )
  }
}

export default withRouter(ProjectIssuu);
