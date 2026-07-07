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
      showBefore: false,
      showResultBefore: false
    };
    this.sectionRefs = {};
    this.resultVideoRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    // Play the "after" video only while it's scrolled into view
    const video = this.resultVideoRef.current;
    if (video && 'IntersectionObserver' in window) {
      this.videoObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          } else {
            video.pause();
          }
        },
        { threshold: 0.35 }
      );
      this.videoObserver.observe(video);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.videoObserver) {
      this.videoObserver.disconnect();
    }
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY + 100;

    // Check if we've scrolled past the first header
    const firstSection = this.sectionRefs['invoices-list'];
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
    const { activeSection, isVisible, showBefore, showResultBefore } = this.state;

    const sections = [
      {
        id: 'invoices-list',
        label: 'Invoices list',
        children: []
      },
      {
        id: 'invoices-details',
        label: 'Details view',
        children: [
          { id: 'problem', label: 'Problem' },
          { id: 'option-a', label: 'Option A' },
          { id: 'option-b', label: 'Option B' }
        ]
      }
    ];

    return(
      <div>

        <div className='projectContainerWithNav'>

        <div className="heroBand">
        <div className='row justifyCenter'>
          <div className='col5'>
            <h1 className="sectionMainTitle" ref={el => this.sectionRefs['invoices-list'] = el}>Invoices list</h1>
          </div>
        </div>

        {/* Before/After Toggle - Above Result browser */}
        <div className="beforeAfterToggleWrapper">
          <div className="beforeAfterToggle">
            <button
              className={classNames({ active: showResultBefore })}
              onClick={() => this.setState({ showResultBefore: true })}
            >
              Before
            </button>
            <button
              className={classNames({ active: !showResultBefore })}
              onClick={() => this.setState({ showResultBefore: false })}
            >
              After
            </button>
          </div>
        </div>

        <div className="browserFrame mainImg contentShadowSmallRadius">
          <div className="browserBar">
            <div className="browserLeft">
              <div className="browserDots">
                <span className="browserDot red"></span>
                <span className="browserDot yellow"></span>
                <span className="browserDot green"></span>
              </div>
              <svg className="browserIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <line x1="9" y1="5" x2="9" y2="19" />
              </svg>
              <svg className="browserIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="14 6 8 12 14 18" />
              </svg>
              <svg className="browserIcon dim" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="10 6 16 12 10 18" />
              </svg>
            </div>

            <svg className="browserIcon shield" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l7 3v5c0 4-3 7-7 8-4-1-7-4-7-8V6l7-3z" />
            </svg>

            <div className="browserAddress">
              <svg className="lockIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              <span>pleo.io/invoices</span>
            </div>

            <svg className="browserIcon refresh" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 11.5a8 8 0 1 0-1.6 5.5" />
              <polyline points="20 4 20 11.5 12.5 11.5" />
            </svg>

            <div className="browserRight">
              <svg className="browserIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12" />
                <polyline points="8 7 12 3 16 7" />
                <path d="M6 12v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7" />
              </svg>
              <svg className="browserIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <svg className="browserIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="7" width="13" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
              </svg>
            </div>
          </div>
          <div className="browserMedia">
            {/* After - video (in flow, sets frame height) */}
            <video
              ref={this.resultVideoRef}
              className="browserVideo"
              loop
              muted
              playsInline
            >
              <source
                src={require("./../assets/img/Pleo/InvoicesRedesign/invoicesListRedesigned.mp4")}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* Before - image overlay, cross-fades on toggle */}
            <img
              src={require("./../assets/img/Pleo/InvoicesRedesign/listBefore.png")}
              className={classNames('browserBefore', { active: showResultBefore })}
              alt="Before"
            />
          </div>
        </div>
        </div>

        {/* Floating Table of Contents */}
        {isVisible && (
          <nav className="floating-toc floating-toc--grouped">
            <ul>
              {sections.map(section => (
                <li key={section.id} className="toc-group">
                  <a
                    className={classNames('toc-main', { active: activeSection === section.id })}
                    onClick={() => this.scrollToSection(section.id)}
                  >
                    {section.label}
                  </a>
                  {section.children && section.children.length > 0 && (
                    <ul className="toc-sub">
                      {section.children.map(child => (
                        <li key={child.id}>
                          <a
                            className={activeSection === child.id ? 'active' : ''}
                            onClick={() => this.scrollToSection(child.id)}
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className='row justifyCenter'>
          <div className='col5'>
            <h1 className="sectionMainTitle" ref={el => this.sectionRefs['invoices-details'] = el}>Details view</h1>
          </div>
        </div>

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

          <div className='row justifyCenter'>
            <div className='col5'>
              <h2 ref={el => this.sectionRefs['option-b'] = el}>Option B: Fixed footer for review status</h2>
              <p>This version has a similar structure to Option A, however the review status is now placed in a fixed footer instead of the header. This way invoice status is clearly separated from the review status, making it easier for users to understand which element to focus on.</p>
              <p>The footer pattern creates a clear visual hierarchy: header for invoice details, footer for action and review information.</p>
            </div>
          </div>

          {/* Option A and B images side by side - full screen width */}
          <div className='row' style={{ gap: '40px', width: '100vw', marginLeft: 'calc(-50vw + 50%)', paddingLeft: '80px', paddingRight: '80px', boxSizing: 'border-box' }}>
            <div className='col6'>
              <p>Option A</p>
              <img src={require("./../assets/img/Pleo/Approvals/fixedHeader.gif")} className="mainImgNoMargin contentShadowSmallRadius"/>
            </div>
            <div className='col6'>
              <p>Option B</p>
              <img src={require("./../assets/img/Pleo/Approvals/headeroption2.gif")} className="mainImgNoMargin contentShadowSmallRadius"/>
            </div>
          </div>



        </div>
      </div>
    )
  }
}

export default withRouter(InvoiceRedesign);
