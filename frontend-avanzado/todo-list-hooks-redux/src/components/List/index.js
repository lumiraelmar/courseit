import React from 'react';
import ListItem from '../ListItem'
import { useSelector } from 'react-redux';

function List() {
  const itemList = useSelector((state) => state.itemList)

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

export default List;