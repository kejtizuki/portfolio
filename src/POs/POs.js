import React from 'react';
import './../POs/POs.scss';
import './../CreatorContent/creatorContent.scss';
import './../InvoiceSuppliers/InvoiceSuppliers.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";
import { Player, ControlBar, PlayToggle, BigPlayButton, ReplayControl } from 'video-react';

class POS extends React.Component {
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
    const firstSection = this.sectionRefs['purchase-orders'];
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
    const { activeSection, isVisible } = this.state;

    const sections = [
      { id: 'purchase-orders', label: 'Problem' },
      { id: 'layout-explorations', label: 'Layout explorations' },
      { id: 'final-layout', label: 'Final layout' },
      { id: 'display-mode', label: 'Display mode' },
      { id: 'line-items', label: 'Line items iterations' },
      { id: 'implemented-design', label: 'Implemented design' }
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

      <div className='projectContainerWithNav'>


      <img src={require("./../assets/img/Pleo/POs/POPleo.png")} className="mainImgNoMargin imgWithPadding"/>


      <div className='row justifyCenter'>
      <div className="col5">
      <h2 ref={el => this.sectionRefs['purchase-orders'] = el}>Problem</h2>
      <p>
      Purchase orders bring control and certainty to a company's buying process.
      Our customers wanted approval process to happen before making purchases, not after invoices
      arrived. This would save time and eliminate delayed payments due to missing approvals.
      Additionally, POs are a good way to control cash flow and budgeting.
      </p>
      </div>
      </div>

      <div className='row justifyCenter'>
      <div className="col5">
      <h2>Discovery research</h2>
      <p>
      After analyzing existing feedback from Productboard, I conducted 6 discovery calls
      with Finance Managers to understand their workflows. I identified
      patterns in how companies handle pre-purchase approvals, mapped current
      processes, and scoped the MVP.

      Before rollout, I led 20 alpha tests with customers to validate the solution
      and iterate based on real usage.
      </p>

      <div className='row '><img src={require("./../assets/img/Pleo/Approvals/POs.png")} className="mainImgNoMargin contentShadowSmallRadius"/></div>

      <h2>Key insights</h2>
      <ul>
        <li>Finance teams used Excel to get pre-purchase approvals and had to apply the same approval workflow to invoices on Pleo.
        Having both workflows in one tool would be a big time-saver for them</li>
        <li>Pre-purchase approvals were essential for paying invoices on
        time</li>
        <li>Finance teams wanted a simple workflow: create purchase order →
        send to supplier → supplier sends invoice → match invoice to PO</li>
      </ul>
      </div>
      </div>

      <div className='row justifyCenter'>
      <div className='col5'>
      <h2 ref={el => this.sectionRefs['layout-explorations'] = el}>Layout explorations / PO creation</h2>
      <p>I explored different layout approaches to organize information in a way that felt intuitive without becoming visually heavy. </p>
      <p>An important part of this process was collaborating with engineers early. Through these discussions, we realized the flow needed to be split into logical steps that aligned with the data model.
      We decided on a two-step approach: create the form first, then add reviewers. This structure worked better technically and made more sense to users.</p>
      </div>
      </div>
      <div className='row'>
      <img src={require("./../assets/img/Pleo/Approvals/POs-explorations.png")} className="mainImgNoMargin"/>

      </div>

      <div className='row justifyCenter'>
      <div className='col5'>
      <h2 ref={el => this.sectionRefs['final-layout'] = el}>Final layout</h2>
      <p>After few iterations I landed on the final layout. Two step structure provided a simple constraint. The first step was more challenging to design, as it needed to handle much more data than the second one.
      Through user interviews, I tested different information hierarchies to understand what felt most natural. Users gravitated toward a simple progression: general details first, then line items, with address information at the end.</p>
      <p>This sequence matched the mental model of how they think about purchase orders.</p>
      <p>Line items required a lot of horizontal space for comfortable table interaction. I chose maximum width layout to optimise usability. Narrower layouts forced horizontal scrolling which can slow down the data entry and confuse users. </p>
      <p>As the form is quite long, I added a simple fixed header which stays in place while the user scrolls down. This helps them to not loose context and the most important information while filling in the form.  </p>
      </div>
      </div>
      <div className='row'>
      <img src={require("./../assets/img/Pleo/Approvals/POfinal.png")} className="mainImgNoMargin"/>
      </div>
      <div className='row'>
      <img src={require("./../assets/img/Pleo/Approvals/Table.png")} className="mainImgNoMargin"/>
      </div>
      <div className='row'>
      <img src={require("./../assets/img/Pleo/Approvals/POfinal-review.png")} className="mainImgNoMargin"/>
      </div>

      <video className="mainImg" autoPlay loop muted>
        <source src={require("./../assets/img/Pleo/POs/flow.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className='row'>
      <div className='col5'>
      <h2 ref={el => this.sectionRefs['display-mode'] = el}>Display mode</h2>
      <p>Once PO gets created it's displayed on a simple list. Clicking on a list item opens PO view where the user can read-through data and see approval status. </p>
      </div>
      </div>


      <div className='row'>
      <img src={require("./../assets/img/Pleo/Approvals/PO-display.png")} className="mainImgNoMargin"/>
      </div>

      <div className='row'>
      <h2 ref={el => this.sectionRefs['line-items'] = el}>Line items iterations</h2>
      </div>

      </div>

      <div className='row'>
      <img src={require("./../assets/img/Pleo/Approvals/line-items-explo.png")} className="mainImgNoMargin"/>
      </div>
      <div className='projectContainerWithNav'>

      <div className='row'>
      <div className="col7 marginRight80">
      <img src={require("./../assets/img/Pleo/Approvals/lineItems.gif")} className="mainImgNoMargin contentShadowSmallRadius"/>
      </div>
      <div className='col3'><h2>Line items display vs edit mode</h2><p>I continued iterating on the line items challenge in the display view. When viewing a created purchase order, users need to read through line items quickly but occasionally edit them. I explored an interaction that supported both modes.</p></div>
      </div>

      <div className='row'>
      <h2 ref={el => this.sectionRefs['implemented-design'] = el}>Implemented design</h2>
      </div>
      <div className='row'>
      <img src={require("./../assets/img/Pleo/Approvals/POs.gif")} className="mainImgNoMargin contentShadowSmallRadius"/>

      </div>
      <div className='row '><img src={require("./../assets/img/Pleo/Approvals/beforeafter.png")} className="mainImgNoMargin"/></div>



      </div>

      </div>




    )
  }
}

export default withRouter(POS);
