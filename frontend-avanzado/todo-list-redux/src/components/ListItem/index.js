import React from 'react';
import { connect } from 'react-redux';

class ListItem extends React.Component {
  render() {
    const { item } = this.props
    return (
      <>
        <li>{item}</li>
      </>
    );
  }
}

export default ListItem;