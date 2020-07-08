import React from 'react';
import '../Navbar/style.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className='navbarWrapper'>
        <a className='navbarLink' href={this.props.url}>{this.props.name}</a>
      </div>
    )
  }
}

export default Navbar