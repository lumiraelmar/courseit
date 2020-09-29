import React, { useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import Card from '../../components/Card'

function Product() {
  const [item, setItem] = useState([])
  const {id} = useParams()

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    
    const getData = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const getJson = await getData.json();
    setItem(getJson)
  }

  return (
    <Card 
    title={item.title}
    img={item.thumbnail} 
    price={item.price}
    link={item.permalink}/>
  )
}

export default Product;