import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useInView } from 'react-intersection-observer';
import styles from './experience.module.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref} 
      className={`${styles.section} ${styles['gray-bg']} ${inView ? styles.animate : ''}`} 
      id="resume"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className={styles['section-title']}>
              <h2>Experience</h2>
              <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 m-15px-tb">
            <div className={styles['resume-box']}>
              <ul>
                <li>
                  <div className={styles.icon}>
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <span className={styles.time}>Part-Time</span>
                  <h5>Hashcode Studio</h5>
                  <p>
                    I played a pivotal role in implementing full back-end development for Leaderboard Module and Player
                    Module for a game that was developed for iCandy (One of the largest game developers). The modules were
                    fully developed and submitted to the client.
                  </p>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <span className={styles.time}>Freelancer</span>
                  <h5>Shurfan Perfumes Website</h5>
                  <p>
                    Designed and developed a responsive and visually appealing website for Shurfan Modern Factory,
                    incorporating modern technologies such as React.js and Node.js.
                  </p>
                </li>
                <li>
                  <div className={styles.icon}>
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <span className={styles.time}>Freelancer</span>
                  <h5>Al Shurfan Advanced Real Estate</h5>
                  <p>Developed a dynamic website for Al Shurfan Advanced Real Estate using React.js, with integrated DNS management for seamless domain connectivity.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
