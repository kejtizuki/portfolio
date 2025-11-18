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
      { id: 'Context and constraints', label: 'Context' },
      { id: 'existing-architecture', label: 'Existing architecture' },
      { id: 'problem', label: 'Problem discovery' },
      { id: 'approach', label: 'My approach' },
      { id: 'collaborating-with-eng', label: 'Collaborating with engineers' },
      { id: 'creation-flow', label: 'Redesigned creation flow' },
      { id: 'suggested-supplier', label: 'Suggestion design' },
      { id: 'design-pattern', label: 'Design pattern'},
      { id: 'results', label: 'Results'}
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


              <h2 ref={el => this.sectionRefs['context'] = el}>Context</h2>
              <p>Company Admins managing invoices on Pleo need an easy way to select the right supplier for payment.
              At the same time, Pleo must ensure compliance by verifying all new payment details before any transaction goes through.
              </p>
              <p>Without this compliance requirement, the system would be straightforward: use Optical Character Recognition (OCR) to capture supplier data,
              store it in a database, and let users do basic CRUD operations. But verification adds significant complexity.</p>
              <p>We needed to build a system that could handle supplier payment verification at scale without overwhelming Pleo's
              internal legal team with manual checks.
              The solution was to verify each new vendor once, then share them across all customers.
              </p>

              <h2>Technical constraints</h2>
              <p>When I joined the project, a legacy solution existed but it didn't scale well.
              The goal was to determine whether to rebuild the entire system or improve it within current constraints.
              After technical discovery, engineering estimated a full rebuild would require too much work (around 1 year estimated).
              The team agreed to work with the current data model and figure out how we could improve it. </p>

              <h2 ref={el => this.sectionRefs['existing-architecture'] = el}>Existing architecture</h2>
              <p>When a user uploads an invoice, OCR extracts supplier details (name, VAT number, payment details). The matching algorithm then searches the supplier list:</p>
              <ul>
                <li><span className="highlight">Company-specific suppliers</span> - Each customer's verified suppliers, including company-specific data.</li>
                <li><span className="highlight">Global verified suppliers</span> - Verified suppliers shared across all customers. Once verified, any customer can use them for payments.
                </li>
              </ul>

            </div>
          </div>

          <img src={require("./../assets/img/Pleo/suppliers/supplierModel2.png")} className="mainImg"/>

          <div className="row justifyCenter">
            <div className="col5 ">

              <h2 ref={el => this.sectionRefs['problem'] = el}>Problem discovery</h2>
              <p>When no supplier was found due to small differences between OCR data and our databases, the system created new suppliers,
              even in cases when existing supplier could be used for payment.
              </p>

              <h2>Scale of the problem</h2>

              <div className="data-highlight-row cols-2">
                <div className="data-card">
                  <div className="data-label">Duplicate suppliers created</div>
                  <div className="data-value">
                  ~100 <span className="data-unit">/month</span>
                  </div>
                </div>

                <div className="data-card">
                  <div className="data-label">Customer support tickets volume</div>
                  <div className="data-value">High</div>
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
              <h2>UX debt</h2>
              <p>Besides the matching criteria, the user experience offered no guidance to the user.
              When uploading an invoice, users struggled to know which supplier they should select or why a certain supplier was auto-selected.
              The flow to create a new supplier was hidden, with many dead-ends along the way.
              When a supplier was selected with missing payment details, it was unclear how to add them.</p>
            </div>
          </div>


          <div className="row justifyCenter">
            <div className="col5 ">

              <h2 ref={el => this.sectionRefs['approach'] = el}>My approach</h2>
              <p>
              Analysing the root causes of duplicates issues and UX debt led me to understand that the problem statement needed reframing,
              to allow us to tackle specific challenges in the system, one by one.
              </p>
            </div>
          </div>

          <img src={require("./../assets/img/Pleo/suppliers/problem-solution.png")} className="mainImg"/>
          <div className="row justifyCenter">
            <div className="col5 ">
              <h2 ref={el => this.sectionRefs['collaborating-with-eng'] = el}>Collaborating with engineers on matching logic</h2>
              <p>Working closely with the engineering team, I helped redesign the matching algorithm. Before, the algorithm either auto-assigned suppliers or left
              the supplier select empty. OCR data was used in the backend but not surfaced to the user.
              The new approach included three confidence levels which guided product decisions:
              <ul>
              <li>
              <span className="highlight">Full match</span> → Auto-assign supplier
              </li>
              <li>
              <span className="highlight">Partial match</span> → Suggest existing supplier to the user and highlight what's matching
              </li>
              <li>
              <span className="highlight">No match</span> → Use the OCR data to guide the creation of the new supplier. User creates - not the backend
              </li>
              </ul>
              </p>
            </div>
          </div>
          <img src={require("./../assets/img/Pleo/suppliers/suggestionFlow.png")} className="mainImg"/>


          <div className="row justifyCenter">
            <div className="col5 ">

              <h2 ref={el => this.sectionRefs['creation-flow'] = el}>Solution 1: Redesigned creation flow</h2>
              <h3>Understanding the problem</h3>
              <p>Mapping the old flow revealed it was more complex than it appeared. Users weren't guided through the process and frequently encountered dead-ends with no clear way forward.
              </p>
              <p>Old design:</p>
              <div className="callout">
              <p>The old Information Architecture (IA) indicated 1:1 relationship between Supplier and Invoice. It gave the wrong impression to the user as in reality one supplier can
              have multiple invoices. </p>
              </div>
            </div>
          </div>

          <img src={require("./../assets/img/Pleo/suppliers/oldCreationflow.png")} className="mainImg"/>

          <div className="row justifyCenter">
            <div className="col5 ">
              <h3>What I changed</h3>
              <p><span className="label-removed">What I removed</span></p>
              <ul>
              <li><span className="highlight">Autocreation in all scenarios</span> → System no longer creates suppliers without user confirmation (one of the main sources of duplicates)</li>
              <li><span className="highlight">Supplier tab</span> → Reinforced incorrect 1:1 invoice-supplier relationship</li>
              <li><span className="highlight">Dead-end states</span> → Added clear next actions at every decision point</li>
              </ul>
              <p><span className="label-added">What I added</span></p>
              <ul>
              <li><span className="highlight">Clear creation CTA</span> → Prominent button with OCR-prefilled data for review</li>
              <li><span className="highlight">Supplier drawer</span> → Shows supplier as separate entity that can serve multiple invoices</li>
              <li><span className="highlight">Guided flow</span> → Users understand their options at each step</li>
              </ul>
              <p>The new design used OCR data from the invoice pdf. The user only needs to review it and confirm the creation. This way the user
              has control over what's in the system. We removed the autocreation step as this was one of the main factors contributing to high number of supplier duplicates.</p>
              <div className="callout">
              <p>The drawer pattern was crucial as it made supplier feel like a separate entity, not nested under invoice.</p>
              </div>
              <h3>Key decisions</h3>
              <p>When no full match or partial match was found but OCR data from the PDF was there, we showed the CTA to create a new supplier.
              In the past, this was one of the scenarios contributing to duplicate creation.</p>
            </div>
          </div>

          <img src={require("./../assets/img/Pleo/suppliers/creationTested.gif")} className="mainImg"/>

          <div className="row justifyCenter">
            <div className="col5 ">

              <h2 ref={el => this.sectionRefs['suggested-supplier'] = el}>Solution 2: Suggestion design</h2>
              <h3>Early explorations</h3>
              <p>
              I tested 3 versions of the suggestion design. My first two designs failed during usability testing.
              Version 1 showed supplier suggestions with incomplete payment details, which confused users.
              In Version 2, I added an informational callout to explain the situation, but users still hesitated to select this suggestion.
              Despite understanding the explanation, they lacked confidence.
              </p>
              <h3>What I learnt</h3>
              <p>Through testing, I discovered that users needed complete payment details to trust suggestions. They also wanted a clear visual overview showing which fields matched and which didn't.</p>
              <div className="callout">
              <p>Explanatory text alone couldn't compensate for incomplete data. Users needed to see the data itself to feel confident in their decision.</p>
              </div>
            </div>

          </div>

          <div className="row" style={{ gap: '40px' }}>
            <div className="col6">
              <p>Version 1</p>
              <img src={require("./../assets/img/Pleo/suppliers/suggestedOCR-1.png")} className="mainImgNoMargin"/>
            </div>
            <div className="col6">
              <p>Version 2</p>
              <img src={require("./../assets/img/Pleo/suppliers/suggestedOCR.png")} className="mainImgNoMargin"/>
            </div>
          </div>
          <div className="row justifyCenter">
            <div className="col5 ">

              <h3>Final suggestion pattern</h3>

              <p>After a few iterations of testing, I came up with the final suggestion pattern. Users wanted to have high confidence when
              selecting the suggestion. Adding the checkboxes with overview helped them understand what's the same on the PDF as in our database.
              </p>
              <p>I took the product decision to only suggest suppliers with payment details. This meant less suggestions, but higher acceptance rate.
              </p>
              <div className="callout">
              <p>This design pattern was used accross the product to suggest Purchase Orders and Supplier data.</p>
              </div>
            </div>

          </div>

          <img src={require("./../assets/img/Pleo/suppliers/suggestionFinal.gif")} className="mainImgNoMargin"/>

          <div className="row justifyCenter">
            <div className="col5 ">

              <h2 ref={el => this.sectionRefs['design-pattern'] = el}>Solution 3: Expanding the design pattern with CTAs to add and edit details </h2>
              <p>
              When users had supplier selected with missing payment details, they needed a quick way to add these details. I expanded the Create CTA to serve for this use case.
              </p>
            </div>
            </div>

          <img src={require("./../assets/img/Pleo/suppliers/design-pattern.png")} className="mainImgNoMargin"/>

          <div className="row justifyCenter">
            <div className="col5 ">

              <h2 ref={el => this.sectionRefs['results'] = el}>Results</h2>

              <h3>Duplicates creation reduced</h3>
              <p>
              Monthly duplicate suppliers dropped from ~100 to ~40 per month.
              </p>



              <div className="data-highlight-row">
                <div className="data-card">
                  <div className="data-label">Newly created duplicates reduced by</div>
                  <div className="data-value">
                  60%<span className="data-unit"></span>
                  </div>
                </div>
              </div>

              <h3>Create new supplier completion rate</h3>
              <p>
              In the first week post-release majority of users saw the CTAs to create new suppliers.
              83% successfully completed this flow. This shows high engagement with the new design and successful completion.
              </p>

              <div className="data-highlight-row">
                <div className="data-card">
                  <div className="data-label">New supplier creation completion</div>
                  <div className="data-value">
                  83%<span className="data-unit"></span>
                  </div>
                </div>
              </div>

              <h3>The system is getting smarter over time</h3>
              <p>
              One of the most encouraging outcomes was watching the system improve as it learned from users.
              In the first week post-launch, users primarily saw "Create new supplier" CTAs as the algorithm needed to adapt.
              When users saw suggesterd suppliers, they editted ther data.
              By week two, the pattern reversed. The system started showing more suggestions than creation CTAs, and users edited much less.
              The algorithm learned which suppliers were actually the same, which was exactly what we wanted.
              </p>

              <div className="row" style={{ gap: '40px' }}>
                <div className="col6">
                  <p>Clicked on suggested supplier</p>
                  <img src={require("./../assets/img/Pleo/suppliers/suggestedSupplier.png")} className="mainImgNoMargin"/>
                </div>
                <div className="col6">
                  <p>Clicked on create new supplier</p>
                  <img src={require("./../assets/img/Pleo/suppliers/createdNewFromOCR.png")} className="mainImgNoMargin"/>
                </div>
              </div>

              <div className="row" style={{ gap: '40px' }}>
                <div className="col6">
                  <p>Editted existing supplier</p>
                  <img src={require("./../assets/img/Pleo/suppliers/edittedExistingSupplier.png")} className="mainImgNoMargin"/>
                </div>
                <div className="col6">
                  <p>Created new supplier using supplier select</p>
                  <img src={require("./../assets/img/Pleo/suppliers/createdNewSupplierFromDropdown.png")} className="mainImgNoMargin"/>
                </div>
              </div>

            </div>
            </div>


        </div>
      </div>
    )
  }
}

export default withRouter(InvoiceSuppliers);
