import React from 'react';

function Image(props) {
  const { url } = props
  return (
    <>
      <img src={url}/>
    </>
  );
}

export default Image;