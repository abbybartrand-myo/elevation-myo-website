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
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    Email:
                    <a href="mailto:contactelevationmyofunctional@gmail.com">contactelevationmyofunctional@gmail.com</a>
                  </h3>
                </div>

                <div className="contact-detail">
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    Phone:
                    <a href="tel:+19704627675">(970) 462-7675</a>
                  </h3>
                </div>

                <div className="contact-detail">
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    Social Media:
                    <a href="https://www.instagram.com/elevationmyo?igsh=MTZ6c24yaDU1bGQyMA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="https://www.tiktok.com/@elevationmyo?_r=1&_t=ZP-93NKvdwHJp0" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </h3>
                </div>

                <div className="contact-detail">
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    Location:
                    <a> Grand Junction, Colorado</a>
                  </h3>
                </div>

                <div className="contact-detail">
                  <h3>Response Time</h3>
                  <p>We typically respond within one business day</p>
                </div>
              </div>

              <div className="office-hours">
                <h3>Office Hours</h3>
                <p className="placeholder-text">
                  Please contact us to schedule an appointment
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
