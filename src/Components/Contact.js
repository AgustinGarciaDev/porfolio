const Contact = () => (
  <section id="contact">
    <div className="reveal">
      <p className="sec-label" style={{ textAlign: "center" }}>Get in touch</p>
      <h2 className="contact-title">What's the next step?</h2>
      <p className="contact-body">
        I'm open to new opportunities and challenges — from startups building their first iOS app
        to enterprises needing a technical lead. My inbox is always open.
      </p>
      <a href="mailto:agustinchinchilla16@gmail.com" className="btn-primary" style={{ display: "inline-flex" }}>
        Send me an email
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </section>
);

export default Contact;
