import React from 'react';
import './Home.css';
import logo from '../image/booklogo.webp'; // Adjust the path based on the actual location
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="home-container">
      <header className="home-header">
        <img src={logo} alt="Logo" className="home-logo" />
        <h1>Online Sales Books</h1>
      </header>
      <main className="home-main">
        <div className="book-pictures">
          <div className="book-item">
            <img src="book7.jpg" alt="Book 1" className="book-image" />
            <div className="book-title">Lost Time</div>
          </div>
          <div className="book-item">
            <img src="a man of the ppl.jpg" alt="Book 2" className="book-image" />
            <div className="book-title">A man of the People</div>
          </div>
        </div>
        <section className="home-welcome">
          <p>Welcome to Online Sales Books! Your one-stop shop for all your book sales needs.</p>
        </section>
        <section className="home-more-books">
          <a href="/login" className="more-books-link">See more in Dashboard</a>
        </section>
        <section className="home-feedback">
          <form>
            <input type="text" placeholder="Name or Email" required />
            <textarea placeholder="Your message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <footer className="home-footer">
        <div className="footer-container">
          <a href="hassanmaabad44@gmail.com">Contact</a>

          <div className="footer2">
            <h3>Contact Us</h3><br />
            <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:hassanmaabad44@gmail.com">hassanmaabad44@gmail.com</a></p><br />
            <p><FontAwesomeIcon icon={faWhatsapp} /> <a href="https://wa.me/+255628999529">Chat on WhatsApp</a></p><br />
            <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+255628999529">+255 628 999 529</a></p><br />
          </div>
          <p>&copy; {currentYear} Online Sales Books. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
