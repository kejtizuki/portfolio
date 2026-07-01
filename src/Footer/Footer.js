import React from 'react';
import './footer.scss';

export default class Footer extends React.Component {

  render() {

    return(
      <footer className="footer">
        <div className="footerContact">
          <span className="footerName">Kasia Żukowska</span>
        </div>

        <div className="footerBottom">
          <span className="footerCredit">*design and coded with ♡</span>
          <div className="footerLinks">
            <a className="footerPill" href="mailto:kejtizuki@gmail.com">Email</a>
            <a
              className="footerPill"
              href="https://www.linkedin.com/in/k-zukowska/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    )
  }
}
