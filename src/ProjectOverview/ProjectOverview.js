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
        website,
        company,
        year,
        team
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
      'contentEditorsOverview': title === 'Issuu graphics editor',
      'mobileAppOverview': title === 'Redesign of Issuu mobile app',
      'ap': title === 'Pleo Accounts Payables',
      'invoiceSuppliers': title === 'Reducing supplier duplicates through smarter matching and user control'
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
        <div className="projectDetails">
          <div className="detailsGrid">
            {company && (
              <div className="detailItem">
                <div className="detailLabel">Company</div>
                <div className="detailValue">{company}</div>
              </div>
            )}
            {keywords && (
              <div className="detailItem">
                <div className="detailLabel">Skills</div>
                <div className="detailValue">{keywords}</div>
              </div>
            )}
            {year && (
              <div className="detailItem">
                <div className="detailLabel">Year</div>
                <div className="detailValue">{year}</div>
              </div>
            )}
            {team && (
              <div className="detailItem">
                <div className="detailLabel">Team</div>
                <div className="detailValue">{team}</div>
              </div>
            )}
            {tools && (
              <div className="detailItem">
                <div className="detailLabel">Tools</div>
                <div className="detailValue">{tools}</div>
              </div>
            )}
            {type && (
              <div className="detailItem">
                <div className="detailLabel">Type</div>
                <div className="detailValue">{type}</div>
              </div>
            )}
            {website && (
              <div className="detailItem">
                <div className="detailLabel">Website</div>
                <div className="detailValue">{website}</div>
              </div>
            )}
          </div>
        </div>
        <div className="projectContent">
          {longDesc}
        </div>
      </div>
    </div>
    )
  }
}
export default withRouter(ProjectOverview);
