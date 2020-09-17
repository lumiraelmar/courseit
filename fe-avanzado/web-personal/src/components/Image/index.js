import React, { useContext } from 'react';
import AlgoContext from '../../contexts/AlgoContext';
import './style.scss';

function Image() {
  const info = useContext(AlgoContext);
  const { avatar_url } = info.data
  return (
    <>
      <img src={avatar_url} className='img'/>
    </>
  );
}

export default Image;