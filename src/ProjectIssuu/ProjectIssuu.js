import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectIssuu extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/IssuuPoster/stats.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Motivation</h2>  <p>Issuu's old analytics interface was not accurate
        enough for the users. As new products were added, the statistics page needed more data to be visualised.
        For example, new data about article and visual stories was not shown in the old page. Furthermore,
        the old page was not so visually appealing and needed a refreshment.</p></div>
        <div className="col3"></div>
        </div>

        <div className="row">
        <div className="col7"><h2 className="title">Filtering</h2>  <p>Filtering data dashboards can be complicated, as it includes many
        variables. The goal of filters panel redesign was to make the filtering experience <span className='bold'>easy</span> and
        <span className='bold'> straightforward</span>.
        Analysing the posible filtering options and how our customers used them was crucial.
        Filtering by <span className='bold'>Publication title</span> was a priority. This feature performed very well in the previous design. Also, during the user tests
        the participants indicated that it's crucial for them in everyday work. A dropdown was a simple solution for this feature.

        <br /><br />
        Filtering by <span className='bold'>Content Type</span> was another important feature.
        The users needed to see the performance of their content over time but also understand what value each of the content types could bring to them.
        For content type filtering I used checkboxes, as they allow to select multiple variables as a time.
        Filtering by <span className='bold'>Time period</span> was obtained by
        providing a calendar component in which the users could choose popular timeframes (1, 3, 6 months) or select custom dates.

        <br /><br />
        The users should easily access filters, regardless of scroll position on the page. That's why I decided that the filter component should be sticky to the top of the page.</p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/IssuuPoster/filters.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">General overview</h2>  <p>The general overview of the data
        should give the users an overall understanding
        of the numbers they're looking at. To make this process easier and faster, I included simple <span className='bold'>trend lines</span> which
        allow to visually encode the data.
        This way the users can quickly understend whether they see an increase or decrease in their numbers.

        <br /><br />
        The overall numbers are followed by a <span className='bold'>stacked bar chart</span>
        which shows the performance of different metrics accross time. Each of the metrics: Impressions, Reads, Read Time and
        Clicks provide different meaning to our users.
        Understanding how these numbers impact Publications, Article Stories and Visual Stories performance was the key for our users.
        Therefore, this data is presented as the first chart on the page.
        I decided to use a stacked bar chart as it provides a good comparison between the numbers and allows for showing different content types at the same time.</p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/IssuuPoster/overall.png")} className="mainImg"/>

        <img src={require("./../assets/img/IssuuPoster/performance-interaction.gif")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Page performance</h2>  <p>
        I tried different solutions for showing page performance data.
        The graphic format (left)
        of pages had a great potential in terms of the visual presentation, however it required more development time and commitment.
        In the end, we used simpler version (right), which presents the data on a bar chart. On hover state, the page preview is displayed. </p></div>
        <div className="col3"></div>
        </div>

        <div className='row'>
        <div className='col5'>  <img src={require("./../assets/img/IssuuPoster/interaction-scroll.gif")} className="mainImg"/></div>
        <div className='col5 margin20'>  <img src={require("./../assets/img/IssuuPoster/page-performance.png")} className="mainImg"/></div>
        </div>

        <div className="row">
        <div className="col7"><h2 className="title">Links</h2>  <p>Many publications on Issuu platform include links embeded in the publication pages.
        The users should be able to filter these links based on keywords, page number or link type and see the totla number of impressions and clicks.
        To fullfill these requirements I designed a table with filtering options in the header.
        This table went through a few iterations where I explored grouping the links by page number, versus displaying single links in table rows.
        </p></div>
        <div className="col3"></div>
        </div>

        <h3>Iterations over links table</h3>

        <img src={require("./../assets/img/IssuuPoster/linksVersions.png")} className="mainImg"/>

        <h3>The final links table</h3>
        <div className="col7">
        In the final version it's possible to sort the table columns by clicking on a column header. In the header,
        under Impressions and Clicks columns there is sum number displayed which allows to see how many links of a certain type are in there.
        Simple bars in the Impressions and Clicks columns make it easier
        to visually compare the values. When you hover on a row, the page preview is displayed.
        </div><div className="col3"></div>
        <img src={require("./../assets/img/IssuuPoster/links.png")} className="mainImg"/>

        <h2 className="title">Map</h2>
        <img src={require("./../assets/img/IssuuPoster/map.png")} className="mainImg"/>


      </div>
    )
  }
}

export default withRouter(ProjectIssuu);
