import React, {useContext} from 'react';
import Item from '../Item';
import json from '../../data/data.json';
import UserContext from '../../contexts/UserContext'

function List() {
  const Data = useContext(UserContext);
  const {input} = Data

  return (
    <>
      {json.filter((item) => {
        return item.name
        .toLowerCase()
        .includes(input.toLowerCase())
      }).map((item, key) => {
        return (
          <Item 
          name={item.name} 
          desc={item.desc}
          img={item.img}
          key={key}/>
        )
      })}
    </>
  );
}

export default List;