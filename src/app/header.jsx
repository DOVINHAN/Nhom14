// components/Header.jsx
import Link from "next/link";
import "./globals.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="contact-info">
            <span>CALL US NOW: 0123-444-666654123</span>
          </div>
          <div className="language-currency">
            <select className="language-select">
              <option value="en">English</option>
              {/* Add more language options */}
            </select>
            <select className="currency-select">
              <option value="usd">USD</option>
              {/* Add more currency options */}
            </select>
          </div>
        </div>

        <div className="logo-search-bar">
          <div className="logo">
            <img src="/img/logo.png" alt="ETRO Stores" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Keyword here..." />
            <button>SEARCH</button>
          </div>
          <div className="cart-login">
            <Link href="/wishlist"> ❤️</Link>

            <span className="login-text">Login</span>
            <span className="welcome-text">Welcome Guest</span>
          </div>
        </div>

        <nav className="main-nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link href="/productdetail">Shop</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/deals">Deals</Link>
            </li>
            <li>
              <a href="/portfolios">Portfolios</a>
            </li>
            <li>
              <Link href="/aboutus">About Us</Link>
            </li>
            <li>
              <Link href="/contactus">Contact Us</Link>
            </li>
            <li>
              <Link href="/checkout">Checkout</Link>
            </li>
            <li>
              <Link href="/myaccount">Myaccount</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
          </ul>
          <div className="special-offer">
            <span className="hot-label">HOT!</span>
            <span className="offer-text">Black Friday</span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
