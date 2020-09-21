import React, { useEffect, useState } from 'react';
import Item from '../Item';

function List(props) {
  const {searchParam} = props
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const getData = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=pokemon&limit=20');
    const getJson = await getData.json();
    setData(getJson.results)
  }

  return (
    <div>
      {data.filter((item) => {
        return item.title
        .toLowerCase()
        .includes(searchParam.toLowerCase())
      }).map((item, key) => {
        return(
          <Item 
            title={item.title}
            img={item.thumbnail} 
            key={item.id ? item.id : key}
          />
        )
      })}
    </div>
  );
}

export default List;
