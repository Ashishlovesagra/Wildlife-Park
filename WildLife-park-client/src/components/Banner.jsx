/* eslint-disable no-unused-vars */
import React from 'react';
import { assets } from '../assets/assets';
import './Style.css';


function Banner() {
  return (
    <div className="banner-box">
        <img className='banner-img' src={assets.Banner} alt="" />
    </div>
  )
}

export default Banner