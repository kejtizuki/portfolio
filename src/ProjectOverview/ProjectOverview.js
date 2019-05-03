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
      } = this.props;

    const headerClasses = classNames({
      'projectHeader': true,
      'sunwise': title === 'SunWise',
      'dogs': title === 'Dogs training app',
      'sfData': title === 'San Francisco Data Visualization',
      'mikeller': title === 'Mikeller app',
      'coordinates': title === 'Parallel coordinates'

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
        <div className="col3">
        <h2 className="title">/01 Details</h2>
        <h4 className="title">Role</h4>
        <p>{keywords}</p>
        <h4 className="title">Tools</h4>
        <p>{tools}</p>
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
