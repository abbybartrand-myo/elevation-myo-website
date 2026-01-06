import { Link } from 'react-router-dom'
import '../styles/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Elevation Myofunctional Therapy</h3>
          <p className="footer-tagline">
            Professional myofunctional therapy services in Grand Junction, Colorado
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/information">Information</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Information</h4>
          <ul className="footer-contact">
            <li>
              <span className="contact-icon">📧</span>
              <a href="mailto:abby.bartrand@gmail.com">abby.bartrand@gmail.com</a>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <a href="tel:+19704627675">(970) 462-7675</a>
            </li>
            <li>
              <span className="contact-icon">📍</span>
              <span>Grand Junction, CO</span>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Professional Credentials</h4>
          <p>Abigail Bartrand, RDH</p>
          <p className="credentials-text">Registered Dental Hygienist</p>
          <p className="credentials-text">Myofunctional Therapy Specialist</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Elevation Myofunctional Therapy. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
