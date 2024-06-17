import React from 'react'
import Navbar from '../Navbar/navbar';
import Hero from '../Hero/hero';
import Skills from '../Skills/skills';
import Experience from '../Experience/experience';
import Awards from '../Awards/awards'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Experience/>
    <Awards/>
    </>
  )
}

export default Homepage;
