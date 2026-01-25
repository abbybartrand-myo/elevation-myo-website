import { Link } from 'react-router-dom'
import '../styles/AboutUs.css'

function AboutUs() {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p className="page-subtitle">
            Dedicated to improving lives through myofunctional therapy
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section">
        <div className="container">
          <div className="bio-section">
            <div className="bio-photo">
              <img src="/bio-photo-placeholder.jpg" alt="Abigail Bartrand, RDH" />
            </div>
            <div className="bio-content">
              <h2>Meet Abigail Bartrand, RDH</h2>
              <p>
                Abigail is a licensed Registered Dental Hygienist with a passion for helping
                patients achieve optimal oral and overall health through myofunctional therapy.
                With years of experience in dental hygiene, she has witnessed firsthand the
                profound impact that proper oral muscle function can have on breathing, sleep,
                and quality of life.
              </p>
              <p>
                Her dedication to continuing education and evidence-based practice ensures that
                each patient receives the highest quality of care tailored to their individual needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section gray-bg">
        <div className="container">
          <h2>Education & Training</h2>
          <div className="credentials-grid">
            <div className="credential-item">
              <div className="credential-icon">🎓</div>
              <h3>Dental Hygiene Degree</h3>
              <p>
                Registered Dental Hygienist (RDH) with comprehensive training in oral health
                and patient care.
              </p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">📚</div>
              <h3>Myofunctional Therapy Certification</h3>
              <p>
                Specialized certification in orofacial myofunctional therapy, focusing on
                muscle retraining and airway optimization.
              </p>
            </div>
            <div className="credential-item">
              <div className="credential-icon">✨</div>
              <h3>Continuing Education</h3>
              <p>
                Ongoing professional development in sleep-disordered breathing, tongue-tie
                release, and integrative health approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section">
        <div className="container">
          <h2>Professional Certifications</h2>
          <div className="certifications-list">
            <div className="certification-badge">
              <span className="badge-checkmark">✓</span>
              <span>Registered Dental Hygienist (RDH)</span>
            </div>
            <div className="certification-badge">
              <span className="badge-checkmark">✓</span>
              <span>Certified Orofacial Myofunctional Therapist</span>
            </div>
            <div className="certification-badge">
              <span className="badge-checkmark">✓</span>
              <span>Advanced Training in Sleep-Disordered Breathing</span>
            </div>
            <div className="certification-badge">
              <span className="badge-checkmark">✓</span>
              <span>Pediatric Airway Health Specialist</span>
            </div>
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="section gray-bg">
        <div className="container">
          <h2>Why Myofunctional Therapy?</h2>
          <div className="motivation-content">
            <p className="motivation-intro">
              My journey into myofunctional therapy began when I realized that traditional
              dental care, while essential, often addressed symptoms rather than root causes.
            </p>
            <div className="motivation-points">
              <div className="motivation-point">
                <h3>Passion for Root Cause Solutions</h3>
                <p>
                  I believe in addressing the underlying causes of dental and breathing issues,
                  not just treating symptoms. Myofunctional therapy empowers patients to make
                  lasting changes that improve their overall health.
                </p>
              </div>
              <div className="motivation-point">
                <h3>Transforming Lives</h3>
                <p>
                  Witnessing patients experience better sleep, improved breathing, and enhanced
                  quality of life is incredibly rewarding. Every success story motivates me to
                  help more individuals discover the benefits of proper oral function.
                </p>
              </div>
              <div className="motivation-point">
                <h3>Holistic Health Approach</h3>
                <p>
                  I'm committed to working collaboratively with dentists, orthodontists, physicians,
                  and other healthcare providers to ensure comprehensive, integrative care for
                  each patient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            At Elevation Myofunctional Therapy, we are committed to helping individuals achieve
            optimal oral and facial muscle function through personalized, evidence-based therapy.
            Our goal is to improve breathing, sleep quality, and overall health for our patients.
          </p>
        </div>
      </section>

      <section className="section cta-info">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>
            Schedule a consultation to learn how we can help you achieve better health through
            myofunctional therapy.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <Link to="/information" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
