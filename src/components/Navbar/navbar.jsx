import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './navbar.module.css';
import { MDBIcon } from 'mdb-react-ui-kit';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 830) {
        setMenuOpen(false); 
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul ref={menuRef} className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>
          <a href='/about'><li>About Me</li></a>
          <a href='#skills'><li>Skills</li></a>
          <a href='#resume'><li>Experience</li></a>
          <a href='/contact'><li>Contact</li></a>
        </ul>
        {windowWidth <= 830 && (
          <div className={styles.menuIcon} onClick={toggleMenu}>
            <MDBIcon icon="bars" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
