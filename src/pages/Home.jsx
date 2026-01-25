import { Link } from 'react-router-dom'
import '../styles/Home.css'

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Elevation Myofunctional Therapy</h1>
          <p className="hero-subtitle">Transform Your Health Through Better Breathing and Oral Function</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <Link to="/information" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* What is Myofunctional Therapy Section */}
      <section className="section what-is-section">
        <div className="container">
          <h2>What is Myofunctional Therapy?</h2>
          <p>
            Myofunctional therapy is a specialized treatment approach that addresses improper
            function of the tongue and facial muscles. Through customized exercises and techniques,
            we help retrain oral and facial muscles to function correctly, leading to improvements
            in breathing, sleep, and overall health.
          </p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">💨</div>
              <h3>Improved Breathing</h3>
              <p>Learn proper nasal breathing techniques for better oxygen intake and overall health</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">😴</div>
              <h3>Better Sleep Quality</h3>
              <p>Address sleep-disordered breathing and improve sleep patterns naturally</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">😊</div>
              <h3>Enhanced Facial Development</h3>
              <p>Support proper facial growth and development, especially in children</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🦷</div>
              <h3>Orthodontic Support</h3>
              <p>Complement orthodontic treatment and help maintain results long-term</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="section benefit-section">
        <div className="container">
          <h2>Who Can Benefit?</h2>
          <div className="two-column">
            <div className="column">
              <h3>Children</h3>
              <ul>
                <li>Mouth breathing</li>
                <li>Thumb sucking or prolonged pacifier use</li>
                <li>Speech difficulties</li>
                <li>Orthodontic concerns</li>
                <li>Bed wetting</li>
                <li>ADHD symptoms</li>
              </ul>
            </div>
            <div className="column">
              <h3>Adults</h3>
              <ul>
                <li>Sleep apnea or snoring</li>
                <li>TMJ/TMD issues</li>
                <li>Chronic headaches</li>
                <li>Teeth grinding (bruxism)</li>
                <li>Forward head posture</li>
                <li>Digestive issues</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Abigail Section */}
      <section className="section about-section">
        <div className="container">
          <h2>About Abigail Bartrand, RDH</h2>
          <div className="about-content">
            <div className="about-image-placeholder">
              <div className="placeholder-box">Professional Photo Coming Soon</div>
            </div>
            <div className="about-text">
              <p>
                Abigail Bartrand is a Registered Dental Hygienist with specialized training in
                myofunctional therapy. With a deep commitment to evidence-based practice and
                patient-centered care, Abigail helps individuals of all ages achieve better
                breathing, sleep, and overall health through targeted therapeutic interventions.
              </p>
              <p>
                Located in beautiful Grand Junction, Colorado, Abigail brings a professional yet
                compassionate approach to every patient interaction, creating personalized treatment
                plans that address each individual's unique needs and goals.
              </p>
              <Link to="/information" className="btn btn-link">Learn More About Our Services →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Take the first step toward better breathing, better sleep, and better health.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary-large">Contact Us</Link>
          </div>
          <p className="cta-contact">
            Or call us directly at <a href="tel:+19704627675">(970) 462-7675</a>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
