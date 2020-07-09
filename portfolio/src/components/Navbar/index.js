import React from 'react';
import '../Navbar/style.css'

class Navbar extends React.Component {
  render() {
    const { url, name } = this.props
    return (
      <div className='navbarWrapper'>
        <a className='navbarLink' href={url}>{name}</a>
      </div>
    )
  }
}

export default Navbar