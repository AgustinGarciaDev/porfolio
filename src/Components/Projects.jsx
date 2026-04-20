const FEATURED = [
  {
    title: "McDonald's — iOS App",
    desc: "Enterprise-scale iOS app for McDonald's. Led Swift 6 migration, SwiftUI modernization, and enterprise accessibility compliance across revenue-critical flows.",
    stack: ["Swift", "SwiftUI", "Async/Await", "Accessibility", "VoiceOver", "Dynamic Type"],
    link: null,
    images: ["/assets/mc1.webp", "/assets/mc2.webp", "/assets/mc3.webp"],
  },
  {
    title: "Banco Hipotecario — Onboarding",
    desc: "Customer onboarding for account sign-ups — identity validation, referral system, geolocation, and universal links. Secure architecture with MVVM + Coordinator.",
    stack: ["Swift", "UIKit", "Firebase", "Digital Identity SDK", "MVVM", "Coordinator"],
    link: "https://apps.apple.com/ar/app/banca-m%C3%B3vil-banco-hipotecario/id469262970",
    images: ["/assets/hipotecario_one.webp", "/assets/hipotecario_two.webp", "/assets/hipotecario_three.webp"],
  },
  {
    title: "Sweat Sonic — Fitness App",
    desc: "Migrated 30+ screens from UIKit to SwiftUI. Built a high-performance caching system improving performance by ~60%, and a media pipeline with AVPlayer + HLS streaming.",
    stack: ["Swift", "SwiftUI", "AVPlayer", "HLS", "CoreData", "Fastlane", "CI/CD"],
    link: null,
    images: ["/assets/sweat_sonic_one.webp", "/assets/sweat_sonic_two.webp", "/assets/sweat_sonic_three.webp"],
  },
];

const OTHER = [
  {
    title: "Reparanet Crash Recovery",
    desc: "Reduced crash rate from ~90% to 0% in under 30 days. Full architecture refactor and observability system.",
    stack: ["Swift", "SwiftUI", "CoreLocation", "BackgroundTasks"],
  },
  {
    title: "Roly — M-Commerce",
    desc: "European promotional textile brand app. Catalog browsing and wholesale order placement.",
    stack: ["Swift", "UIKit", "Firebase", "SQLite", "MVVM"],
  },
  {
    title: "Banco Hipotecario — Wallets",
    desc: "Pull transfer consent flow integrating the MODO digital wallet SDK.",
    stack: ["Swift", "UIKit", "SDK MODO", "MVVM"],
  },
  {
    title: "Naranja X Merchants",
    desc: "Commercial onboarding using dongle and QR codes for merchants.",
    stack: ["Swift", "UIKit", "MVVM"],
  },
  {
    title: "Scanner DNI",
    desc: "Scan identity document barcodes for streamlined identity validation.",
    stack: ["Swift", "SwiftUI", "Combine"],
  },
  {
    title: "Music App",
    desc: "Users can add songs, listen, adjust volume, and download them.",
    stack: ["SwiftUI", "Alamofire", "Core Data"],
  },
];

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const FolderIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--fg2)" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <path d="M9 9h6M9 13h4"/>
  </svg>
);

const FeaturedCard = ({ project, reversed }) => (
  <div className={`featured-card reveal${reversed ? " reversed" : ""}`}>
    <div className="fc-body">
      <span className="fc-label">Featured project</span>
      <h3 className="fc-title">{project.title}</h3>
      <p className="fc-desc">{project.desc}</p>
      <div className="fc-stack">
        {project.stack.map(s => <span key={s} className="fc-tag">{s}</span>)}
      </div>
      {project.link
        ? <a href={project.link} target="_blank" rel="noopener noreferrer" className="fc-link">
            View on App Store <ArrowIcon />
          </a>
        : <span className="fc-private">Enterprise · NDA</span>
      }
    </div>
    <div className="fc-visual">
      <div className="phones-stage">
        <div className="ip17 ip17-side ip17-left">
          <img className="ip17-screenshot" src={project.images[0]} alt="" />
        </div>
        <div className="ip17 ip17-center">
          <img className="ip17-screenshot" src={project.images[1]} alt="" />
        </div>
        <div className="ip17 ip17-side ip17-right">
          <img className="ip17-screenshot" src={project.images[2]} alt="" />
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section id="projects" style={{ maxWidth: "1200px" }}>
    <div className="reveal">
      <p className="sec-label">Selected work</p>
      <h2 className="sec-title">Projects</h2>
    </div>

    <div id="featured-projects">
      {FEATURED.map((p, i) => (
        <FeaturedCard key={i} project={p} reversed={i % 2 !== 0} />
      ))}
    </div>

    <h3 className="other-heading reveal">More projects</h3>
    <div className="other-grid">
      {OTHER.map((p, i) => (
        <div key={i} className="other-card reveal">
          <div className="other-top">
            <div className="other-icon"><FolderIcon /></div>
            <a href="#" className="other-ext"><ExternalIcon /></a>
          </div>
          <div className="other-name">{p.title}</div>
          <div className="other-desc">{p.desc}</div>
          <div className="other-tags">
            {p.stack.map(s => <span key={s} className="other-tag">{s}</span>)}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
