import React from 'react';
import '../Info/style.css'

class Info extends React.Component {
  render() {
    const { avatar, bio } = this.props
    return (
      <div className='infoWrapper'>
        <img className='img' src={avatar}></img>
        <p className='bio'>{bio}</p>
      </div>
    )
  }
}

export default Info