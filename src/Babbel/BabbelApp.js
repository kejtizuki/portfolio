import React from 'react';
import './../InvoiceRedesign/invoiceRedesign.scss';
import './../CreatorContent/creatorContent.scss';
import './../InvoiceSuppliers/InvoiceSuppliers.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";
import { Player, ControlBar, PlayToggle, BigPlayButton, ReplayControl } from 'video-react';

var classNames = require('classnames');

class BabbelApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: '',
      isVisible: false,
      showBefore: false
    };
    this.sectionRefs = {};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY + 100;

    // Check if we've scrolled past the first header
    const firstSection = this.sectionRefs['problem'];
    const footer = document.querySelector('.footer');
    const footerInView = footer && footer.getBoundingClientRect().top <= window.innerHeight;
    const shouldBeVisible = firstSection && window.scrollY >= firstSection.offsetTop - 150 && !footerInView;

    const sections = Object.keys(this.sectionRefs);
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const element = this.sectionRefs[section];
      if (element && element.offsetTop <= scrollPosition) {
        this.setState({ activeSection: section });
        break;
      }
    }

    this.setState({ isVisible: shouldBeVisible });
  };

  scrollToSection = (sectionId) => {
    const element = this.sectionRefs[sectionId];
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  render() {
    const { activeSection, isVisible, showBefore } = this.state;

    const sections = [
      { id: 'problem', label: 'Problem' },
      { id: 'ideas', label: 'Ideas' },
      { id: 'option-a', label: 'Option A' },
      { id: 'option-b', label: 'Option B' }
    ];

    return(
      <div>
        <div className='projectContainerWithNav'>

      </div>
      </div>
    )
  }
}

export default withRouter(BabbelApp);
