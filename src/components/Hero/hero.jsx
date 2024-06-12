import React from 'react';
import styles from './hero.module.css';
import heroVideo from './heroVideo.mp4'; 
import heroImage from './hero-bg.png'; 
import maskImage from './hero-bg.png';

const Hero = () => {
  return (
    <section className={`bsb-hero-2 px-3 ${styles.heroSection}`}>
      <video className={styles.videoBackground} autoPlay loop muted>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`container overflow-hidden ${styles.heroContentContainer}`}>
        <div className="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
          <div className="col-12 col-lg-6 order-1 order-lg-0">
            <h2 className={`display-3 fw-bold mb-3 ${styles.heroHeading}`}>Hi, Am Ahmed</h2>
            <p className={`mb-5 ${styles.heroContent}`}>
              Bachelor of Computer Science - Software Engineering graduate from Multimedia University, Malaysia with
              a strong passion for software development. Skilled in various programming languages ranging from Front-end development to Back-end development Frameworks. Active Community service participant served as
              Microsoft Learn Student Ambassador and contributed to various community events.
            </p>
            <div className="d-grid gap-2 d-sm-flex">
              <button type="button" className={`btn bsb-btn-xl rounded-pill ${styles.customPrimaryButton}`}>Contact</button>
              <button type="button" className={`btn bsb-btn-xl rounded-pill ${styles.customSecondaryButton}`}>View Experience</button>
            </div>
          </div>
          <div className="col-12 col-lg-5 text-center">
            <img 
              className="img-fluid" 
              loading="lazy" 
              src={heroImage} 
              alt="Art of Design" 
              style={{ 
                WebkitMaskImage: `url(${maskImage})`, 
                maskImage: `url(${maskImage})` 
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
