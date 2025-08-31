'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/AryanSharma_Resume.pdf';
    link.download = 'AryanSharma_Resume.pdf';
    link.click();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY > 50) {
        header?.classList.add('scroll-header');
      } else {
        header?.classList.remove('scroll-header');
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">AS</p>
        <span>.</span>
      </div>
      <div className={`nav-menu ${isMenuOpen ? 'responsive' : ''}`} id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active-link' : ''}`}>Home</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active-link' : ''}`}>About</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active-link' : ''}`}>Projects</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#skill" className={`nav-link ${activeSection === 'skill' ? 'active-link' : ''}`}>Skill</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#education" className={`nav-link ${activeSection === 'education' ? 'active-link' : ''}`}>Education</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active-link' : ''}`}>Experience</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#certifications" className={`nav-link ${activeSection === 'certifications' ? 'active-link' : ''}`}>Certifications</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#extra-curricular" className={`nav-link ${activeSection === 'extra-curricular' ? 'active-link' : ''}`}>Extra-curricular</a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active-link' : ''}`}>Contact</a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
      <div className="nav-button">
        <button className="btn" onClick={downloadCV}>
          Download CV <i className="uil uil-file-alt"></i>
        </button>
      </div>
      
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={toggleMenu}></i>
      </div>
    </nav>
  );
}