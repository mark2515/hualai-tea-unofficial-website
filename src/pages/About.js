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
        Tea, an elixir of tranquility and a catalyst for social interaction, transcends mere beverage status.
        Originating from ancient China, its discovery is steeped in legend and cultural significance.
        Each variety, from the robust, deep flavors of black tea to the delicate, floral notes of white tea, tells a story.
        These stories are of regions, climates, and traditions that have shaped their unique characteristics.
        When steeped in hot water, these dried leaves unfurl.
        This unfurling releases a symphony of aromas and flavors.
        These flavors and aromas invigorate the senses.
        Sipping tea is not just a mundane act; it's a moment of meditation, a pause in the day to reflect and rejuvenate.
        Around the world, tea rituals vary, yet share a common thread of hospitality and companionship, making tea not just a drink, but a globally shared experience.
        </p>
      </div>
    </div>
  )
}

export default About
