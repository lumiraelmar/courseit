import React from 'react'
import './style.css'

class Title extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p className="titulo">{this.props.content}</p>
      </React.Fragment>
    )
  }
}

export default Title