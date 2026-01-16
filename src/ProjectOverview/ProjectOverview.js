import React from 'react';
import './projectOverview.scss';
import './projectOverview-new.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";

class ProjectOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  handleBackClick = () => {
    this.props.history.push("/");
  };

  scrollToContent = () => {
    // Scroll to the projectContainerWithNav which is the start of InvoiceSuppliers content
    const contentElement = document.querySelector('.projectContainerWithNav');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  render() {
    const {
        title,
        description,
        keywords,
        company,
        year,
        type,
        longDesc
      } = this.props;

    return(
      <div className="project-overview-new">
        {/* Fixed Navigation */}
        <div className="iconBg" onClick={this.handleBackClick}>
          <img src={require("./../assets/img/arrow-left.png")} alt="back" className="iconArrow"/>
        </div>

        {/* Header Section */}
        <div className="projectHeader">
          <div className="projectTitleRow">
            <div className="projectTitle">
              <h1>{title}</h1>
            </div>
            <button className="readButton" onClick={this.scrollToContent}>Read</button>
          </div>
          <p className="projectDescription">{longDesc}</p>
          <div className="projectMeta">
            {company && <span>{company}</span>}
            {keywords && <span>{keywords}</span>}
            {year && <span>{year}</span>}
            {type && <span>{type}</span>}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ProjectOverview);
