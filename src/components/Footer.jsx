import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="hours-footer">
                    <p>
                        <strong>Hours:</strong><br /> Mon–Sat: 9AM – 11PM <br /> Sun: 10AM – 10PM</p>
                </div>

                <div className="logo-footer">
                    <img src="/images/logo.png" alt="Cat A Burger 🐈‍⬛" />
                </div>
                <div className="social-icons">
                    <p>Follow us:</p>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>

            <div className="copyright">
                © 2025 Cat A Burger
            </div>
        </footer>
    );
};

export default Footer;