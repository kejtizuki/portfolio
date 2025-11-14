import React from 'react';
import './../InvoiceSuppliers/InvoiceSuppliers.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";
import { Player, ControlBar, PlayToggle, BigPlayButton, ReplayControl } from 'video-react';

class InvoiceSuppliers extends React.Component {
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
    const firstSection = this.sectionRefs['context'];
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
      { id: 'context', label: 'Context' },
      { id: 'technical-constraints', label: 'Technical constraints' },
      { id: 'existing-architecture', label: 'Existing architecture' },
      { id: 'problem', label: 'Problem' },
      { id: 'scale', label: 'Scale of the problem' },
      { id: 'ux-debt', label: 'UX debt' },
      { id: 'reframing', label: 'Reframing the problems' },
      { id: 'creation-flow', label: 'Better creation flow' }
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

        <img src={require("./../assets/img/Pleo/suppliers/cover3.png")} className="mainImg"/>

        <div className="projectContainerWithNav">

          <div className="row justifyCenter">
            <div className="col5 ">


            <div className="callout callout-emphasis">
              <h2>This is work in progress. Available in a few days. </h2>
            </div>


              <h2 ref={el => this.sectionRefs['context'] = el}>Context</h2>
              <p>Company Admins managing invoices on Pleo need an easy way to select the right supplier for payment.
              At the same time, Pleo must ensure compliance by verifying all new payment details before any transaction goes through.
              </p>
              <p>Without this compliance requirement, the system would be straightforward: use OCR to capture supplier data,
              store it in a database, and let users do basic CRUD operations. But verification adds significant complexity.</p>
              <p>We needed to build a system that could handle supplier payment verification at scale without overwhelming Pleo's
              internal legal team with manual checks.
              The solution was to verify each new vendor once, then share them across all customers.
              </p>

              <h2 ref={el => this.sectionRefs['technical-constraints'] = el}>Technical contraints</h2>
              <p>When I joined the project, a legacy solution existed but it didn't scale well.
              The goal was to determine whether to rebuild the entire system or improve it within current constraints.
              After technical discovery, engineering estimated a full rebuild would require too much work (around 1 year estimated).
              The team agreed to work with the current data model and figure out how we could improve it. </p>

              <h2 ref={el => this.sectionRefs['existing-architecture'] = el}>Existing architecture</h2>
              <p>When a user uploads an invoice, OCR extracts supplier details (name, VAT number, payment details). The matching algorithm then searches the supplier list:</p>
              <ul>
                <li>Company-specific suppliers - Each customer's verified suppliers, including company-specific data.</li>
                <li>Global verified suppliers - Verified suppliers shared across all customers. Once verified, any customer can use them for payments.
                </li>
              </ul>

            </div>
          </div>

          <img src={require("./../assets/img/Pleo/suppliers/supplierModel2.png")} className="mainImg"/>

          <div className="row justifyCenter">
            <div className="col5 ">

              <h2 ref={el => this.sectionRefs['problem'] = el}>Problem</h2>
              <p>When no supplier was found due to small differences between OCR data and our databases, the system created new suppliers,
              even in cases when existing supplier could be used for payment.
              </p>

              <h2 ref={el => this.sectionRefs['scale'] = el}>Scale of the problem</h2>

              <div className="data-highlight-row cols-2">
                <div className="data-card">
                  <div className="data-label">Duplicate suppliers created</div>
                  <div className="data-value">
                  ~100 <span className="data-unit">/month</span>
                  </div>
                </div>

                <div className="data-card">
                  <div className="data-label">Customer support tickets</div>
                  <div className="data-value">High volume</div>
                </div>
              </div>

              <div className="callout">
                <p>When users saw these duplicates in the supplier list, they couldn't tell which one was the correct supplier to select, leading to confusion, uncertainty and lost trust in the system.</p>
              </div>
              <p>Selecting the wrong supplier could even result in delayed or failed payments. Customers constantly reported this issue both in customer support tickets and user interviews.</p>
              <p>Here is an example of what one of our customers saw in their supplier list:
              </p>
              <img src={require("./../assets/img/Pleo/suppliers/duplicate.png")} className="mainImg"/>
              <p>Working with 2 backend engineers and 1 frontend engineer, I analyzed why duplicates appeared so often.
              The matching algorithm was too strict and only selected existing supplier when full match criteria were met.
              When small differences existed, the system created duplicates instead of suggesting potential matches.</p>
              <div className="callout callout-emphasis">
                <h2>How can we improve the matching logic to reduce duplicates, keep compliance requirements, and help the system get better over time?</h2>
              </div>
            </div>
          </div>

          <div className="row justifyCenter">
            <div className="col5 ">
              <h2 ref={el => this.sectionRefs['ux-debt'] = el}>UX debt</h2>
              <p>Besides the matching criteria, the user experience offered no guidance to the user.
              When uploading an invoice, users struggled to know which supplier they should select or why a certain supplier was auto-selected.
              The flow to create a new supplier was hidden, with many dead-ends along the way.
              When a supplier was selected with missing payment details, it was unclear how to add them.</p>
            </div>
          </div>


          <div className="row justifyCenter">
            <div className="col5 ">

              <h2 ref={el => this.sectionRefs['reframing'] = el}>Reframing the problems and ideating solutions</h2>
              <p>
              Analysing the root causes of duplicates issues and UX debt led me to understand that the problem statement needed reframing,
              to allow us to tackle specific challenges in the system, one by one.
              </p>
            </div>
          </div>

          <img src={require("./../assets/img/Pleo/suppliers/problem-solution.png")} className="mainImg"/>

          <div className="row justifyCenter">
            <div className="col5 ">

              <h2 ref={el => this.sectionRefs['creation-flow'] = el}>Better creation flow</h2>

              <p>To understand how to support the new flow best, I mapped out the old one first. Seemingly simple task was quite hard to achieve.
              The user was not guided through the flow, ending up in a few dead ends without clear exit.
              </p>
              <h3>Old design below</h3>
            </div>
          </div>

          <img src={require("./../assets/img/Pleo/suppliers/oldCreationflow.png")} className="mainImg"/>

          <div className="row justifyCenter">
            <div className="col5 ">
              <h3>New design</h3>
              <p>Removed: autocreation, supplier tab (unclear IA), unnecessary nested state from supplier view</p>
              <p>Added: clear CTA to create new supplier using OCR data, drawer to display and edit supplier data</p>
              <p>The new design used OCR data from the invoice pdf. The user only needs to review it and confirm the creation. This way the user
              has control over what's in the system. We removed the autocreation step as this was one of the main factors contributing to high number of supplier duplicates.</p>

            </div>
          </div>

          <img src={require("./../assets/img/Pleo/suppliers/creationTested.gif")} className="mainImg"/>
          <img src={require("./../assets/img/Pleo/suppliers/suggestedOCR.png")} className="mainImg"/>


        </div>
      </div>
    )
  }
}

export default withRouter(InvoiceSuppliers);
