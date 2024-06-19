import React from 'react';
import { getImageUrl } from '../../utilis';
import './projects.css'

const Projects = () => {

  const shurfanProject = getImageUrl('Projects/shurfan-project.png')
  const alshurfanProject = getImageUrl('Projects/AlShurfan-project.png')
  const gameProject = getImageUrl('Projects/Game-project.png')
  const cpuProject = getImageUrl('Projects/CPU-project.png')
  const hospitalProject = getImageUrl('Projects/Hospital-project.png')
  const healthProject = getImageUrl('Projects/MHealth-project.png')

  return (
    <>
      <section className="py-3 py-md-5" id='projects'>
        <div className="container">
        <div className="row justify-content-md-center">
  <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
    <h2 className="mb-4 display-5 text-center" style={{ color: 'black', fontWeight: '600' }}>Projects</h2>
    <div style={{
      width: '50%',
      margin: 'auto',
      borderBottom: '4px solid black',
      marginBottom: '5rem'
    }}></div>
  </div>
</div>
        </div>

        <div className="container overflow-hidden">
          <div className="row gy-4 gy-xxl-5">
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <article className="d-flex">
                <div className="card border border-dark" style={{ "--bs-card-border-radius": "0", "--bs-card-inner-border-radius": "0" }}>
                  <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                    <a href="https://shurfan.com/" target='blank'>
                      <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={shurfanProject} alt="Spokes" />
                    </a>
                    <figcaption>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInLeft" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                      <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">View Project</h4>
                    </figcaption>
                  </figure>
                  <div className="card-body border-0 bg-white p-4">
                    <div className="entry-header mb-3">
                     
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none" href="https://shurfan.com" target='_blank'>Shurfan Perfumes Website</a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-secondary m-0 p-0 text-black" style={{ textAlign: 'justify' }}>
                      Developed and Designed Shurfan Perfumes Website. The frameworks used were React.JS & Node.js. Also, Integrated DNS Management system to host website content and email services.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <article className="d-flex">
                <div className="card border border-dark" style={{ "--bs-card-border-radius": "0", "--bs-card-inner-border-radius": "0" }}>
                  <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                    <a href="https://alshurfan.com/" target='blank'>
                      <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={alshurfanProject} alt="Chain" />
                    </a>
                    <figcaption>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInDown" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                      <h4 className="h6 text-white bsb-hover-fadeInUp mt-2">View Project</h4>
                    </figcaption>
                  </figure>
                  <div className="card-body border-0 bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none" href="https://alshurfan.com/" target='blank'>AlShurfan Advanced Real Estate</a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-secondary m-0 p-0 text-black" style={{ textAlign: 'justify' }}>
                     Developed and Designed website for AlShurfan Advanced Real Estate. The project was aiming to give brand identity and provide insights about services and projects provided by the organisation
                    </p>
                  </div>
                </div>
              </article>
            </div>

            
            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <article className="d-flex">
                <div className="card border border-dark" style={{ "--bs-card-border-radius": "0", "--bs-card-inner-border-radius": "0" }}>
                  <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                    <a href="https://github.com/AhmedBinhamim/Mars-Rover-Game-C-" target='_blank'>
                      <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={gameProject} alt="Chain" />
                    </a>
                    <figcaption>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInDown" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                      <h4 className="h6 text-white bsb-hover-fadeInUp mt-2">View Project</h4>
                    </figcaption>
                  </figure>
                  <div className="card-body border-0 bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none" href="https://github.com/AhmedBinhamim/Mars-Rover-Game-C-" target='_blank'>Mars Rover C++ Game</a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-secondary m-0 p-0 text-black" style={{ textAlign: 'justify' }}>
                    The game Mars Rover typically involves the player controlling a rover that has just landed in mars. The mission of the rover is to collect all the gold on mars as was specified by the NASA headquarters on Earth, for research purposes.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <article className="d-flex">
                <div className="card border border-dark" style={{ "--bs-card-border-radius": "0", "--bs-card-inner-border-radius": "0" }}>
                  <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                    <a href="https://github.com/AhmedBinhamim/Simulation-of-CPU-Scheduling-Algorithms-Using-Java" target='_blank'>
                      <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={cpuProject} alt="Chain" />
                    </a>
                    <figcaption>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInDown" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                      <h4 className="h6 text-white bsb-hover-fadeInUp mt-2">View Project</h4>
                    </figcaption>
                  </figure>
                  <div className="card-body border-0 bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none" href="https://github.com/AhmedBinhamim/Simulation-of-CPU-Scheduling-Algorithms-Using-Java" target='_blank'>CPU Schedulling Algorithms</a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-secondary m-0 p-0 text-black" style={{ textAlign: 'justify' }}>
                    The process scheduling algorithms are used to maximize CPU utilization by increasing throughput. This project involves three process scheduler to come up with a simulator. These types are Non-Preemptive SJF, Preemptive SJF, and Round Robin.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <article className="d-flex">
                <div className="card border border-dark" style={{ "--bs-card-border-radius": "0", "--bs-card-inner-border-radius": "0" }}>
                  <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                    <a href="https://github.com/AhmedBinhamim/Hospital-Kiosk-Simulator" target='_blank'>
                      <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={hospitalProject} alt="Chain" />
                    </a>
                    <figcaption>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInDown" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                      <h4 className="h6 text-white bsb-hover-fadeInUp mt-2">View Project</h4>
                    </figcaption>
                  </figure>
                  <div className="card-body border-0 bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none" href="https://github.com/AhmedBinhamim/Hospital-Kiosk-Simulator" target='_blank'>Hospital Kiosk Simulator</a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-secondary m-0 p-0 text-black" style={{ textAlign: 'justify' }}>
                    The program displays a welcome message to the user and promotes him to enter the number of patients to simulate in the system then promotes the user to input the type of random number generator from a list of two choices displayed which are linear congruential generator and random variate generator for uniform distribution.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-12 col-md-6 col-lg-4 d-flex">
              <article className="d-flex">
                <div className="card border border-dark" style={{ "--bs-card-border-radius": "0", "--bs-card-inner-border-radius": "0" }}>
                  <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                    <a href="https://github.com/AhmedBinhamim/M-Health-Research" target='_blank'>
                      <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={healthProject} alt="Chain" />
                    </a>
                    <figcaption>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-eye text-white bsb-hover-fadeInDown" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                      <h4 className="h6 text-white bsb-hover-fadeInUp mt-2">View Project</h4>
                    </figcaption>
                  </figure>
                  <div className="card-body border-0 bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark link-opacity-100 link-opacity-75-hover text-decoration-none" href="https://github.com/AhmedBinhamim/M-Health-Research" target='_blank'>Mobile Health Research</a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-secondary m-0 p-0 text-black" style={{ textAlign: 'justify' }}>
                    Despite the rapid development and use of mHealth applications, users actually lose interest after a certain period of time. This is a major problem that must be resolved as understanding how to support and meet user requirements is the key factor. This project , backed-up with data, provides a solution for this problem
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
