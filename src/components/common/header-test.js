import React from 'react';
import '../../styles/styles.css';
import { Link } from 'react-router';


const HeaderTest = React.createClass({
  render() {
    return (
      <div id='test'>
        <div className='home-center'>
          <h1>OffTheBoat</h1>
          <h2 id='homepage-content'>Your pathway to fulfilment </h2>
          <Link to='checklist'><button type ="button" className='home-button'>Enter Here</button></Link>
        </div>
      </div>
    )
  }
})

export default HeaderTest;