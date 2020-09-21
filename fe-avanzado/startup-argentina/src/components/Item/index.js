import React from 'react';

function Item(props) {
  const { name, desc, img } = props
  return (
    <>
      <img src={img}/>
      <h3>{name}</h3>
      <p>{desc}</p>
    </>
  );
}

export default Item;