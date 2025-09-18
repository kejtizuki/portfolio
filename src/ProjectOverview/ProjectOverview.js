import React from 'react';
import './projectOverview.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";
var classNames = require('classnames');

class ProjectOverview extends React.Component {


  constructor(props) {
    super(props);
    console.log(props)
  }

  handleOnClick = () => {
    console.log("redirect home");
    this.props.history.push("/");
  };


  render() {

    const {
        title,
        bgImage,
        description,
        keywords,
        tools,
        longDesc,
        type,
        website
      } = this.props;

    const headerClasses = classNames({
      'projectHeader': true,
      'sunwise': title === 'SunWise',
      'sfData': title === 'San Francisco Data Visualization',
      'mikeller': title === 'Mikeller app',
      'coordinates': title === 'Parallel coordinates',
      'costa': title === 'New Costa cruise experience',
      'ah': title === 'Augmented Hearing',
      'opi': title === 'Dementia Support App',
      'thesis': title === 'Medical time series data visualization',
      'issuu': title === 'Improving Issuu analytics page',
      'issuuCreate': title === 'Issuu Create editor for real estate agents',
      'issuuReader': title === 'Consuming content on Issuu',
      'issuuBrandingOverview': title === 'Issuu brand refresh and design system',
      'contentEditorsOverview': title === 'Issuu Creator Content space',
      'mobileAppOverview': title === 'Redesign of Issuu mobile app',
      'pleoApprovals': title === 'Pleo Invoice approvals'
    });

    return(
      <div>
      <div className={headerClasses}>
        <div className="projectTitle">
        <div>
          <Link to="/">
          <div className="iconBg" onClick={this.handleOnClick}>
            <img src={require("./../assets/img/arrow-left-white.png")} alt="arrow" className="iconArrow"/>
          </div>
          </Link>
        </div>
        <h1 className="title">{title}</h1>
        </div>
        <p className="projectDescription">{description}</p>
      </div>
      <div className="basicContainer">
        <div className="col3 role">
        <h2 className="title">Details</h2>
        <h4 className="title">Role</h4>
        <p>{keywords}</p>
        <h4 className="title">Type</h4>
        <p>{type}</p>
        <h4 className="title">Tools</h4>
        <p>{tools}</p>
        {
          this.props.website &&
          <div>
          <h4 className="title">Website</h4>
          <p>{website}</p>
          </div>
        }
        </div>
        <div className="col7 more">
          {longDesc}
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(ProjectOverview);
