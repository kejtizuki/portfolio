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


      // const headerClasses = classNames({
      //   'projectHeader': true,
      //   'sunwise': title === 'SunWise',
      //   'dogs': title === 'Dogs training app',
      //   'sfData': title === 'San Francisco Data Visualization',
      //   'mikeller': title === 'Mikeller app',
      //   'coordinates': title === 'Parallel coordinates',
      //   'costa': title === 'New Costa cruise experience',
      //   'ah': title === 'Augmented Hearing',
      //   'opi': title === 'Dementia Support App',
      //   'thesis': title === 'Medical time series data visualization',
      //   'issuu': title === 'Improving Issuu analytics page',
      //   'issuuReader': title === 'Consuming content on Issuu',
      //   'issuuBranding': title === 'Issuu Brand Refresh'
      // });


      console.log('keywords', keywords.split(","))

      const keywordsMap = keywords.split(",").map((elem, index) => {return <span className='keyword' key={index}>{elem}</span>})

      const projectClasses = classNames({
        'box': true,
        'sunwise': title === 'SunWise',
        'dogs': title === 'Dogs training app',
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
        'issuuBranding': title === 'Issuu Brand Refresh and Design System'
      });


    return(
        <div className='project'>
        <ReactTooltip className="myTooltip"/>

            <div onClick={this.handleOnClick} onMouseOver={this.imageHover} onMouseOut={this.imageHover} className={projectClasses} data-tip='Read'>
              <div className={' imgFit'} style={{ backgroundImage: `url(${image})` }}></div>
              {
                (this.state.isHovered === true) &&
                <div className='keywordsContainer transformAndFade'>{keywordsMap}</div>
              }
            </div>


            <div className="textContainer" >
              <div className="headerTop">
                <h2 className="title">{title}</h2>
                <p className='overviewDesc'>{description}</p>
              </div>

          </div>
        </div>
    )
  }
}

export default Project;
