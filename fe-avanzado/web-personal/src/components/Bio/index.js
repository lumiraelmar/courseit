import React, { useContext } from 'react';
import AlgoContext from '../../contexts/AlgoContext';
import './style.scss';

function Bio() {
  const info = useContext(AlgoContext);
  const { bio } = info.data
  return (
    <>
      <p className='bio'>{bio}</p>
    </>
  );
}

export default Bio;