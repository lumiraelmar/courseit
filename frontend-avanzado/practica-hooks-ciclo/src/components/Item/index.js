import React from 'react';

function Item(props) {
  const { img, title } = props
  return (
    <div>
      <img src={img} />
      <h2>{title}</h2>
    </div>
  );
}

export default Item;
