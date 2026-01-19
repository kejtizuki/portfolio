import React from 'react';
import './../InvoiceRedesign/invoiceRedesign.scss';
import './../CreatorContent/creatorContent.scss';
import './../InvoiceSuppliers/InvoiceSuppliers.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";
import { Player, ControlBar, PlayToggle, BigPlayButton, ReplayControl } from 'video-react';

class InvoiceRedesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: '',
      isVisible: false
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
    const firstSection = this.sectionRefs[''];
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
    const { activeSection, isVisible } = this.state;

    const sections = [
      { id: 'invoice-details', label: 'Ideas' }
    ];

    return(
      <div>
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

      <img src={require("./../assets/img/Pleo/Approvals/Thumbnail.png")} className="mainImg"/>

      <div className='projectContainerWithNav'>

      <div className="callout callout-emphasis">
        <h1>This is work in progress. Full case study soon.</h1>
      </div>
      <div className='row'>
      <div className='col5'>
      <h2 ref={el => this.sectionRefs['invoice-details'] = el}>Ideas</h2>
      <h3>Current invoice details view</h3>
      <p>Here is the current details view. I'm looking into the layout and how the data is presented on the page. Currently there is some ambiguity around the invoice status, review status and the placement of action buttons. </p>
      </div>
      </div>
      <div className='row'>
      <img src={require("./../assets/img/Pleo/Approvals/currentInvoiceFlow.gif")} className="mainImgNoMargin contentShadowSmallRadius"/>
      </div>

      <div className='row'>
      <div className='col5'>
      <h3>Option A</h3>
      <p>In this version I focused on having all statuses and neccessary details on top of the page, in the header. The header becomes smaller while the user scrolls down the page, but the crucial information is always visible in the fixed header view. </p>
      <p>This prototype also features introducing section to the page, where first section is linked to main action buttons. </p>
      </div>
      </div>
      <div className='row'>
      <img src={require("./../assets/img/Pleo/Approvals/fixedHeader.gif")} className="mainImgNoMargin contentShadowSmallRadius"/>
      </div>

      <div className='row'>
      <div className='col5'>
      <h3>Option B</h3>
      <p>This version has a similar structure, however review is now placed in a fixed footer. This way invoice status is clearly separated from the review status. </p>
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
