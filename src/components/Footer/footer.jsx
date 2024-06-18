import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="mailto:ahmedbinhamim@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/ahmedbinhamim/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/AhmedBinhamim" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {currentYear} Copyright reserved for 
        <a className="text-white" href="/"> Ahmed Hassan Binhamim</a>
      </div>
    </footer>
  );
}

export default Footer;
