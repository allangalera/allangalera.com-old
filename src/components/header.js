import React, { useState } from 'react';
import jump from 'jump.js';

import './header.scss';

import Icon from '../components/Icon';

const Header = () => {
  const [mobileMenuisOpen, setMobileMenuisOpen] = useState(false);

  const jumpTo = element => {
    jump(element, {
      duration: 180,
      offset: -80,
    });
  };

  const menu = (
    <React.Fragment>
      <a
        className="menu-link"
        href="#about-me"
        onClick={() => {
          setMobileMenuisOpen(false);
          jumpTo('#about-me');
        }}
      >
        ABOUT ME
      </a>
      <a
        className="menu-link"
        href="#skills"
        onClick={() => {
          setMobileMenuisOpen(false);
          jumpTo('#skills');
        }}
      >
        SKILLS
      </a>
      <a
        className="menu-link"
        href="#experience"
        onClick={() => {
          setMobileMenuisOpen(false);
          jumpTo('#experience');
        }}
      >
        EXPERIENCE
      </a>
      <a
        className="menu-link"
        href="#contact-me"
        onClick={() => {
          setMobileMenuisOpen(false);
          jumpTo('#contact-me');
        }}
      >
        CONTACT ME
      </a>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <header className="header">
        <div className="title">
          <a href="/" style={{ color: `white`, textDecoration: `none` }}>
            ALLAN
            <br />
            GALERA
          </a>
        </div>
        <div className="desktop-menu">{menu}</div>
        <div className="desktop-social-links">
          <a href="https://www.linkedin.com/in/allangalera/" target="_blank" rel="noopener noreferrer">
            <Icon icon="linkedin" />
          </a>
          <a href="https://github.com/allangalera" target="_blank" rel="noopener noreferrer">
            <Icon icon="github" />
          </a>
        </div>
        <div
          className="menu-btn"
          onClick={() => {
            setMobileMenuisOpen(!mobileMenuisOpen);
          }}
        >
          {mobileMenuisOpen ? <Icon icon="times" /> : <Icon icon="bars" />}
        </div>
      </header>
      <div className={`mobile-menu${mobileMenuisOpen ? ' open' : ''}`}>{menu}</div>
    </React.Fragment>
  );
};

export default Header;
