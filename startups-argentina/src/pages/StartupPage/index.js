import React from 'react';
import './style.css'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

class StartupPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: '',
      name: '',
      desc: ''
    };
  }


  componentDidMount() {
    const startups = localStorage.getItem("startups");
    if(startups) {
      const parsedStartups = JSON.parse(startups);
      const filtered = parsedStartups.filter((startup) => {
        return startup.name.toLowerCase() == this.props.match.params.startupID
      })
      this.setState({
        name: filtered[0].name,
        img: filtered[0].logo,
        desc: filtered[0].desc
      });
    }
  }
  /*componentDidMount() {
    const filtered = startups.filter((startup) => {
      return startup.id == this.props.match.params.startupID;
    });
    this.setState({
      name: filtered[0].name,
      img: filtered[0].logo,
      desc: filtered[0].desc
    });
  }*/

  render() {
    const { img, name, desc } = this.state
    console.log(this.state.desc)
    return (
      <React.Fragment>
        <Navbar />
        <div className='productWrapper'>
          <div className='someWrapper'>
            <img className='productImg' src={img}></img>
            <p className='productName'>{name}</p>
          </div>
          <p className='productDescription'>{desc}</p>
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default StartupPage;