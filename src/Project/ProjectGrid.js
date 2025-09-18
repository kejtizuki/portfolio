import React from 'react';
import './project33.scss';
import '../ProjectOverview/projectOverview.scss';
import ReactTooltip from 'react-tooltip'
var classNames = require('classnames');

class Project extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    }
  }

  imageHover = () => {
    this.setState({
      isHovered: !this.state.isHovered
    })
    console.log('state', this.state.isHovered)
  }

  handleOnClick = () => {
    console.log("redirect");
    this.props.history.push(this.props.redirect);
  };

  render() {

    const {
        image,
        title,
        description,
        keywords
      } = this.props;


      console.log('keywords', keywords)

      console.log('keywords', keywords.split(","))

      const keywordsMap = keywords.split(",").map((elem, index) => {return <span className='keyword' key={index}>{elem}</span>})

      const projectClasses = classNames({
        'box': true,
        'sunwise': title === 'SunWise',
        'sfData': title === 'San Francisco Data Visualization',
        'coordinates': title === 'Parallel coordinates',
        'costa': title === 'New Costa cruise experience',
        'ah': title === 'Augmented Hearing',
        'opi': title === 'Dementia Support App',
        'thesis': title === 'Medical time series data visualization',
        'issuuAnalytics': title === 'Improving Issuu analytics page',
        'issuuCreate': title === 'Issuu Create editor for real estate agents',
        'issuuReader': title === 'Consuming content on Issuu',
        'issuuBranding': title === 'Issuu brand refresh and design system',
        'contentEditors': title === 'Issuu graphics editor',
        'mobileApp': title === 'Redesign of Issuu mobile app',
        'pleoApprovals': title === 'Pleo Invoice approvals'
      });


    return(
        <div className='project'>
        <ReactTooltip className="myTooltip"/>

            <div onClick={this.handleOnClick} onMouseOver={this.imageHover} onMouseOut={this.imageHover} className={projectClasses} data-tip='Read'>
              <div className={' imgFit'} style={{ backgroundImage: `url(${image})` }}></div>
            </div>

            <div className="margin40" >
              <div className="headerTop">
              {/* <div className='keywordsContainer transformAndFade'>{keywordsMap}</div>*/}

                <h1 className="title">{title}</h1>
                <p className='overviewDesc'>{description}</p>
              </div>

          </div>
        </div>
    )
  }
}

export default Project;
