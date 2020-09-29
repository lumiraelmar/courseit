import React, { useState } from 'react';
import {useParams} from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import './style.scss';

function FunctionalMain() {
  const [search, setSearch] = useState('')
  const {site} = useParams()

  function handleSearch(search) {
    setSearch(search)
  }
  return(
    <div className='wrapper'>
      <Navbar handleCallback={handleSearch}/>
      <Carousel search={search} site={site}/>
      <Footer />
    </div>
  )
}

export default FunctionalMain