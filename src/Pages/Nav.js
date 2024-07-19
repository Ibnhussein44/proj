import React, { useEffect } from 'react';
import './Style.css';

function Nav() {
  useEffect(() => {
    const navSlide = () => {
      const burger = document.querySelector('.burger');
      const nav = document.querySelector('.nav-links');
      const navLinks = document.querySelectorAll('.nav-links li');

      burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = '';
          } else {
            link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
        });

        burger.classList.toggle('toggle');
      });
    };

    navSlide();
  }, []);

  return (
    <nav>
      <div className="nav"></div>
      <ul className="nav-links">
        <li><a href="#home">home</a></li>
        <li><a href="aboutus.html">aboutus</a></li>
        <li><a href="#cart">cart</a></li>
        <li><a href="projectsignin.html">signin</a></li>
      </ul>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Nav;
