import ContactForm from '../components/ContactForm'
import { Link } from 'react-router-dom'
import '../styles/Booking.css'

function Booking() {
  return (
    <div className="booking-page">
      <section className="page-header">
        <div className="container">
          <h1>Schedule Your Consultation</h1>
          <p className="page-subtitle">
            Take the first step toward better breathing, sleep, and overall health
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="booking-intro">
            <h2>How to Book Your Appointment</h2>
            <p>
              We're excited to work with you! To schedule your initial consultation, please fill out
              the form below with your preferred times and any specific concerns. We'll get back to
              you within 24-48 hours to confirm your appointment.
            </p>
          </div>

          <div className="booking-grid">
            {/* Booking Information */}
            <div className="booking-info">
              <h3>What to Expect</h3>

              <div className="info-section">
                <h4>Initial Consultation (60-90 minutes)</h4>
                <p>
                  Your first visit includes a comprehensive assessment of your oral and facial
                  muscle function, breathing patterns, and medical history. We'll discuss your
                  concerns, goals, and determine if myofunctional therapy is right for you.
                </p>
              </div>

              <div className="info-section">
                <h4>What the Consultation Includes:</h4>
                <ul>
                  <li>Detailed medical and dental history review</li>
                  <li>Orofacial muscle function assessment</li>
                  <li>Breathing pattern evaluation</li>
                  <li>Discussion of symptoms and concerns</li>
                  <li>Personalized treatment plan recommendations</li>
                  <li>Answers to all your questions</li>
                </ul>
              </div>

              <div className="info-section">
                <h4>What to Bring:</h4>
                <ul>
                  <li>List of current medications</li>
                  <li>Any relevant medical records or sleep studies</li>
                  <li>Orthodontic records if applicable</li>
                  <li>List of questions or concerns</li>
                </ul>
              </div>

              <div className="info-section">
                <h4>Investment in Your Health</h4>
                <p className="placeholder-text">
                  Pricing information available upon consultation. Some insurance plans may provide
                  coverage for myofunctional therapy services. We can provide documentation to
                  submit to your insurance provider.
                </p>
              </div>

              <div className="contact-alternative">
                <h4>Prefer to Call?</h4>
                <p>
                  You can reach us directly at <a href="tel:+19704627675">(970) 462-7675</a>
                </p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="booking-form-wrapper">
              <h3>Request an Appointment</h3>
              <p className="form-instruction">
                Fill out the form below and we'll contact you to schedule your consultation.
              </p>
              <ContactForm formType="booking" />
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="section gray-bg">
        <div className="container">
          <h2>Before Your Visit</h2>
          <div className="prep-grid">
            <div className="prep-item">
              <h3>📝 Prepare Your Questions</h3>
              <p>
                Write down any questions or concerns you have about myofunctional therapy,
                treatment timelines, or specific symptoms you're experiencing.
              </p>
            </div>
            <div className="prep-item">
              <h3>📋 Gather Medical Information</h3>
              <p>
                Collect any relevant medical records, sleep study results, or orthodontic
                information that might be helpful for your assessment.
              </p>
            </div>
            <div className="prep-item">
              <h3>💭 Consider Your Goals</h3>
              <p>
                Think about what you hope to achieve through therapy. This helps us create
                a personalized treatment plan that aligns with your objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="section">
        <div className="container">
          <div className="policy-box">
            <h3>Appointment Policy</h3>
            <p>
              We understand that schedules change. If you need to reschedule or cancel your
              appointment, please provide at least 24 hours notice so we can offer the time
              to another patient. Thank you for your understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section gray-bg">
        <div className="container centered-content">
          <h2>Still Have Questions?</h2>
          <p>
            If you'd like to learn more before booking, visit our information page or send us
            a general inquiry.
          </p>
          <div className="cta-buttons">
            <Link to="/information" className="btn btn-secondary">Learn More</Link>
            <Link to="/contact" className="btn btn-secondary">General Inquiry</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking
