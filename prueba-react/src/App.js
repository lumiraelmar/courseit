
import React from 'react';

import Carousel from './components/Carousel'

class App extends React.Component {
  render() {
    const items = [
      {
        src: "https://images.unsplash.com/photo-1571415060716-baff5f717c37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
        price: '40.000', 
        itemName: "Televisor"
      },
      {
        src: "https://i.pinimg.com/originals/1f/c3/b1/1fc3b1976a3e94e81627369776aa4e50.jpg",
        price: '0.1',
        itemName: "Dignidad"
      },
      {
        src: "https://images.unsplash.com/photo-1458060390477-1b8bc1cfe017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80", 
        price: '3.000', 
        itemName: "Cafetera"
      },
      {
        src: "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80", 
        price: '60.000', 
        itemName: "Aspiradora"
      },
      {
        src: "https://images.unsplash.com/photo-1534119428213-bd2626145164?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80", 
        price: '50', 
        itemName: "Caramelo"
      }
    ]

    const items2 = [
      {
        src: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
        price: '40.000', 
        itemName: "Celular"
      },
      {
        src: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        price: '0',
        itemName: "Gatito"
      },
      {
        src: "https://images.unsplash.com/photo-1559719740-f4d59cf117cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80", 
        price: '3.000', 
        itemName: "Ventilador"
      },
      {
        src: "https://images.unsplash.com/photo-1535488407783-1c7c7152e48a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", 
        price: '15.000', 
        itemName: "Medias"
      },
      {
        src: "https://images.unsplash.com/photo-1542729779-11d8fe8e25f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80", 
        price: '30.000', 
        itemName: "Frappuccino"
      }
    ]

    return (
      <div>
        <Carousel titulo="Historial" items={items}/>
        <Carousel titulo="Basado en tus ultimas visitas" items={items2}/>
      </div>
    );
  }
}

export default App;
