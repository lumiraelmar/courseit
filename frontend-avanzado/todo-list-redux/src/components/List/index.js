import React from 'react';
import ListItem from '../ListItem'
import { connect } from 'react-redux';

class List extends React.Component {

  render() {
    const { itemList } = this.props
    return (
      <ul>
        {itemList.map((item, key) => {
          return(
            <ListItem item={item} key={key}/>
          )
        })}
      </ul>
    );
  }
}

function mapStateToProp(state) {
  return {
    itemList: state.itemList,
    inputValue: ''
  }
}

export default connect(mapStateToProp)(List);