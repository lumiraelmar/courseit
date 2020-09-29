import React, { useEffect, useState} from 'react'
import Card from '../Card'
import { Link } from 'react-router-dom'
import './style.scss';

function Carousel(props) {
  const {search} = props
  const [data, setData] = useState([])
  const { site } = props

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    const getData = await fetch(`https://api.mercadolibre.com/sites/${site}/search?q=pokemon&limit=20`);
    const getJson = await getData.json();
    setData(getJson.results)
  }
  
  return(
    <div className='carouselWrapper'>
      {data.filter((item) => {
        return item.title
        .toLowerCase()
        .includes(search.toLowerCase())
      }).map((item, key) => {
        return(
          <Link to={`/items/${item.id}`}>
            <Card 
              title={item.title}
              img={item.thumbnail} 
              price={item.price}
              link={item.permalink}
              key={item.id ? item.id : key}
            />
          </Link>
        )
      })}
    </div>
  )
}

export default Carousel;