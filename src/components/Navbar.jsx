import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    function toggleMenu() {
        const nav = document.getElementById("navLinks");
        nav.classList.toggle("show");
    }
    return (
        <header>
            <nav>
                <div className="hamburger" onClick={toggleMenu}>☰</div>
                <ul className="nav-links" id="navLinks">
                    <li>
                        <Link to="/" className="logo">
                            <img src="/images/logo.png" alt="Cat A Burger 🍔" />
                        </Link>
                    </li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li className="nav-bag">
                        <Link to="/cart"><FontAwesomeIcon icon={faBagShopping} /></Link>          </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
