import ContactFormNetlify from '../components/ContactFormNetlify'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p className="page-subtitle">
            We'd love to hear from you. Reach out with any questions or to schedule a consultation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Whether you have questions about myofunctional therapy, want to schedule a
                consultation, or need more information about our services, we're here to help.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <h3>📧 Email</h3>
                  <a href="mailto:contactelevationmyofunctional@gmail.com">contactelevationmyofunctional@gmail.com</a>
                </div>

                <div className="contact-detail">
                  <h3>📞 Phone</h3>
                  <a href="tel:+19704627675">(970) 462-7675</a>
                  <p className="detail-note">Please leave a message if we're with a patient</p>
                </div>

                <div className="contact-detail">
                  <h3>📍 Location</h3>
                  <p>Grand Junction, Colorado</p>
                  <p className="detail-note">Serving the Western Slope region</p>
                </div>

                <div className="contact-detail">
                  <h3>⏰ Response Time</h3>
                  <p>We typically respond within 24-48 hours</p>
                </div>
              </div>

              <div className="office-hours">
                <h3>Office Hours</h3>
                <p className="placeholder-text">
                  Office hours coming soon. Please contact us to schedule an appointment
                  at a time that works for you.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <ContactFormNetlify formType="contact" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="section gray-bg">
        <div className="container">
          <h2>What Happens Next?</h2>
          <div className="next-steps">
            <div className="next-step">
              <div className="step-icon">1</div>
              <h3>We Review Your Message</h3>
              <p>
                Your message goes directly to Abigail, who will personally review your inquiry
                and any questions you have.
              </p>
            </div>
            <div className="next-step">
              <div className="step-icon">2</div>
              <h3>We'll Respond Promptly</h3>
              <p>
                You'll receive a response within 24-48 hours with answers to your questions
                and next steps.
              </p>
            </div>
            <div className="next-step">
              <div className="step-icon">3</div>
              <h3>Schedule Your Visit</h3>
              <p>
                If appropriate, we'll schedule your initial consultation at a time that works
                for your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
