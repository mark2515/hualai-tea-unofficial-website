import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/background.webp';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1> HuaLai Tea </h1>
        <p> I Like Tea </p>

        <Link to="/products">
          <button> Buy Now </button>
        </Link>

      </div>
    </div>
  )
}

export default Home
