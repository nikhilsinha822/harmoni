import './Footer.css';
import { AiOutlineSend } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Exclusive</h3>
          <div className="subscribe-section">
            <p className="subscribe-title">Subscribe</p>
            <p className="subscribe-text">Get 10% off your first order</p>
            <div className="input-container">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="submit-button"><AiOutlineSend /></button>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Support</h3>
          <address className="support-address">
            <p>1234, Park Street,</p>
            <p>DL-11111, India.</p>
            <a href="mailto:Test@testmail.com" className="footer-link">
              <u>Test@testmail.com</u>
            </a>
            <a href="tel:+919999999999" className="footer-link">
              +91-999-999-9999
            </a>
          </address>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Account</h3>
          <nav className="footer-nav">
            <a href="/my-account" className="footer-link">My Account</a>
            <a href="/login" className="footer-link">Login / Register</a>
            <a href="/cart" className="footer-link">Cart</a>
            <a href="/wishlist" className="footer-link">Wishlist</a>
            <a href="/shop" className="footer-link">Shop</a>
          </nav>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Link</h3>
          <nav className="footer-nav">
            <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            <a href="/terms-of-use" className="footer-link">Terms Of Use</a>
            <a href="/faq" className="footer-link">FAQ</a>
            <a href="/contact" className="footer-link">Contact</a>
          </nav>
        </div>

        <div className="copyright">
          © Copyright Harmoni 2025. All right reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;