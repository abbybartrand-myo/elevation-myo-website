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

      {/* Online Resources */}
      <section className="section">
        <div className="container">
          <h2>Helpful Organizations & Websites</h2>
          <div className="resources-grid">
            <div className="resource-card">
              <h3>🌐 Academy of Orofacial Myofunctional Therapy (AOMT)</h3>
              <p>
                The leading professional organization for myofunctional therapists. Offers
                educational resources and research on orofacial myofunctional disorders.
              </p>
              <a href="https://aomtinfo.org" target="_blank" rel="noopener noreferrer" className="resource-link">
                Visit Website →
              </a>
            </div>
            <div className="resource-card">
              <h3>🌐 American Sleep Apnea Association</h3>
              <p>
                Comprehensive information about sleep apnea, treatment options, and the latest
                research in sleep-disordered breathing.
              </p>
              <a href="https://www.sleepapnea.org" target="_blank" rel="noopener noreferrer" className="resource-link">
                Visit Website →
              </a>
            </div>
            <div className="resource-card">
              <h3>🌐 Buteyko Breathing</h3>
              <p>
                Learn about the Buteyko method, a breathing technique that can help with
                various respiratory and health issues.
              </p>
              <a href="https://buteykoclinic.com" target="_blank" rel="noopener noreferrer" className="resource-link">
                Visit Website →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="section gray-bg">
        <div className="container">
          <h2>Common Topics</h2>
          <div className="topics-list">
            <div className="topic-item">
              <h3>What is Mouth Breathing and Why is it Harmful?</h3>
              <p>
                Mouth breathing bypasses the nose's natural filtering and humidifying functions,
                leading to dry mouth, bad breath, dental problems, and reduced oxygen absorption.
                Chronic mouth breathing in children can affect facial development and lead to
                sleep-disordered breathing. Myofunctional therapy helps retrain the body to breathe
                nasally, improving overall health and preventing long-term complications.
              </p>
            </div>
            <div className="topic-item">
              <h3>The Connection Between Tongue Position and Sleep Apnea</h3>
              <p>
                Proper tongue posture (tongue resting on the roof of the mouth) helps maintain
                open airways during sleep. When the tongue rests low in the mouth or falls back
                during sleep, it can obstruct the airway, contributing to snoring and sleep apnea.
                Myofunctional therapy strengthens tongue muscles and establishes proper resting
                posture, which can significantly reduce sleep-disordered breathing symptoms.
              </p>
            </div>
            <div className="topic-item">
              <h3>How Myofunctional Therapy Supports Orthodontic Treatment</h3>
              <p>
                Orthodontic treatment moves teeth into proper position, but without addressing
                underlying muscle dysfunction, teeth can shift back after braces are removed.
                Myofunctional therapy corrects the muscle patterns that may have caused
                misalignment in the first place, helping maintain orthodontic results long-term
                and preventing relapse.
              </p>
            </div>
            <div className="topic-item">
              <h3>Myofunctional Therapy for Children</h3>
              <p>
                Early intervention with myofunctional therapy can guide proper facial and airway
                development in children. Addressing issues like mouth breathing, thumb sucking,
                and tongue thrust early can prevent more serious problems later, including sleep
                disorders, dental issues, and developmental concerns. Therapy is typically most
                effective when started around age 4-5.
              </p>
            </div>
            <div className="topic-item">
              <h3>Understanding Tongue Tie and Its Impact</h3>
              <p>
                Tongue tie (ankyloglossia) occurs when the band of tissue connecting the tongue
                to the floor of the mouth is too tight, restricting tongue movement. This can
                affect feeding in infants, speech development, and proper swallowing patterns.
                Myofunctional therapy is often recommended before and after tongue tie release
                procedures to ensure optimal function and prevent scar tissue formation.
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
