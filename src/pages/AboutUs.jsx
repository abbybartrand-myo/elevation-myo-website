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
              <img src="/images/bio-photo.jpg" alt="Abigail Bartrand, RDH" />
            </div>
            <div className="bio-content">
              <h2>Meet Abigail Bartrand, RDH</h2>
              <p className="bio-text">
                I am a registered dental hygienist and orofacial myofunctional therapist
                with a passion for helping patients achieve improved oral function and overall health.
              </p>
              <p className="bio-text">
                I earned my Bachelor of Science in Dental Hygiene from the University of Nebraska Medical Center, graduating in 2021,
                and completed the MyoMentor program in 2022. My interest in myofunctional therapy began during my senior year of hygiene
                school after a lecture on orofacial myofunctional therapy. That sparked an immediate interest, and I knew pursuing specialized
                training in myofunctional therapy would allow me to better support and care for my patients.
              </p>
              <p className="bio-text">
                With a strong foundation in dental hygiene and myofunctional therapy, I take a comprehensive, patient-centered
                approach to care, focusing on education, collaboration, and long-term results. Outside of work, I enjoy hiking
                and traveling with my husband, as well as embracing a few "grandma hobbies" like knitting and baking.
              </p>
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
