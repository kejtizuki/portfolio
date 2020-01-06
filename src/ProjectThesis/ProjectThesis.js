import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import './projectThesis.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectSunWise extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        <img src={require("./../assets/img/Thesis/dataVizPreview2.png")} className="mainImg"/>

        <h2 className="title">Concept</h2>
        <div className="row">

        <div className="col5">
        <img src={require("./../assets/img/Thesis/dataCollection.png")} className="smallImg"/>

        </div>
        <div className="col5">
        <p>Time-series data used in this project was collected by four individual patients suffering from PTSD, allergy,
        sugar craving and tinnitus. Each patient collected the data by pressing the button on a wearable device every
        time they experienced a symptom. The data was saved into .csv files which were the source of information used when generating
        the visualization.</p>
        </div>
        </div>

        <h2 className="title">User Story Map</h2>
        <img src={require("./../assets/img/Thesis/USM.png")} className="mainImg"/>

        <div className="row margin40">
        <div className="col7"><h2 className="title">Design Process</h2>
        <p>
        The design process in this project was based on iterative approach. Designing data visualizations
        implies working on real data sets in order to understand how the visualizations will look and work when implemented.
        Thus, it is hard to go through multiple validation tests before coding, since each graph requires different data processing.
        Each iteration was thoroughly planned and discussed with my supervisor. During the design phase I created an interactive prototype in
        Sketch and Principle using hard coded data. The prototype was validated during quick, informal user testing sessions and based on it
        the final website was implemented.
        </p>
        </div>
        <div className="col3">
        </div>
        </div>

        <img src={require("./../assets/img/Thesis/process.png")} className="mainImg"/>

        <div className="row margin40">
        <div className="col7"><h2 className="title">Introduction</h2>
        <p>The users need some form of introduction to the visualization. As time can be presented in so many different forms the system is a bit complex for the first time users.
        The assumption was that most of the people who would potentially use the app are not familiar with data visualization tehniques and therefore need to be introduced and
        presented with the main features of the website. Thus, I present a very short animated introduction, that would get the users interested and inform them about the information they
        are going to look at. Also, the users can be introduced to the systme by the guiding tooltips. </p>
        </div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/Thesis/prototypeIntro.gif")} className="imgWithBorder"/>

        <div className="row margin40">
        <div className="col7"><h2 className="title">Yearly overview</h2>
        <p>Yearly overview was created as part of Principle prototype, but not developed further in d3.js. Designing this view with the use of
        one dataset was enough to explore the possible interactions and questions the users might ask. Some of the questions I was trying to answer were:
        Should the users see every single day from the yearly dataset?
        Should the yearly overview focus only on presenting the intensity of symptoms on each day, or present the data grouped into months in order to give a general yearly overview?
        Does it make sense to see the distributions of weekdays in months? How can the users switch between all these views that belong to one bigger overview? </p>
        </div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/Thesis/yearPrototype.gif")} className="imgWithBorder"/>

        <div className="row margin40">
        <div className="col7"><h2 className="title">Calendar view</h2>
        <p>
        Using the clendar, the users can see an overview of their symptoms accross the months. The calemndar cells contain simplified version of a
        daily radial chart, allowing to quickly recognize the drops and peaks in the symptom recordings. The users can turn the heatmap on or off according to their
        preference.
        </p>
        </div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/Thesis/calendar.png")} className="imgWithBorder"/>

        <div className="row margin40">
        <div className="col7"><h2 className="title">Weekly overview</h2>
        <p>At the beginning of the process of designing this view, I used a floating box plot to see weather it gives any useful insights about the weekly data.
        It turned out that most of the symptoms recordings were distributed between the 24 hours, therefore it was not a good option for this view.
        In the end, I have decided to display a week taken from the calendar (since the users already know this view and can refer to it), plus the violin plot, that
        offers very specific analysis.</p>
        </div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/Thesis/weekly.png")} className="imgWithBorder"/>

        <div className="row margin40">
        <div className="col7"><h2 className="title">Daily overview</h2>
        <p>Daily overview is the most important component, since other components (monthly and weekly overview) rely on it.
        During the process, it was redesigned and improved couple of times.
        At the beginning of the process it was not clear if the daily data should be presented as radial or linear visualization.
        On the one hand, people are usually accustomed with simple, linear graphs such as bar chart or linear plot. On the other hand,
        there was a need for creating a visualization that would fit both to the daily view and monthly view.
        Integrating the bar charts as part of the calendar component would not be possible.
        As the day has 24 hours these charts would be very wide and therefore trying to fit them into the calendar
        cells would not work well. That is why the main focus was put in developing the radial visualization.  </p>
        </div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/Thesis/daily.gif")} className="imgWithBorder"/>

        <div className="margin40">
          <h2 className="title">User testing</h2>
          <div className="">
          <p>2 usability tests in 2 weeks time.
          In total 14 users tested the application. 9 users tested in person and 5 online.
          During the personal testing sessions, the users were observed and the notes were taken.
          The users evaluated the app based on given tasks, which were related to the most aspects of the viusalization. There were 24 tasks and the avarage test took 30 minutes. </p>
        </div>
        <div className="row">
          <div className="col7">
          <h4>Key findings</h4>
            <ul className="userTestList">
              <li>In general users understand the charts and know how to get specific numbers from them.</li>
              <li>Adding the legend in the menu container improved the readibility of the calendar and daily graphs and increased the overall understanding of the visualization (tested using AB test).</li>
              <li>Using the combination of Shift + click was not clear for first time users and could be improved by adding the week labels. </li>
              <li>First time users struggled a bit with navigating to views, however after completing few tasks they enjoyed the interaction. This indicates for the need of the tutorial or implementation of guiding tooltips for the first time users.</li>
              <li>A doctor stated that some of the functionalities do not make a lot of sense from the medical point of view. Comparing to average weekday is not that useful as could be comparing to the days with maximum number of symptoms.
              Since the doctors are mostly interested in days that had the biggest number of recordings it would be beneficial to focus on this feature.</li>
              <li>Changing between the months could be improved by adding the scroll functionality which would allow to view all months without chaning them oin the dropdown.</li>
            </ul>
          </div>
          <div className="col3"></div>
        </div>
        </div>

      </div>
    )
  }
}

export default withRouter(ProjectSunWise);
