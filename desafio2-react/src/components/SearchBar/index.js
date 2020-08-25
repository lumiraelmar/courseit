import React from 'react';
import '../SearchBar/style.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <React.Fragment>
        <input onChange={(e) => this.handleChange(e)} className='headerInput' placeholder={this.props.placeholder} type='text'></input>
        {/*<p>{this.state.inputValue}</p>*/}
      </React.Fragment>
    );
  }
}

export default SearchBar;
