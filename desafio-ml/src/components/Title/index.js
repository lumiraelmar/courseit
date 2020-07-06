import React from 'react'
import '../Title/style.css'

class Title extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default Title