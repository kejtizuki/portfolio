import React from 'react';
import './project33.scss';

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

    return(


        <div onClick={this.handleOnClick}>

            <div className="imgFit" style={{ backgroundImage: `url(${image})` }}>
            </div>
            <div className="textContainer" >
              <div className="headerTop">
                <h3 className="title">{title}</h3>
                <p>{description}</p>
              </div>

          </div>
        </div>
    )
  }
}

export default Project;
