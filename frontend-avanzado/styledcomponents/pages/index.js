import Card from '../components/Card';
import TotalPrice from '../components/TotalPrice';
import { useState } from 'react';
import styled from 'styled-components';

const WrapperStyles = styled.div`
display: flex;  
flex-wrap: wrap;
`

export default function Home() {
  const [totalPrice, setTotalPrice] = useState(0)

  const list = [
    {
      title: "Curso de Frontend",
      color: 'red',
      tags: ["Frontend", "Test"],
      price: 149
    },
    {
      title: "Curso de Backend",
      color: "#5ff1b3",
      tags: ["Backend", "Infra"],
      price: 12
    },
    {
      title: "Curso de Pasteleria",
      color: "#5cc1b3",
      tags: ["Chocolate", "Masa"],
      price: 1299
    },
  ]

  function handleCallback(price) {
    setTotalPrice(totalPrice + price)
  }

  return (
    <>
      <WrapperStyles>
        {list.map((curso, key) => {
          return (
            <Card 
            title={curso.title} 
            color={curso.color} 
            tags={curso.tags} 
            price={curso.price} 
            key={key}
            handleCallback={handleCallback}/>
          )
        })}
      </WrapperStyles>
      <TotalPrice totalPrice={totalPrice}/>
    </>
  )
}
