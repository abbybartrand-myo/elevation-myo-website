import { Link } from 'react-router-dom'
import '../styles/Resources.css'

function Resources() {
  return (
    <div className="resources-page">
      <section className="page-header">
        <div className="container">
          <h1>Educational Resources</h1>
          <p className="page-subtitle">
            Learn more about myofunctional therapy, breathing, and oral health
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <p className="intro-text">
            Knowledge is power when it comes to your health. Below you'll find curated resources
            to help you understand myofunctional therapy, breathing disorders, and related topics.
            These resources are for educational purposes and should not replace professional
            medical advice.
          </p>
        </div>
      </section>

      {/* Recommended Reading */}
      <section className="section gray-bg">
        <div className="container">
          <h2>Recommended Reading</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>📚 "Breath" by James Nestor</h3>
              <p>
                A fascinating exploration of the science of breathing and how proper breathing
                can transform your health. An essential read for anyone interested in understanding
                the importance of nasal breathing.
              </p>
            </div>
            <div className="resource-card">
              <h3>📚 "Jaws: The Story of a Hidden Epidemic" by Sandra Kahn & Paul R. Ehrlich</h3>
              <p>
                Examines how modern lifestyles have affected jaw development and breathing,
                leading to numerous health issues. Explains the connection between oral development
                and overall health.
              </p>
            </div>
            <div className="resource-card">
              <h3>📚 "The Oxygen Advantage" by Patrick McKeown</h3>
              <p>
                Practical techniques for improving breathing patterns, athletic performance,
                and overall health through proper breathing mechanics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="section">
        <div className="container">
          <h2>Educational Videos</h2>
          <p className="placeholder-text">
            Educational video content coming soon. In the meantime, you can search for
            "myofunctional therapy" on YouTube to find informative videos about breathing,
            tongue posture, and oral health.
          </p>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="section gray-bg">
        <div className="container">
          <h2>Downloadable Resources</h2>
          <p className="placeholder-text">
            Patient handouts and educational materials will be available here soon. Current
            patients will receive personalized materials during their therapy sessions.
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section">
        <div className="container">
          <div className="disclaimer-box">
            <h3>Important Note</h3>
            <p>
              The information provided on this page is for educational purposes only and
              should not be used as a substitute for professional medical advice, diagnosis,
              or treatment. Always seek the advice of your physician or other qualified health
              provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-resources">
        <div className="container centered-content">
          <h2>Ready to Get Started?</h2>
          <p>
            If you'd like to learn more about how myofunctional therapy can help you,
            schedule a consultation today.
          </p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </div>
  )
}

export default Resources
