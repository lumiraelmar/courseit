import React from 'react';
import '../Hero/style.scss'

class Hero extends React.Component {
  render() {
    const { subtitle, title, season, description } = this.props.infoSerie
    return (
      <div className='heroImg'>
        <p className='heroSubtitle'>{subtitle}</p>
        <h1 className='heroTitle'>{title}</h1>
        <a className='heroButton' href=''>Reproducir</a>
        <a className='heroButton' href=''>+ mi lista</a>
        <p className='heroSeason'>{season}</p>
        <p className='heroDescription'>{description}</p>
      </div>
    )
  }
}

export default Hero;