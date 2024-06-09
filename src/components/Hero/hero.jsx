import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'; // Import Font Awesome icons
import styles from './hero.module.css';
import { getImageUrl } from '../../utilis';

const Hero = () => {
  const heroImageUrl = getImageUrl('Hero/hero-background.jpg');

  return (
    <div className={styles.heroContainer}>
      <div className="row py-5">
        <div className="col-lg-1 d-none d-lg-flex align-items-center">
          <div className="lc-block d-flex" style={{ writingMode: 'vertical-rl', transform: 'rotate(360deg)' }}>
            <a className="btn btn-link my-2 text-dark text-decoration-none" href="#" role="button"><i class="fa-brands fa-github"  style={{ fontSize: '32px' }}></i></a>
            <a className="btn btn-link my-4 text-dark text-decoration-none" href="#" role="button"><i class="fa-brands fa-linkedin-in"  style={{ fontSize: '32px' }}></i></a>
            <a className="btn btn-link my-2 text-dark text-decoration-none" href="#" role="button"><i class="fa-solid fa-envelope"  style={{ fontSize: '32px' }}></i></a>
          </div>
        </div>
        <div className="col-sm-6 d-flex d-lg-none flex-sm-column align-items-center justify-content-around mb-4 mb-sm-0">
          <div className="lc-block">
            <a className="btn btn-link text-dark text-decoration-none" href="#" role="button"><i class="fa-brands fa-github"  style={{ fontSize: '32px' }}></i></a>
          </div>
          <div className="lc-block">
            <a className="btn btn-link text-dark text-decoration-none" href="#" role="button"><i class="fa-brands fa-linkedin-in"  style={{ fontSize: '32px' }}></i></a>
          </div>
          <div className="lc-block">
            <a className="btn btn-link text-dark text-decoration-none" href="#" role="button"><i class="fa-solid fa-envelope"  style={{ fontSize: '32px' }}></i></a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="lc-block ratio ratio-1x1">
            <img
              style={{ objectFit: 'cover' }}
              className="img-fluid"
              src={getImageUrl('Hero/hero-bg.png')}
              alt="Photo by Atikh Bana"
            />
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1" >
          <div className={styles.content}>
          <div className="lc-block" >
            <div editable="rich">
            <h2 className={`rfs-25" ${styles.title}`} >Hi, I am Ahmed</h2>
            </div>
          </div>
          </div>
          <div className="lc-block">
            <div editable="rich">
              <p className={styles.text}>Bachelor of Computer Science - Software Engineering graduate from Multimedia University, Malaysia with
                a strong passion for software development. Skilled in various programming languages ranging from Front-end development to Back-end development Frameworks. Active Community service participant served as
                <b> Microsoft Learn Student Ambassador </b> and contributed to various community events.</p>
            </div>
          </div>
          <div className="lc-block">
            <a className={`btn btn-primary btn-lg ${styles.customButton}`} href="#" role="button">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
