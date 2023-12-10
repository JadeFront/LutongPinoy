import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass }from '@fortawesome/free-solid-svg-icons'


const Home = () => {
    
  return (
    <div className='home-container' id='home'>
          <h1 className='home-title'>Lutong Pinoy</h1>

        <div className='search-container'>
            <input className='searchbar' type='seach' placeholder='Search Rescipe...'/>
            <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} size="2xl" style={{color: "#815B5B",}} />      
        </div>
    </div>
  )
}

export default Home