import React from 'react'
import AboutTea from '../assets/aboutTea.webp';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className="aboutTop" style={{backgroundImage: `url(${AboutTea})`}}></div>
      <div className="aboutBottom">
        <h1> ABOUT US </h1>
        <p>
        Hunan Hualai Biological technology Co., Ltd. founded in September 2007, 
        and headquartered in Anhua County Hunan Province which is a collection of the main dark tea producing area, 
        it is a modern high-tech enterprise integrating tea planting, processing, sales, scientific research, health care, cultural tourism and education promotion. 
        Since its establishment, Hunan Hualai has continuously integrated resources, 
        actively explored the market, innovated the management and marketing mode of dark tea industry under the scientific development concept of "developing the dark tea industry, 
        casting national brands, and building the 'Hualaijian' brand into a large-scale and industrialized industry leading brand", and has now developed into a leading enterprise in the Anhua dark tea industry.
        </p>
      </div>
    </div>
  )
}

export default About
