import React from 'react'
import './style.css'

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      like: 'No me gusta'
    }
  }

  handleClick() {
    if (this.state.like == 'Me gusta') {
      this.setState({
        like: 'No me gusta'
      })
    } else {
      this.setState({
        like: 'Me gusta'
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper">
          <p>{this.state.like}</p>
          <button onClick={() => this.handleClick()}>Darle Like</button>
          <img className="image" src={this.props.item.src}></img>
          <p className="itemName">{this.props.item.itemName}</p>
          <p className="price">${this.props.item.price}</p>
        </div>
      </React.Fragment>
    )
  }
}

export default Card