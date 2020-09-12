import React, {useState} from 'react'
import Navbar from '../../components/Navbar'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import './style.scss';

function Main(props) {
  const [search, setSearch] = useState('')
  const { site } = props.match.params

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

export default Main;