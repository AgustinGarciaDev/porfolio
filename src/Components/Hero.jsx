const Hero = () => (
  <section id="hero" style={{ maxWidth: "1200px" }}>
    <p className="hero-tag">Senior iOS Engineer · Buenos Aires, Argentina</p>
    <h1 className="hero-name">Agustín García.</h1>
    <h2 className="hero-sub">I build things for iOS.</h2>
    <p className="hero-body">
      Senior iOS Engineer specializing in Mobile Architecture and System-Level Engineering.
      5+ years building production iOS apps — from banking onboarding to enterprise-scale migrations.
    </p>
    <div className="hero-actions">
      <a href="#contact" className="btn-primary">
        Get in touch
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
      <a href="#projects" className="btn-outline">View work</a>
    </div>
    <div className="hero-stats">
      <div>
        <div className="hero-stat-num">5+</div>
        <div className="hero-stat-label">Years iOS dev</div>
      </div>
      <div>
        <div className="hero-stat-num">8+</div>
        <div className="hero-stat-label">Years in software</div>
      </div>
      <div>
        <div className="hero-stat-num">9</div>
        <div className="hero-stat-label">Companies</div>
      </div>
    </div>
  </section>
);

export default Hero;
