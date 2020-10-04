import React from 'react';
import './style.scss'

function Footer() {
    return (
      <React.Fragment>
        <hr className='line' />
        <p className='footer'>Made with ♥ by <a href='https://github.com/lumiraelmar' className='footerLink'>Lu Miraelmar</a></p>
      </React.Fragment>
  )
}

export default Footer;