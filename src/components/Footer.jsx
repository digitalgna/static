import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3>Yeha Niagara Tour & Travel</h3>
            <p>
              Your premier destination for luxury Canadian travel experiences. 
              Discover the beauty of Niagara Falls with our expertly curated tours.
            </p>
          </div>
          <div className="footer__section">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/tours">Tours & Packages</a>
            <a href="/destinations">Destinations</a>
            <a href="/gallery">Gallery</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer__section">
            <h3>Contact Info</h3>
            <p>📍 Niagara Falls, Ontario, Canada</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>✉️ info@yehaniagara.com</p>
            <div className="footer__social">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
          <div className="footer__section">
            <h3>Newsletter</h3>
            <p>Subscribe to get updates on new tours and special offers.</p>
            <div style={{ marginTop: '1rem' }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  padding: '0.5rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  width: '100%',
                  marginBottom: '0.5rem'
                }}
              />
              <button className="btn btn--gold" style={{ width: '100%' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Yeha Niagara Tour & Travel Canada. All rights reserved.</p>
          <p className="credit">Developed by Mager Software PLC.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

