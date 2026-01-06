import { useState } from 'react'
import '../styles/ContactForm.css'

function ContactFormNetlify({ formType = 'contact' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    // Netlify Forms requires form-encoded data
    const formBody = new URLSearchParams({
      'form-name': formType === 'booking' ? 'booking' : 'contact',
      'name': formData.name,
      'email': formData.email,
      'phone': formData.phone,
      'message': formData.message
    }).toString()

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
      name={formType === 'booking' ? 'booking' : 'contact'}
      data-netlify="true"
      netlify-honeypot="bot-field"
    >
      {/* Hidden field for Netlify */}
      <input type="hidden" name="form-name" value={formType === 'booking' ? 'booking' : 'contact'} />

      {/* Honeypot field for spam prevention */}
      <div style={{ display: 'none' }}>
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your.email@example.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(970) 123-4567"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          placeholder={
            formType === 'booking'
              ? 'Please tell us about your availability and any specific concerns...'
              : 'How can we help you?'
          }
        ></textarea>
      </div>

      <button
        type="submit"
        className="submit-button"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending...' : (formType === 'booking' ? 'Request Appointment' : 'Send Message')}
      </button>

      {status === 'success' && (
        <div className="form-message success">
          Thank you for contacting us! We'll get back to you within 24-48 hours.
        </div>
      )}

      {status === 'error' && (
        <div className="form-message error">
          Sorry, there was an error sending your message. Please try again or call us directly at (970) 462-7675.
        </div>
      )}
    </form>
  )
}

export default ContactFormNetlify
