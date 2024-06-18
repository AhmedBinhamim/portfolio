import React from 'react'
import Navbar from '../Navbar/navbar';
import Hero from '../Hero/hero';
import Skills from '../Skills/skills';
import Experience from '../Experience/experience';
import Projects from '../Projects/projects';


const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Experience/>
    <Skills/>
    <Projects/>
    </>
  )
}

export default Homepage;
