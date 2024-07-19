import React, { useContext, useEffect } from 'react';
import './Style.css';
import './Purchase.css';
import { Link } from 'react-router-dom';
import logo from '../image/booklogo.webp';
import { CartContext } from '../Pages/CartContext'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Dashboard = () => {
  const { addToCart, cartItems, updateQuantity, removeFromCart, total, handlePurchaseClick } = useContext(CartContext);

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
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
        });

        burger.classList.toggle('toggle');
      });
    };

    navSlide();
  }, []);

  const books = [
    { title: 'The Silver Pigs', price: '$ 56', imgSrc: 'recbook2.jpg' },
    { title: 'Zanzibar History', price: '$ 14', imgSrc: 'zanz history.webp' },
    { title: 'A Man of the People', price: '$ 22', imgSrc: 'a man of the ppl.jpg' },
    { title: 'The Handmaids Tale', price: '$ 15', imgSrc: 'recbook1.jpg' },
    { title: 'The Signature of All Things', price: '$ 10', imgSrc: 'recbook3.jpeg' },
    { title: 'Don Quihote', price: '$ 18', imgSrc: 'book4.jpg' },
    { title: 'Mabala The Farmer', price: '$ 6', imgSrc: 'mabala.jpg' },
    { title: 'The Great Gatsby', price: '$ 12', imgSrc: 'book5.jpg' },
    { title: 'Malenga Wapya', price: '$ 10', imgSrc: 'malenga wapya.jpg' },
    { title: 'Hujafa Hujaumbika', price: '$ 5', imgSrc: 'hujafa huja.jpg' },
    { title: 'One Hundred Years of Solitude', price: '$ 13', imgSrc: 'book6.jpg' },
    { title: 'In Search of Lost Time', price: '$ 7', imgSrc: 'book7.jpg' }
  ];

  return (
    <div>
      <header className="site-header">
        <div className="logo-container">
          <img src={logo} alt="Online Sales Books Logo" className="logo" />
        </div>
        <h1 className="site-title">ONLINE SALES BOOKS</h1>
      </header>

      <nav>
        <div className="nav"></div>
        <ul className="nav-links">
          <li><a href="/">home</a></li>
          <li><Link to="/about">aboutus</Link></li>
          <li><a href="#cart">cart</a></li>
          <li><Link to="/Signup">signin</Link></li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>

      <marquee>
        <h2 className="description text">This is where you will find all the books you need</h2>
      </marquee>
      <br />
      <p>
        <h2 className="part-title text-t">OUR AVAILABLE BOOKS!</h2>
      </p>

      <div className="sales-items">
        {books.map((book, index) => (
          <div key={index} className="sales-item column1 sales-item-div">
            <span className="item-title sales-item-title">{book.title}</span>
            <span className="item-price sales-item-price">{book.price}</span>
            <img className="sales-item-image" src={book.imgSrc} alt={book.title} title={book.title} width="100%" height="250px" />
            <button className="btn btn-primary btn-product" type="button" onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <section className="container content-section">
        <h1 className="section-header headii" id="cart">CART</h1>
        <div className="cart-row">
          <span className="cart-item cart-header cart-column">ITEM</span>
          <span className="cart-price cart-header cart-column">PRICE</span>
          <span className="cart-quantity cart-header cart-column">QUANTITY</span>
        </div>

        <div className="cart">
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-row">
                <div className="cart-item cart-column">
                  <img className="cart-item-image" src={item.imgSrc} width="100" height="100" alt={item.title} />
                  <span className="cart-item-title">{item.title}</span>
                </div>
                <span className="cart-price cart-column">{item.price}</span>
                <div className="cart-quantity cart-column">
                  <input
                    className="cart-quantity-input"
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.title, parseInt(e.target.value))}
                  />
                  <button className="btn btn-danger" type="button" onClick={() => removeFromCart(item.title)}>REMOVE</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <strong className="cart-total-title">Total</strong>
            <span className="cart-total-price">$ {total}</span>
          </div>

          <button className="btn btn-purchase" onClick={handlePurchaseClick}><a href="/purchase">Purchase</a></button>
        </div>
      </section>

      <div className="footer">
        <div className="footer-content">
          <div className="footer2">
            <h3>Contact Us</h3><br />
            <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:hassanmaabad44@gmail.com">hassanmaabad44@gmail.com</a></p><br />
            <p><FontAwesomeIcon icon={faWhatsapp} /> <a href="https://wa.me/+255628999529">Chat on WhatsApp</a></p><br />
            <p><FontAwesomeIcon icon={faPhone} /> <a href="tel:+255628999529">+255 628 999 529</a></p><br />
          </div>

          <div className="footer3">
            <h3>Feedback</h3>
            <form>
              <input type="email" name="email" placeholder="Email address" required /><br />
              <textarea name="body" placeholder="Content" required></textarea><br />
              <button type="submit" name="submit">Submit</button>
            </form>
          </div>
        </div>
        
        <div className="copyright">
          &copy; <b>2024 Online Sales Books. All rights reserved.</b>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
