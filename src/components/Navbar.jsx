import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../styles/Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo-placeholder.svg" alt="Elevation Myofunctional Therapy" className="logo-image" />
          <div className="logo-text">
            <span className="brand-name">Elevation Myofunctional Therapy</span>
            <span className="brand-tagline">Abigail Bartrand, RDH</span>
          </div>
        </Link>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/information" className="nav-link" onClick={closeMenu}>Information</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources" className="nav-link" onClick={closeMenu}>Resources</Link>
          </li>
          <li className="nav-item">
            <Link to="/booking" className="nav-link" onClick={closeMenu}>Booking</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link nav-link-cta" onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
