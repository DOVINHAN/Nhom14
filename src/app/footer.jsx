

//import Link from "next/link";

import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>SUPPORT</h3>
          <ul>
            <li><a href="/">Product Support</a></li>
            <li><a href="/">PC Setup & Support Services</a></li>
            <li><a href="/">Extended Service Plans</a></li>
            <li><a href="/">Community</a></li>
            <li><a href="/">Product Manuals</a></li>
            <li><a href="/">Product Registration</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>YOUR LINKS</h3>
          <ul>
            <li><a href="/">My Account</a></li>
            <li><a href="/">Order Tracking</a></li>
            <li><a href="/">Watch List</a></li>
            <li><a href="/">Customer Service</a></li>
            <li><a href="/">Returns / Exchanges</a></li>
            <li><a href="/">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>CONTACT INFO</h3>
          <p>No 1123, Marmora Road, Glasgow, D04 89GR</p>
          <p>(801) 2345 – 6788 / (801) 2345 – 6789</p>
          <p><a href="mailto:support@etostore.com">support@etostore.com</a></p>
          <div className="social-icons">
            <a href="/"><i className="fa fa-facebook"></i></a>
            <a href="/"><i className="fa fa-twitter"></i></a>
            <a href="/"><i className="fa fa-google"></i></a>
            <a href="/"><i className="fa fa-linkedin"></i></a>
            <a href="/"><i className="fa fa-pinterest"></i></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>NEWSLETTER</h3>
          <p>Get all the best deals, sales, and offers from the best online store in UAE. Sign up now!</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <ul>
          <li><a href="/">ABOUT US</a></li>
          <li><a href="/">CUSTOMER SERVICE</a></li>
          <li><a href="/">PRIVACY POLICY</a></li>
          <li><a href="/">SITE MAP</a></li>
          <li><a href="/">ORDERS AND RETURNS</a></li>
          <li><a href="/">CONTACT US</a></li>
        </ul>
        <p className="disclaimer">
          **$50 off orders $350+ with the code BOO50. $75 off orders $500+ with the code BOO75. $150 off orders $1000+ with the code BOO150. 
          Valid from October 28, 2016 to October 31, 2016. Offer may not be combined with any other offers or promotions, is non-exchangeable and 
          non-refundable. Offer valid within the US only.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
