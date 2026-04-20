import { useState } from "react";

const JOBS = [
  {
    role: "Senior iOS Developer",
    company: "McDonald's",
    badge: null,
    date: "04/2024 – Present",
    bullets: [
      "Led SwiftUI adoption, migrating critical UIKit components while maintaining production stability.",
      "Designed modern concurrency architecture using Swift async/await, improving responsiveness across core modules.",
      "Led Swift 6 migration, resolving thousands of concurrency warnings across modules and test suites.",
      "Implemented enterprise accessibility compliance (VoiceOver, Dynamic Type, semantic navigation) across revenue-critical flows.",
      "Architected scalable background asset system for country-based promotions and dynamic content delivery.",
    ],
    stack: ["Swift", "SwiftUI", "UIKit", "Async/Await", "Swift 6", "Accessibility", "VoiceOver", "Dynamic Type"],
  },
  {
    role: "Senior iOS Engineer · Technical Lead (Architecture)",
    company: "Reparanet",
    badge: "Contractor",
    date: "01/2025 – 03/2026",
    bullets: [
      "Designed and executed crisis recovery strategy, reducing crash rate from ~90% to 0% in under 30 days.",
      "Defined stabilization roadmap: diagnostics, observability, architecture refactor, and phased delivery.",
      "Architected background geolocation system with automated push notifications using CoreLocation and BackgroundTasks.",
      "Built autonomous background processing system persisting operational events even when the app is closed.",
      "Led UI modernization (UIKit → SwiftUI) using MVVM and Clean Architecture.",
    ],
    stack: ["Swift", "SwiftUI", "UIKit", "CoreLocation", "BackgroundTasks", "MVVM", "Clean Architecture", "Observability"],
  },
  {
    role: "Senior iOS Engineer · Technical Lead (Architecture)",
    company: "Sweat Sonic — Fitness App",
    badge: "Contractor",
    date: "04/2024 – 04/2025",
    bullets: [
      "Led full UI modernization migrating 30+ screens from UIKit to SwiftUI with pixel-perfect accuracy.",
      "Designed modern concurrency architecture using Swift async/await.",
      "Architected high-performance caching system (CoreData + memory layers) improving performance by ~60%.",
      "Built media delivery pipeline using AVPlayer, HLS streaming, and Core Animation.",
      "Implemented CI/CD pipeline with Fastlane and GitFlow, reducing deployment time by ~40%.",
    ],
    stack: ["Swift", "SwiftUI", "AVPlayer", "HLS", "CoreData", "Async/Await", "Fastlane", "GitFlow", "CI/CD"],
  },
  {
    role: "Mobile Systems Architect · Technical Consultant",
    company: "Upwork",
    badge: "Top Rated Plus",
    date: "06/2022 – 03/2026",
    bullets: [
      "Led complex system migrations (Objective-C → Swift → SwiftUI) modernizing legacy mobile platforms.",
      "Designed scalable mobile architectures for startups and scaleups across the USA.",
      "Provided technical consulting for system recovery, modernization, and scalability.",
      "Led App Store delivery pipelines and production releases.",
      "Designed accessibility compliance strategies aligned with WCAG and European Accessibility Act (EAA).",
    ],
    stack: ["Swift", "SwiftUI", "Objective-C", "WCAG", "EAA", "App Store Connect", "Architecture Consulting"],
  },
  {
    role: "Senior iOS Engineer · Technical Lead (Architecture)",
    company: "BraingApps",
    badge: "Contractor",
    date: "06/2023 – 10/2025",
    bullets: [
      "Led phased modernization (Objective-C → UIKit → SwiftUI) preserving production stability.",
      "Designed accessibility-first architecture compliant with European WCAG standards.",
      "Defined cross-platform accessibility strategy coordinating with Android teams.",
      "Architected secure payment infrastructure supporting credit cards, PayPal, and bank transfers.",
      "Led full development lifecycle from planning and architecture to deployment.",
    ],
    stack: ["Swift", "SwiftUI", "UIKit", "Objective-C", "WCAG", "PayPal SDK", "MVVM", "App Store Connect"],
  },
  {
    role: "iOS Developer",
    company: "Banco Hipotecario · Coderio",
    badge: null,
    date: "06/2022 – 04/2024",
    bullets: [
      "Designed secure onboarding architecture for financial flows using MVVM and Coordinator pattern.",
      "Led modernization of banking infrastructure integrating Firebase, Digital Identity SDKs, and analytics.",
      "Defined deployment and release processes using GitFlow and App Store Connect.",
      "Acted as technical reference for code quality, code reviews, and developer onboarding.",
    ],
    stack: ["Swift", "UIKit", "Firebase", "Digital Identity SDK", "MVVM", "Coordinator", "GitFlow", "TestFlight"],
  },
  {
    role: "iOS Developer",
    company: "Naranja X — Bank",
    badge: null,
    date: "09/2021 – 06/2022",
    bullets: [
      "Architected banking interfaces using VIPER and programmatic UIKit, adhering to Apple HIG.",
      "Implemented comprehensive testing strategy with unit, integration, and UI snapshot tests (XCTest).",
      "Modernized legacy modules refactoring MVP → MVVM, improving maintainability.",
      "Managed CI/CD pipeline with Bitrise and CocoaPods.",
    ],
    stack: ["Swift", "UIKit", "VIPER", "MVVM", "XCTest", "Bitrise", "CocoaPods", "Alamofire"],
  },
  {
    role: "Full Stack Web Developer",
    company: "Ixpandit",
    badge: null,
    date: "07/2021 – 09/2021",
    bullets: [
      "Built frontend modules using React and Laravel.",
      "Developed backend services with Node.js and Laravel.",
      "Managed MySQL databases and deployment pipelines.",
    ],
    stack: ["React", "Laravel", "Node.js", "MySQL", "Docker", "PHPUnit"],
  },
  {
    role: "WordPress Developer",
    company: "Upwork — Freelance",
    badge: null,
    date: "04/2018 – 08/2021",
    bullets: [
      "Developed custom e-commerce, e-learning, and landing websites using WordPress and WooCommerce.",
      "Customized themes and optimized performance through caching and code refactoring.",
      "Integrated LATAM payment gateways (MercadoPago, PayPal) ensuring secure checkout flows.",
    ],
    stack: ["WordPress", "WooCommerce", "Elementor", "MercadoPago", "PayPal", "Yoast SEO"],
  },
];

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const Work = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="experience">
      <div className="reveal">
        <p className="sec-label">Work history</p>
        <h2 className="sec-title">Experience</h2>
      </div>
      <div className="timeline reveal">
        {JOBS.map((job, i) => (
          <div key={i} className={`tl-item${openIdx === i ? " open" : ""}`}>
            <div className="tl-header" onClick={() => toggle(i)}>
              <div className="tl-left">
                <div className="tl-role">{job.role}</div>
                <div className="tl-company">
                  {job.company}
                  {job.badge && <span className="badge">{job.badge}</span>}
                </div>
              </div>
              <div className="tl-right">
                <div className="tl-date">{job.date}</div>
                <div className="tl-chevron"><ChevronIcon /></div>
              </div>
            </div>
            <div className="tl-body">
              <div className="tl-body-inner">
                <ul className="tl-bullets">
                  {job.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                </ul>
                <div className="tl-stack">
                  {job.stack.map(s => <span key={s} className="tl-tag">{s}</span>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
