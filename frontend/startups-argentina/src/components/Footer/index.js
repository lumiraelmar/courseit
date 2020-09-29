import React from 'react';
import '../Footer/style.css';

class Footer extends React.Component {
  render() {
    const { link } = this.props
    return (
      <React.Fragment>
        <p className='footer'>Made with ♥ by <a href={link}>Lu</a></p>
      </React.Fragment>
    )
  }
}

export default Footer;