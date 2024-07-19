import React from 'react';
import './AboutUs.css'; // Adjust the path based on the actual location
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../image/booklogo.webp'; // Adjust the path based on the actual location

const AboutUs = () => {
    return (
        <div className="about-us">
            <h1>ONLINE SALES BOOKS</h1>
            <img src={logo} alt="Online Sales Books Logo" className="logo" />
            <h1>About Us</h1>
            <div className="description">
                <p>Welcome to Online Sales Books, your number one source for all books, ranging from fiction to non-fiction, academic textbooks to children's books. We're dedicated to giving you the very best of literature, with a focus on three characteristics: dependability, customer service, and uniqueness.</p>
                <p>Founded in 2024 by Mr. Maabad Hassan, Online Sales Books has come a long way from its beginnings in a home office. When first started out, his passion for "books that enlighten and entertain" drove him to quit his day job, do tons of research, and gave him the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the world and are thrilled to be a part of the book industry.</p>
                <p>We hope you enjoy our books as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                <p>Sincerely,</p>
                <p>Maabad Hassan, Founder</p><br />
            </div>
            <div className="return-home">
                <p>Do you want to return Home? <strong><i><a href="/Dashboard">Click here</a></i></strong></p>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <section className="footer">
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
                &copy; <b> 2024 Online Sales Books. All rights reserved. </b>
            </div>
        </section>
    );
};

const App = () => {
    return (
        <div>
            <AboutUs />
            <Footer />
        </div>
    );
};

export default App;
