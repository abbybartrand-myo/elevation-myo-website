import { Link } from 'react-router-dom'
import '../styles/FAQ.css'

function FAQ() {
  return (
    <div className="faq-page">
      <section className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p className="page-subtitle">
            Find answers to common questions about myofunctional therapy
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
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
                plans may cover myofunctional therapy. We can provide documentation for you to submit 
                to your insurance company. Reimbursement is not guaranteed.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I use my HSA or FSA?</h3>
              <p>
                Yes! Myofunctional therapy is a qualified medical expense and can be paid for with your HSA or FSA.
              </p>
            </div>
            <div className="faq-item">
              <h3>How long are therapy sessions?</h3>
              <p>
                Initial consultations typically last 60-90 minutes. Follow-up sessions are usually
                30-45 minutes and occur every 3-4 weeks during active treatment.
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

      <section className="section cta-info">
        <div className="container">
          <h2>Still Have Questions?</h2>
          <p>
            We're here to help. Contact us to discuss your specific concerns and learn how
            myofunctional therapy can benefit you.
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

export default FAQ
