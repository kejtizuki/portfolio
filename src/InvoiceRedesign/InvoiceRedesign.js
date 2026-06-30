import React from 'react';
import './../InvoiceRedesign/invoiceRedesign.scss';
import './../CreatorContent/creatorContent.scss';
import './../InvoiceSuppliers/InvoiceSuppliers.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";
import { Player, ControlBar, PlayToggle, BigPlayButton, ReplayControl } from 'video-react';

var classNames = require('classnames');

class InvoiceRedesign extends React.Component {
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
    const shouldBeVisible = firstSection && window.scrollY >= firstSection.offsetTop - 150;

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

        {/* Floating Table of Contents */}
        {isVisible && (
          <nav className="floating-toc">
            <ul>
              {sections.map(section => (
                <li key={section.id}>
                  <a
                    className={activeSection === section.id ? 'active' : ''}
                    onClick={() => this.scrollToSection(section.id)}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Before/After Toggle - Above Video */}
        <div className="beforeAfterToggleWrapper">
          <div className="beforeAfterToggle">
            <button
              className={classNames({ active: showBefore })}
              onClick={() => this.setState({ showBefore: true })}
            >
              Before
            </button>
            <button
              className={classNames({ active: !showBefore })}
              onClick={() => this.setState({ showBefore: false })}
            >
              After
            </button>
          </div>
        </div>

        {/* Image/Video - Changes based on toggle with smooth cross-fade */}
        <div className="beforeAfterMediaContainer">
          {/* Before - GIF */}
          <img
            src={require("./../assets/img/Pleo/InvoicesRedesign/currentInvoiceFlow.gif")}
            className={classNames('mainImg', 'beforeAfterMedia', { active: showBefore })}
            alt="Before"
          />

          {/* After - Video */}
          <video
            className={classNames('mainImg', 'beforeAfterMedia', { active: !showBefore })}
            autoPlay
            loop
            muted
          >
            <source
              src={require("./../assets/img/Pleo/InvoicesRedesign/thumbnail.mp4")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

          <div className='row justifyCenter'>
            <div className='col5'>
              <h2 ref={el => this.sectionRefs['problem'] = el}>Problem</h2>
              <p>On the invoice details page, there is some ambiguity around the invoice status, review status and the placement of action buttons. Users struggle to understand the current state of their invoice and what actions they can take next.</p>
            </div>
          </div>

          <div className='row justifyCenter'>
            <div className='col5'>
              <h2 ref={el => this.sectionRefs['option-a'] = el}>Option A: Fixed header with sections</h2>
              <p>In this version I focused on having all statuses and necessary details on top of the page, in the header. The header becomes smaller while the user scrolls down the page, but the crucial information is always visible in the fixed header view.</p>
              <p>This prototype also features introducing sections to the page, where the first section is linked to main action buttons. This way users always know where they need to go to take action.</p>
              <div className="callout">
                <p>The fixed header pattern keeps important information visible at all times while scrolling through the invoice details.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <img src={require("./../assets/img/Pleo/Approvals/fixedHeader.gif")} className="mainImgNoMargin contentShadowSmallRadius"/>
          </div>

          <div className='row justifyCenter'>
            <div className='col5'>
              <h2 ref={el => this.sectionRefs['option-b'] = el}>Option B: Fixed footer for review status</h2>
              <p>This version has a similar structure to Option A, however the review status is now placed in a fixed footer instead of the header. This way invoice status is clearly separated from the review status, making it easier for users to understand which element to focus on.</p>
              <p>The footer pattern creates a clear visual hierarchy: header for invoice details, footer for action and review information.</p>
            </div>
          </div>
          <div className='row'>
            <img src={require("./../assets/img/Pleo/Approvals/headeroption2.gif")} className="mainImgNoMargin contentShadowSmallRadius"/>
          </div>

        </div>
      </div>
    )
  }
}

export default withRouter(InvoiceRedesign);
