import React from 'react';
import './../ProjectOverview/projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectCoordinates extends React.Component {

  render() {

    return(
      <div className="projectContainer">
        This page is currently being built.
        <img src={require("./../assets/img/Coordinates/main.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Problem</h2><p>Visualizing multi-dimensional data has always been a challenging
task for many and it has been proved that the human brain was
only trained to perceive 2 dimensions. One of the most well known
and widely used strategies to tackle this issue is represented
by parallel coordinates, which are powerful enough to display an
entire dataset in no time.
This type of visualization allows users to present multiple dimensions
all at once. However, as parallel coordinates are successful enough to visualize
multivariate data, they come with certain limitations that need
to be solved to ensure a smoother user experience.
One of them is that large datasets create a lot of visual clutter and all the
horizontal lines in the plot (known as "polylines") are subject to overlapping,
thus obscuring any meaningful patterns that might be observed. These patterns
are crucial in data analysis, since they are the key to revealing
interesting stories about the data.

        </p></div>
        <div className="col3"></div>
        </div>

        <div className="row">
        <div className="col7"><h2 className="title">Goal</h2><p>The goal of the project was to implement parallel coordinates
          visualization allowing for multiple brushing techniques. Different types of brushing
          techniques were introduced and tested during the user tests. Besides that some improvements to original version
          are proposed in order to reduce visual clutter and increase the readability of the chart.
        </p></div>
        <div className="col3"></div>
        </div>



        <h2 className="title">Project Scope</h2>
        <img src={require("./../assets/img/Coordinates/project-scope.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Color interpolation</h2><p>In the first iteration, each line had the
        same gradient color and reduced opacity. However, after uploading larger datasets we noticed that it became much
        harder to perceive meaningful information within the plot. Right now all lines have different successive colors.
        </p></div>
        <div className="col3"></div>
        </div>
        <img src={require("./../assets/img/Coordinates/color-interpolation.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Line interpolation</h2><p>Initially parallel coorinates are implemented
        with straight lines. We propose curved paths for better readability.
        </p></div>
        <div className="col3"></div>
        </div>
        <img src={require("./../assets/img/Coordinates/line-interpolation.png")} className="mainImg"/>


        <div className="row">
        <div className="col7"><h2 className="title">Dimensions</h2><p>The default behavior when uploading
          a .csv dataset is to render the
          parallel coordinates based on all dimensions, sorted in alphabetical
          order. However, one can remove (or add) dimensions in
          case they are not needed by toggling the corresponding dimension
          button and also change the order of the vertical axes by dragging
          them to left or right.
        </p></div>
        <div className="col3"></div>
        </div>

          <img src={require("./../assets/img/Coordinates/dimensions.gif")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Direct Selection</h2><p>Direct selection, also known as 0-order
brushing, occurs when you hover over one line in the chart. More
specifically, each time the user places the mouse over a polyline,
additional information about its corresponding dataset entry will
be displayed in a table below.
If user clicks on a highlighted line, that line remains saved in the
table for further exploration until removed. Users are allowed to
select multiple lines from the chart and compare their values in
the table. The "Reset" button deselects all the
lines and the plot goes back to its initial state.
        </p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/Coordinates/direct-selection.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Simple Brushing</h2><p>Simple brushing is the most basic form
of brushing. The central aim of this technique is to
restrict the dimensions between a min and max value.
        </p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/Coordinates/simple-brush.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Line Brushing</h2><p>Line brushing is a 2D selection brushing
method which can be performed by drawing lines in the areas
between each 2 axes. The
selection contains all entries that pass through all of the active
lines. The users can remove the lines and draw new ones
by clicking anywhere close to their surrounding area.
        </p></div>
        <div className="col3"></div>
        </div>

        <img src={require("./../assets/img/Coordinates/line-brush.png")} className="mainImg"/>

        <div className="row">
        <div className="col7"><h2 className="title">Results</h2><p>Five types of brushing techniques were implemented in order to
          interact with the parallel coordinates graph. To research the usability
of each of them, the users were given specific technical tasks to
solve, that required the use of each brushing technique. The tasks were based on cars database.
Testing was done without introducing
the subjects to how brushing techniques work, letting them figure
it out by themselves. Our main assumption when choosing not to
provide any hints was to check whether brushing techniques are
intuitive enough.
<br /><br />

First question was to <i>name the heaviest car</i>. The correct way of
answering this question was to use direct selection of a polyline.
All of the users performed this task correctly.
The users also performed well in the tasks asking to name a car
with a certain number of cylinders. It proved that the subjects have
good understanding of the simple brushing technique.
<br /><br />
If it comes to multiple brushing, the performance was slightly
worse. The question regarding this technique was: <i>’How many cars
have a displacement between 0-150 cc or above 350 cc?’</i>. 55% of users
answered it correctly. 100% of the subjects answered the second
question concerning multiple brushing correctly. Therefore, it can
be concluded that the understanding of multiple brushing was also
good. Additionally, it is worth mentioning that during the live
feedback session many users stated that single brushing can be
replaced by multiple brushing.
<br /><br />
Next question was: <i>’Use line brushing to find out how many cars
have a displacement > 350 cc and economy > 35 mpg’.</i> The intention
with this question was to gain some insight on line brushing. 30%
of the subjects stated that this technique did not work for them.
Moreover, another 30% of the users answered the question incorrectly.
Evidently, there was 60% of subjects who did not understand
the technique, or were unable to use it correctly.
<br /><br />
During face-to-face interviews we noticed that subjects had
major problems when using the line brush. The common way of
using this technique is to highlight the sets of lines between the
two vertical axes. During the life testing, users
tried to use this brush similarly to multiple brush, drawing lines on
the axis. Using line brush in this way reduced its
properties and led to confusion of the subjects.

        </p>
        </div>
      </div>
      </div>
    )
  }
}

export default withRouter(ProjectCoordinates);
