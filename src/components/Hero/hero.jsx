import React from 'react';
import styles from './hero.module.css';
import { getImageUrl } from '../../utilis'; // Assuming this imports the getImageUrl function correctly

const Hero = () => {
  // Assuming getImageUrl returns the local image URL
  const localImageUrl = getImageUrl('Hero/hero-bg.png'); // Use your getImageUrl function to get the local image URL
  
  return (
    <div 
      className="p-5 text-center bg-image rounded-3" 
      style={{
        backgroundImage: `url(${localImageUrl})`, // Set local image URL dynamically
        height: '600px'
      }}
    >
      <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Heading</h1>
            <h4 className="mb-3">Subheading</h4>
            <a data-mdb-ripple-init className="btn btn-outline-light btn-lg" href="#!" role="button">
              Call to action
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
