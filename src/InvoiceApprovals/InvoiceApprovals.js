import React from 'react';
import './../InvoiceApprovals/InvoiceApprovals.scss';
import './../CreatorContent/creatorContent.scss';
import './../InvoiceSuppliers/InvoiceSuppliers.scss';
import { BrowserRouter as Link, withRouter } from "react-router-dom";
import { Player, ControlBar, PlayToggle, BigPlayButton, ReplayControl } from 'video-react';

class InvoiceApprovals extends React.Component {
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
    const firstSection = this.sectionRefs['automating-reviews'];
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
      { id: 'automating-reviews', label: 'Automating invoice reviews' },
      { id: 'purchase-orders', label: 'Designing purchase orders' },
      { id: 'layout-explorations', label: 'Layout explorations' },
      { id: 'final-layout', label: 'Final layout' },
      { id: 'display-mode', label: 'Display mode' },
      { id: 'line-items', label: 'Line items iterations' },
      { id: 'implemented-design', label: 'Implemented design - PO' },
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


      <div className="projectContainerWithNav">

      <div className="row justifyCenter">
      <div className="col5 ">

      <h1 ref={el => this.sectionRefs['automating-reviews'] = el}>Automating invoice reviews</h1>
      <h2>Problem</h2>
      <p>
      Mid-sized companies needed control mechanisms to confidently approve
      and pay invoices without errors.

      Our initial solution required manual reviewer assignment. Finance
      managers had to open every invoice and add reviewers one by one. The process was frustrating and very manual, and it could be clearly automated.
      </p>

      <h2>What I did</h2>
      <p>
      I worked on transitioning the workflow from manual to automatic. In the new system, reviewers are automatically assigned to invoices based on the amount, tags, and team. Worked closely with Review Management team and Design Systems team to introduce the workflow to my area of the product.
      </p>

      <h2>Impact</h2>
      <p>The new flow saves time and effort and has allowed us to expand our product offering in Germany. Automated flows were among the most requested features in this market. In October 2024, 19% of companies using invoices relied on manual review flows. By September 2025, 38% of companies were using review workflows — 18% still using manual reviews and nearly 21% adopting automated flows.</p>
      </div>
      </div>

      </div>




      <div className='row coloredRow'>
      <div className='col5'>
      <div className='col5'><h2 className='padding50 beforeAfterText'>Before</h2></div>
      <Player
        playsInline
        src={require("./../assets/img/Pleo/Approvals/approvalsV1.mov")}
        className='mainImg playerBlack'
        >
        <ControlBar autoHide disableCompletely />
        <BigPlayButton position="center" />
      </Player>
      </div>
      <div className='col5 margin20'>
      <div className='col5'><h2 className='padding50 beforeAfterText'>After</h2></div>
      <Player
        playsInline
        src={require("./../assets/img/Pleo/Approvals/approvalsV2.mov")}
        className='mainImg playerBlack'
      >
        <ControlBar autoHide disableCompletely />
        <BigPlayButton position="center" />
      </Player>
      </div>
      </div>


      <div className="projectContainerWithNav">

      <div className="row justifyCenter">
      <div className="col5 ">

      <h1 ref={el => this.sectionRefs['purchase-orders'] = el}>Designing purchase orders</h1>
      <p>After launching automated invoice reviews, I led discovery for the next
      phase: pre-purchase controls. The goal was to understand how companies
      handle procurement approvals before invoices arrive.</p>
      </div>
      </div>
      <div className='row '><img src={require("./../assets/img/Pleo/Approvals/POs.png")} className="mainImgNoMargin contentShadowSmallRadius"/></div>

      </div>


      <div className='projectContainerWithNav'>

      <div className='row justifyCenter'>
      <div className="col5">
      <h2>Problem</h2>
      <p>
      Purchase orders bring control and certainty to a company's buying process.
      Our customers wanted approval process to happen before making purchases, not after invoices
      arrived. This would save time and eliminate delayed payments due to missing approvals.
      Additionally, POs are a good way to control cash flow and budgeting.
      </p>

      <h2>Discovery research</h2>
      <p>
      After analyzing existing feedback from Productboard, I conducted 6 discovery calls
      with Finance Managers to understand their workflows. I identified
      patterns in how companies handle pre-purchase approvals, mapped current
      processes, and scoped the MVP.

      Before rollout, I led 20 alpha tests with customers to validate the solution
      and iterate based on real usage.
      </p>
      <h2>Key insights</h2>
      <ul>
        <li>Finance teams used Excel to get pre-purchase approvals and had to apply the same approval workflow to invoices on Pleo.
        Having both workflows in one tool would be a big time-saver for them</li>
        <li>Pre-purchase approvals were essential for paying invoices on
        time</li>
        <li>Finance teams wanted a simple workflow: create purchase order →
        send to supplier → supplier sends invoice → match invoice to PO</li>
      </ul>
      <h2>Impact</h2>
      <p>The product is still in beta phase and customers are trying it out. We get ongoing feedback and improve the product to achieve full product-market fit.</p>

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


      <div className='projectContainerWithNav'>


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

export default withRouter(InvoiceApprovals);
