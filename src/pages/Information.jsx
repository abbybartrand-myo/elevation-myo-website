import { Link } from 'react-router-dom'
import '../styles/Information.css'

function Information() {
  return (
    <div className="information-page">
      <section className="page-header">
        <div className="container">
          <h1>Myofunctional Therapy Information</h1>
          <p className="page-subtitle">
            Understanding the science and process behind myofunctional therapy
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <h2>Understanding Myofunctional Therapy</h2>
          <p>
            Myofunctional therapy is a specialized program of exercises designed to correct improper
            function of the tongue and facial muscles. These exercises help establish correct patterns
            of muscle function, which can significantly impact breathing, sleep, facial development,
            and overall health.
          </p>
          <p>
            The therapy focuses on retraining the orofacial muscles to achieve proper tongue posture,
            nasal breathing, correct swallowing patterns, and optimal lip seal. Through consistent
            practice and guidance, patients can overcome dysfunctional patterns that may have developed
            over years.
          </p>
        </div>
      </section>

      {/* Conditions Treated Section */}
      <section className="section gray-bg">
        <div className="container">
          <h2>Conditions We Treat</h2>
          <div className="conditions-grid">
            <div className="condition-card">
              <h3>Sleep-Disordered Breathing</h3>
              <ul>
                <li>Obstructive Sleep Apnea (OSA)</li>
                <li>Upper Airway Resistance Syndrome (UARS)</li>
                <li>Snoring</li>
                <li>Restless sleep</li>
              </ul>
            </div>
            <div className="condition-card">
              <h3>Orthodontic Issues</h3>
              <ul>
                <li>Relapse prevention after braces</li>
                <li>Open bite</li>
                <li>Crossbite</li>
                <li>Crowding</li>
              </ul>
            </div>
            <div className="condition-card">
              <h3>Oral Habits</h3>
              <ul>
                <li>Thumb or finger sucking</li>
                <li>Prolonged pacifier use</li>
                <li>Nail biting</li>
                <li>Tongue thrusting</li>
              </ul>
            </div>
            <div className="condition-card">
              <h3>TMJ/TMD Disorders</h3>
              <ul>
                <li>Jaw pain</li>
                <li>Clicking or popping</li>
                <li>Limited jaw movement</li>
                <li>Headaches</li>
              </ul>
            </div>
            <div className="condition-card">
              <h3>Breathing Dysfunction</h3>
              <ul>
                <li>Chronic mouth breathing</li>
                <li>Poor oral posture</li>
                <li>Weakened lip seal</li>
                <li>Forward head posture</li>
              </ul>
            </div>
            <div className="condition-card">
              <h3>Speech Issues</h3>
              <ul>
                <li>Articulation difficulties</li>
                <li>Tongue thrust swallow</li>
                <li>Lisping</li>
                <li>Difficulty with certain sounds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="section">
        <div className="container">
          <h2>The Treatment Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Initial Assessment</h3>
                <p>
                  Comprehensive evaluation of oral and facial muscle function, breathing patterns,
                  and identification of specific concerns. We'll review your medical history and
                  discuss your goals for treatment.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Customized Treatment Plan</h3>
                <p>
                  Based on your assessment, we'll create a personalized program of exercises and
                  techniques tailored to your specific needs. You'll receive clear instructions
                  and demonstration of all exercises.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Active Therapy Phase</h3>
                <p>
                  Regular appointments (typically every 3-4 weeks) to monitor progress, introduce
                  new exercises, and make adjustments as needed. Daily home practice of exercises
                  is essential for success.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Habituation & Maintenance</h3>
                <p>
                  Once proper function is achieved, we focus on making these new patterns automatic.
                  Follow-up appointments ensure long-term success and address any concerns that arise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section gray-bg">
        <div className="container">
          <h2>Treatment Timeline</h2>
          <p>
            The duration of myofunctional therapy varies depending on individual needs, age, and
            the specific conditions being addressed. Most treatment programs follow this general timeline:
          </p>
          <div className="timeline-info">
            <div className="timeline-item">
              <h4>Initial Phase (Months 1-3)</h4>
              <p>
                Learning proper techniques, establishing nasal breathing, and beginning muscle
                retraining exercises.
              </p>
            </div>
            <div className="timeline-item">
              <h4>Active Phase (Months 3-9)</h4>
              <p>
                Progressive exercises, integration of new patterns into daily life, and ongoing
                monitoring of progress.
              </p>
            </div>
            <div className="timeline-item">
              <h4>Habituation Phase (Months 9-12+)</h4>
              <p>
                Making new patterns automatic, reducing exercise frequency, and ensuring long-term
                maintenance of proper function.
              </p>
            </div>
          </div>
          <p className="note">
            Note: Individual results may vary. Some patients see improvements in weeks, while others
            may require longer treatment periods. Consistency with home exercises is crucial for success.
          </p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section">
        <div className="container">
          <h2>What to Expect</h2>
          <div className="expectations">
            <div className="expectation-item">
              <h3>Commitment Required</h3>
              <p>
                Success with myofunctional therapy requires daily practice of exercises
                (typically 10-20 minutes per day) and regular attendance at therapy sessions.
              </p>
            </div>
            <div className="expectation-item">
              <h3>Gradual Improvements</h3>
              <p>
                Changes occur gradually over time. You may notice improvements in breathing,
                sleep quality, or other symptoms within the first few months of treatment.
              </p>
            </div>
            <div className="expectation-item">
              <h3>Collaborative Approach</h3>
              <p>
                We may work in conjunction with your dentist, orthodontist, physician, or other
                healthcare providers to ensure comprehensive care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section gray-bg">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Is myofunctional therapy suitable for children?</h3>
              <p>
                Yes! Myofunctional therapy can be highly effective for children, typically starting
                around age 4-5. Early intervention can help prevent more serious issues from developing
                and support proper facial growth and development.
              </p>
            </div>
            <div className="faq-item">
              <h3>Does insurance cover myofunctional therapy?</h3>
              <p>
                Coverage varies by insurance provider and plan. Some medical and dental insurance
                plans may cover myofunctional therapy, especially when related to sleep-disordered
                breathing. We can provide documentation to submit to your insurance company.
              </p>
            </div>
            <div className="faq-item">
              <h3>How long are therapy sessions?</h3>
              <p>
                Initial consultations typically last 60-90 minutes. Follow-up sessions are usually
                45-60 minutes and occur every 3-4 weeks during active treatment.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can therapy help with sleep apnea?</h3>
              <p>
                Myofunctional therapy has been shown to be effective in reducing sleep apnea symptoms,
                particularly for mild to moderate cases. It can also complement other treatments like
                CPAP or oral appliances. We recommend working with your sleep physician.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-info">
        <div className="container">
          <h2>Ready to Learn More?</h2>
          <p>
            Schedule a consultation to discuss your specific needs and how myofunctional therapy
            can help you achieve better health.
          </p>
          <div className="cta-buttons">
            <Link to="/booking" className="btn btn-primary">Schedule Consultation</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Information
