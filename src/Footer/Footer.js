import React from 'react';
import './footer.scss';

export default class Footer extends React.Component {

  render() {

    return(
      <div className="footer gridContainerRow">
        <div className='column2'><h1>Kasia Żukowska</h1></div>
        <div className='column2'>
          <div>kejtizuki@gmail.com</div>
          <a className='footerLink' href="https://www.linkedin.com/in/katarzyna-%C5%BCukowska-23398194/">Linkedin</a>
          <a className='footerLink' href="https://dribbble.com/kejtizuki/shots">Dribbble</a>
          <a className='footerLink' href="https://github.com/kejtizuki">Github</a>
        </div>
      </div>
    )
  }
}
