import React from 'react';
import '../Footer/style.css';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p className='footerText'>{this.props.footer}<a className='footerText footerLink' href={this.props.link}>{this.props.linkName}</a></p>
      </React.Fragment>
    );
  }
}

export default Footer;