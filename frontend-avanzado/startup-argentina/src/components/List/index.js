import React, { useContext } from 'react';
import Item from '../Item';
import { useLocalStorage } from '../../hooks/localStorage'
import UserContext from '../../contexts/UserContext'
import { Link } from 'react-router-dom'

function List() {
  const Data = useContext(UserContext);
  const {input} = Data
  const [startups] = useLocalStorage();
   
  return (
    <>
      {startups.filter((item) => {
        return item.name
        .toLowerCase()
        .includes(input.toLowerCase())
      }).map((item, key) => {
        return (
           <Link to={`startup/${item.name}`}>
            <Item 
            name={item.name} 
            desc={item.desc}
            img={item.logo}
            key={key}/>
           </Link>
        )
      })}
    </>
  );
}

export default List;