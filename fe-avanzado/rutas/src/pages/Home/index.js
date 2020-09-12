import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../../ML.json'
import './style.scss';

function Home() {
  return(
    <div className='homeWrapper'>
      {Data.map((dat, key) => {
        return (
          <Link to={`/main/${dat.site}`} key={key} className='unWrapper'>
            <img className='flag' src={dat.flag} />
            <p className='country'>{dat.name}</p>
          </Link>
        )
      })}
      
    </div>
  )
}

export default Home;