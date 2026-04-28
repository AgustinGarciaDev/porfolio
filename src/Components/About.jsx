const SKILLS = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "Objective-C",
  "Combine",
  "Swift Async/Await",
  "MVVM",
  "Clean Architecture",
  "Modular Systems",
  "Dependency Injection",
  "CoreData",
  "CoreLocation",
  "CoreMotion",
  "CoreImage",
  "Vision Framework",
  "BackgroundTasks",
  "AVFoundation",
  "HLS",
  "User Notifications",
  "Lottie",
  "SwiftData",
  "SQLite",
  "KeychainAccess",
  "Firebase",
  "Supabase Swift",
  "REST APIs",
  "OpenAI SDK",
  "OpenRouter",
  "Vector Embeddings",
  "pgvector",
  "NestJS",
  "TypeScript",
  "Fastlane",
  "Swift Package Manager",
  "SwiftLint",
  "Xcode Cloud",
  "Firebase",
  "Sentry",
  "App Store Connect",
  "App Store Submission",
  "Review Guidelines",
  "Rejection Resolution",
  "Privacy Compliance",
  "VoiceOver",
  "WCAG",
  "EAA Compliance",
  "Accessibility Audits",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "XCTest",
];

const About = () => (
  <section id="about">
    <div className="reveal">
      <p className="sec-label">About me</p>
      <h2 className="sec-title">Who I am</h2>
    </div>
    <div className="about-grid reveal">
      <div className="about-text">
        <p>
          Hi! I'm Agustín — a Senior iOS Engineer with 5+ years of professional mobile experience
          and 8+ years in software overall. I specialize in architecture, system-level engineering,
          and leading complex migrations that ship without breaking production.
        </p>
        <p>
          I've worked across startups and enterprise clients in the USA and LATAM — from banking
          apps to fitness platforms to McDonald's. I care deeply about accessibility, clean architecture,
          and code that lasts.
        </p>
        <p className="skills-label">Core technologies</p>
        <div className="skills-grid">
          {SKILLS.map(s => <span key={s} className="skill-pill">{s}</span>)}
        </div>
      </div>
      <div className="about-photo-wrap">
        <img src="/assets/photo_profile.png" alt="Agustín García" className="about-photo" />
        <div className="about-links">
          <a href="https://github.com/AgustinGarciaDev" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/agustingarciadev/" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
          <a href="/assets/AgustinGarcia-EN.pdf" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
